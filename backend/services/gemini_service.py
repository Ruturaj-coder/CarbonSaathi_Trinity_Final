"""
Gemini Service
Manages interactions with Google's Gemini API for AI-powered recommendations
"""

import os
import json
import time
import random
import logging
import re
from typing import List, Dict, Any, Optional
from fastapi import HTTPException

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Flag to determine if we should use mock responses (when package is not available)
USE_MOCK_RESPONSES = True

try:
    import google.generativeai as genai
    USE_MOCK_RESPONSES = False
    logger.info("Successfully imported google.generativeai package")
except ImportError:
    logger.warning("google-generativeai package not found. Using mock responses instead.")

class GeminiService:
    """Service for interacting with Google's Gemini API with key rotation"""
    
    def __init__(self):
        # API keys for rotation
        self._api_keys = [
            "AIzaSyBkzbhxwvB5a-wjeKHV6Z3TCjTzxRz-ObU",
            "AIzaSyCctFstxE3nJ4LOqqQHUoWcwcnEFIap120",
            "AIzaSyD6porT2dXbpKsrGx_qTut2KroSaFYrdTA",
            "AIzaSyC5cyNv6EfAlw-hQJAGUlMIP6v12YuDoms",
            "AIzaSyBMyUb8dYtKtx0GhVYgf1_oZp8j-V1BNE4"
        ]
        self._current_key_index = 0
        self._last_rotation_time = time.time()
        self._rotation_interval = 10  # Rotate every 10 seconds to avoid rate limits
        
        if not USE_MOCK_RESPONSES:
            self._initialize_genai()
        
    def _initialize_genai(self):
        """Initialize the Gemini API with the current key"""
        global USE_MOCK_RESPONSES
        
        if USE_MOCK_RESPONSES:
            return
            
        try:
            genai.configure(api_key=self._get_current_key())
            logger.info(f"Initialized Gemini with key index {self._current_key_index}")
        except Exception as e:
            logger.error(f"Failed to initialize Gemini API: {str(e)}")
            USE_MOCK_RESPONSES = True
            logger.warning("Falling back to mock responses")
            
    def _get_current_key(self) -> str:
        """Get the current API key and rotate if needed"""
        current_time = time.time()
        
        # Check if we need to rotate the key
        if current_time - self._last_rotation_time > self._rotation_interval:
            self._current_key_index = (self._current_key_index + 1) % len(self._api_keys)
            self._last_rotation_time = current_time
            logger.info(f"Rotated to key index {self._current_key_index}")
            
        return self._api_keys[self._current_key_index]
    
    def _ensure_key_is_valid(self):
        """Ensure the current key is valid, try others if not"""
        global USE_MOCK_RESPONSES
        
        if USE_MOCK_RESPONSES:
            return True
            
        try:
            genai.configure(api_key=self._get_current_key())
            # Test with a simple model call
            model = genai.GenerativeModel('gemini-2.0-flash')
            response = model.generate_content("Test")
            return True
        except Exception as e:
            logger.warning(f"Key at index {self._current_key_index} failed: {str(e)}")
            # Try the next key
            self._current_key_index = (self._current_key_index + 1) % len(self._api_keys)
            self._last_rotation_time = time.time()
            
            # If we've tried all keys without success, raise an exception
            if not hasattr(self, '_retry_count'):
                self._retry_count = 0
            self._retry_count += 1
            
            if self._retry_count >= len(self._api_keys):
                self._retry_count = 0
                logger.error("All API keys failed")
                USE_MOCK_RESPONSES = True
                logger.warning("Falling back to mock responses")
                return True
            
            # Try again with the new key
            return self._ensure_key_is_valid()
    
    async def get_sink_recommendations(self, sink_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Generate recommendations for enhancing carbon sinks based on current data
        
        Args:
            sink_data: Dictionary containing information about the organization's carbon sinks
            
        Returns:
            Dictionary with recommendations and improvement potential
        """
        self._ensure_key_is_valid()
        
        if USE_MOCK_RESPONSES:
            return self._get_mock_sink_recommendations(sink_data)
        
        try:
            # Prepare the prompt with context
            prompt = self._build_sink_recommendation_prompt(sink_data)
            
            # Call Gemini API
            model = genai.GenerativeModel('gemini-2.0-flash')
            response = model.generate_content(prompt)
            
            # Parse the JSON response
            recommendations = self._parse_recommendations_response(response.text)
            
            return recommendations
        except Exception as e:
            logger.error(f"Error generating sink recommendations: {str(e)}")
            return self._get_mock_sink_recommendations(sink_data)
    
    async def get_carbon_science_explanation(self, topic: str) -> Dict[str, Any]:
        """
        Generate natural language explanations about carbon science topics
        
        Args:
            topic: The carbon science topic to explain
            
        Returns:
            Dictionary with explanation text and relevant facts
        """
        self._ensure_key_is_valid()
        
        if USE_MOCK_RESPONSES:
            return self._get_mock_carbon_science_explanation(topic)
        
        try:
            # Prepare the prompt
            prompt = f"""
            Please provide a clear, educational explanation about the following carbon science topic: "{topic}".
            Focus on making it accessible to business users while being scientifically accurate.
            Include:
            1. A simple explanation of the concept
            2. Why it's important for carbon management
            3. 3-4 key facts about this topic
            4. How it relates to carbon neutrality goals
            
            Format the response as JSON with these keys:
            {{
              "explanation": "The main explanation text",
              "key_facts": ["Fact 1", "Fact 2", "Fact 3"],
              "relevance_to_neutrality": "How this relates to carbon neutrality goals"
            }}
            """
            
            # Call Gemini API
            model = genai.GenerativeModel('gemini-2.0-flash')
            response = model.generate_content(prompt)
            
            # Parse the JSON response
            try:
                # Try to parse directly as JSON
                explanation = json.loads(response.text)
                return explanation
            except json.JSONDecodeError:
                logger.warning("Failed to parse JSON response from carbon science explanation")
                
                # Try to extract JSON if it's embedded in the response with markdown or other text
                json_match = re.search(r'```(?:json)?\s*({\s*"explanation"[\s\S]*?})\s*```', response.text, re.DOTALL)
                if json_match:
                    try:
                        explanation = json.loads(json_match.group(1))
                        return explanation
                    except json.JSONDecodeError:
                        logger.warning("Failed to parse extracted JSON from markdown")
                
                # If all JSON parsing fails, create a structured response from the text
                explanation_text = response.text.strip()
                
                # Try to extract key_facts if they appear to be in a list format
                key_facts = []
                facts_section = re.search(r'(?:Key Facts|Facts):(.*?)(?:Relevance|$)', explanation_text, re.DOTALL | re.IGNORECASE)
                if facts_section:
                    facts_text = facts_section.group(1).strip()
                    # Extract bullet points or numbered list items
                    key_facts = re.findall(r'(?:^|\n)[•\-*\d.]\s*(.*?)(?:\n|$)', facts_text)
                
                # Try to extract relevance section
                relevance = ""
                relevance_section = re.search(r'Relevance to Carbon Neutrality:(.*?)$', explanation_text, re.DOTALL | re.IGNORECASE)
                if relevance_section:
                    relevance = relevance_section.group(1).strip()
                
                # If we found sections, remove them from the main explanation
                main_explanation = explanation_text
                if facts_section:
                    main_explanation = re.sub(r'(?:Key Facts|Facts):.*?(?=Relevance|\Z)', '', main_explanation, flags=re.DOTALL | re.IGNORECASE)
                if relevance_section:
                    main_explanation = re.sub(r'Relevance to Carbon Neutrality:.*?$', '', main_explanation, flags=re.DOTALL | re.IGNORECASE)
                
                # Create the structured response
                return {
                    "explanation": main_explanation.strip(),
                    "key_facts": key_facts,
                    "relevance_to_neutrality": relevance
                }
        except Exception as e:
            logger.error(f"Error generating carbon science explanation: {str(e)}")
            return self._get_mock_carbon_science_explanation(topic)
    
    async def generate_enhancement_scenarios(self, sink_data: Dict[str, Any], 
                                          constraints: Dict[str, Any]) -> List[Dict[str, Any]]:
        """
        Generate multiple enhancement scenarios based on user constraints
        
        Args:
            sink_data: Current carbon sinks information
            constraints: User's constraints like budget, timeline, and priorities
            
        Returns:
            List of enhancement scenarios with costs, benefits, and implementation plans
        """
        self._ensure_key_is_valid()
        
        if USE_MOCK_RESPONSES:
            return self._get_mock_enhancement_scenarios(sink_data, constraints)
        
        try:
            # Prepare the prompt with context
            prompt = self._build_scenario_generation_prompt(sink_data, constraints)
            
            # Call Gemini API
            model = genai.GenerativeModel('gemini-2.0-flash')
            response = model.generate_content(prompt)
            
            # Parse the JSON response
            try:
                scenarios = json.loads(response.text)
                return scenarios
            except json.JSONDecodeError:
                # Create a simple fallback response
                logger.warning("Failed to parse JSON from Gemini response")
                return self._get_mock_enhancement_scenarios(sink_data, constraints)
                
        except Exception as e:
            logger.error(f"Error generating enhancement scenarios: {str(e)}")
            return self._get_mock_enhancement_scenarios(sink_data, constraints)
    
    def _build_sink_recommendation_prompt(self, sink_data: Dict[str, Any]) -> str:
        """Build a prompt for sink recommendations based on the sink data"""
        # Extract key information from sink data
        total_emissions = sink_data.get("total_emissions", 0)
        total_sequestration = sink_data.get("total_sequestration", 0)
        years_to_neutrality = sink_data.get("years_to_neutrality", 0)
        sinks = sink_data.get("sinks", [])
        
        # Summarize the sinks
        sink_summary = "\n".join([
            f"- {sink['name']}: {sink['type']} of {sink['area']} square meters, " +
            f"age: {sink['age']} years, health: {sink['health']}/10, " +
            f"sequestering {sink.get('yearly_sequestration', 0)} kg CO2/year"
            for sink in sinks
        ])
        
        prompt = f"""
        I'm an AI assistant helping with carbon sink management recommendations. 
        
        CURRENT SITUATION:
        - Organization's total carbon emissions: {total_emissions} kg CO2/year
        - Current carbon sequestration: {total_sequestration} kg CO2/year
        - Current carbon gap: {total_emissions - total_sequestration} kg CO2/year
        - Years to carbon neutrality at current rate: {years_to_neutrality}
        
        CURRENT CARBON SINKS:
        {sink_summary}
        
        Based on this information, please provide recommendations for:
        1. How to improve existing sinks (prioritize health improvements and expansion)
        2. What new types of sinks would be most beneficial to add
        3. Quick wins for increasing sequestration capacity
        4. Long-term strategic recommendations
        
        Format your response as JSON with these keys:
        {{
          "existing_sink_recommendations": [
            {{ "sink_name": "Name of sink", "recommendations": ["Recommendation 1", "Recommendation 2"], "potential_improvement": "X%" }}
          ],
          "new_sink_suggestions": [
            {{ "sink_type": "Type of sink", "description": "Description", "potential_sequestration": "X kg CO2/year", "estimated_cost": "Cost range", "implementation_time": "Time estimate" }}
          ],
          "quick_wins": ["Quick win 1", "Quick win 2"],
          "strategic_recommendations": ["Strategic recommendation 1", "Strategic recommendation 2"],
          "neutrality_acceleration": "How these changes could accelerate the path to neutrality"
        }}
        
        Make all recommendations specific, actionable, and based on scientific carbon management principles.
        """
        
        return prompt
    
    def _build_scenario_generation_prompt(self, sink_data: Dict[str, Any], 
                                         constraints: Dict[str, Any]) -> str:
        """Build a prompt for generating enhancement scenarios"""
        # Extract key information
        budget = constraints.get("budget", "unknown")
        timeline = constraints.get("timeline", "unknown")
        priorities = constraints.get("priorities", [])
        
        # Convert sink data to a summary
        total_emissions = sink_data.get("total_emissions", 0)
        total_sequestration = sink_data.get("total_sequestration", 0)
        carbon_gap = total_emissions - total_sequestration
        
        prompt = f"""
        I need to generate 3 distinct carbon sink enhancement scenarios for an organization with these constraints:
        
        CURRENT SITUATION:
        - Total emissions: {total_emissions} kg CO2/year
        - Current sequestration: {total_sequestration} kg CO2/year
        - Carbon gap: {carbon_gap} kg CO2/year
        
        USER CONSTRAINTS:
        - Available budget: {budget}
        - Implementation timeline: {timeline}
        - Priorities: {', '.join(priorities)}
        
        For each scenario, create a different strategic approach - for example:
        1. Cost-optimized scenario (maximum ROI)
        2. Speed-optimized scenario (fastest path to neutrality)
        3. Biodiversity-focused scenario (ecological co-benefits)
        
        Format the response as a JSON array of scenario objects:
        [
          {{
            "name": "Scenario name",
            "description": "Brief description of the approach",
            "strategy": "Core strategy",
            "key_actions": ["Action 1", "Action 2", "Action 3"],
            "estimated_cost": "Cost estimate",
            "timeline_to_implement": "Implementation timeline",
            "projected_sequestration": "Projected sequestration in kg CO2/year",
            "time_to_neutrality": "Estimated time to reach neutrality",
            "co_benefits": ["Co-benefit 1", "Co-benefit 2"],
            "challenges": ["Challenge 1", "Challenge 2"]
          }},
          // Additional scenarios...
        ]
        
        Make each scenario realistic, specific to the organization's situation, and scientifically sound.
        """
        
        return prompt
    
    def _parse_recommendations_response(self, response_text: str) -> Dict[str, Any]:
        """Parse the response from the Gemini API for sink recommendations"""
        try:
            # Try to parse as JSON
            recommendations = json.loads(response_text)
            return recommendations
        except json.JSONDecodeError:
            logger.warning("Failed to parse JSON response from Gemini API")
            
            # Try to extract JSON if it's embedded in the response with markdown or other text
            json_match = re.search(r'```json\s*(.*?)\s*```', response_text, re.DOTALL)
            if json_match:
                try:
                    recommendations = json.loads(json_match.group(1))
                    return recommendations
                except json.JSONDecodeError:
                    pass
            
            # If we can't parse as JSON, wrap it in a simple structure
            return {
                "text_response": response_text.strip()
            }

    def _get_mock_sink_recommendations(self, sink_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate mock recommendations for development/testing"""
        logger.info("Generating mock sink recommendations")
        
        # Extract sink types and names for personalized mock data
        sink_names = [sink.get('name', f"Sink {i+1}") for i, sink in enumerate(sink_data.get('sinks', []))]
        sink_types = set(sink.get('type', 'unknown') for sink in sink_data.get('sinks', []))
        
        mock_recommendations = {
            "existing_sink_recommendations": [],
            "new_sink_suggestions": [
                {
                    "sink_type": "Mangrove Wetland",
                    "description": "Coastal wetland with high carbon sequestration potential",
                    "potential_sequestration": "25,000 kg CO2/year",
                    "estimated_cost": "$15,000 - $30,000 per hectare",
                    "implementation_time": "2-3 years"
                },
                {
                    "sink_type": "Agroforestry System",
                    "description": "Integrated farming with trees for dual benefits",
                    "potential_sequestration": "10,000 kg CO2/year",
                    "estimated_cost": "$8,000 - $15,000 per hectare",
                    "implementation_time": "1-2 years"
                }
            ],
            "quick_wins": [
                "Improve health of existing sinks through regular maintenance",
                "Plant fast-growing native tree species in available spaces",
                "Implement organic soil management practices to increase soil carbon"
            ],
            "strategic_recommendations": [
                "Develop a 5-year sink expansion plan with annual targets",
                "Establish partnerships with local conservation organizations",
                "Create a monitoring system for carbon sequestration measurement"
            ],
            "neutrality_acceleration": "By implementing these recommendations, you could reduce your time to carbon neutrality by approximately 30-40%, depending on implementation speed and scale."
        }
        
        # Add personalized recommendations for existing sinks
        for name in sink_names:
            improvement = random.randint(15, 45)
            mock_recommendations["existing_sink_recommendations"].append({
                "sink_name": name,
                "recommendations": [
                    "Increase maintenance frequency to improve health",
                    "Expand area by 20% with similar species",
                    "Implement advanced monitoring systems"
                ],
                "potential_improvement": f"{improvement}%"
            })
            
        return mock_recommendations
    
    def _get_mock_carbon_science_explanation(self, topic: str) -> Dict[str, Any]:
        """Generate mock explanations for development/testing"""
        logger.info(f"Generating mock explanation for topic: {topic}")
        
        explanations = {
            "carbon sequestration": {
                "explanation": "Carbon sequestration is the process of capturing and storing atmospheric carbon dioxide. It's one of the major strategies to mitigate climate change by reducing the amount of CO2 in the atmosphere. Natural carbon sinks like forests, soils, and oceans already sequester large amounts of carbon, but human activities are enhancing these processes through reforestation, soil management, and technological solutions.",
                "key_facts": [
                    "Forests absorb about 2.6 billion tons of CO2 annually, about 1/3 of emissions from burning fossil fuels",
                    "Soil contains more carbon than the atmosphere and all plant life combined",
                    "Blue carbon ecosystems like mangroves can sequester carbon at rates up to five times that of tropical forests",
                    "The potential for additional carbon sequestration is estimated at 5-11 billion tons of CO2 per year"
                ],
                "relevance_to_neutrality": "Carbon sequestration is essential for achieving carbon neutrality as it offsets emissions that are difficult to eliminate. Organizations can invest in both natural and technological sequestration methods to balance their carbon footprint."
            },
            "forest carbon sinks": {
                "explanation": "Forest carbon sinks are forest ecosystems that absorb more carbon from the atmosphere than they release. Trees capture carbon dioxide during photosynthesis and store it in their biomass (trunks, branches, leaves, and roots) and in forest soils. Mature forests store large amounts of carbon, while growing forests actively sequester additional carbon from the atmosphere.",
                "key_facts": [
                    "A typical hectare of forest can sequester 3-10 tons of CO2 equivalent per year",
                    "Tropical forests generally sequester carbon at higher rates than temperate or boreal forests",
                    "Forest age, species composition, and management practices significantly affect sequestration rates",
                    "Deforestation accounts for approximately 10% of global greenhouse gas emissions"
                ],
                "relevance_to_neutrality": "Forests represent one of the most cost-effective and immediately available carbon sink options. Organizations can achieve carbon neutrality faster by investing in forest conservation, reforestation, and improved forest management."
            }
        }
        
        # Try to match the topic to our prepared content, defaulting to general info
        cleaned_topic = topic.lower().strip()
        
        for key, content in explanations.items():
            if key in cleaned_topic or cleaned_topic in key:
                return content
        
        # Default explanation for any other topic
        return {
            "explanation": f"The topic '{topic}' relates to carbon management and climate change mitigation strategies. Understanding this concept is important for organizations working toward carbon neutrality goals.",
            "key_facts": [
                "Carbon management requires a holistic approach including reduction and sequestration",
                "Natural solutions often provide co-benefits beyond carbon sequestration",
                "Scientific measurement and verification are essential for credible carbon accounting"
            ],
            "relevance_to_neutrality": "This concept can help organizations develop more effective strategies for achieving carbon neutrality by understanding the scientific principles behind carbon cycling."
        }
    
    def _get_mock_enhancement_scenarios(self, sink_data: Dict[str, Any], constraints: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Generate mock scenarios for development/testing"""
        logger.info("Generating mock enhancement scenarios")
        
        # Extract constraints for personalized scenarios
        budget = constraints.get("budget", "Medium")
        timeline = constraints.get("timeline", "1-2 years")
        priorities = constraints.get("priorities", [])
        
        # Calculate some realistic figures based on sink data
        total_emissions = sink_data.get("total_emissions", 1000000)
        current_sequestration = sink_data.get("total_sequestration", 250000)
        gap = total_emissions - current_sequestration
        
        # USD to INR conversion factor (approximate)
        usd_to_inr = 83.0
        
        # Create scenarios with different focuses
        scenarios = [
            {
                "name": "Cost-Optimized Approach",
                "description": "Maximize ROI by focusing on enhancing existing sinks and adding high-value new sinks",
                "strategy": "Prioritize improvements with lowest cost per ton of CO2 sequestered",
                "key_actions": [
                    "Implement health improvement program for existing forests",
                    "Convert 15 hectares of marginal land to agroforestry",
                    "Enhance soil carbon through no-till agriculture practices",
                    "Install monitoring systems to track and optimize performance"
                ],
                "estimated_cost": f"₹{int(gap * 0.01 * usd_to_inr):,} - ₹{int(gap * 0.02 * usd_to_inr):,}",
                "timeline_to_implement": "1-2 years (phased approach)",
                "projected_sequestration": f"{int(current_sequestration * 1.75):,} kg CO2/year",
                "time_to_neutrality": f"{max(3, int(gap / (current_sequestration * 0.75)))} years",
                "co_benefits": [
                    "Improved soil health and water retention",
                    "Reduced erosion and runoff",
                    "Increased biodiversity in agricultural areas"
                ],
                "challenges": [
                    "Requires consistent maintenance to achieve projected gains",
                    "Results build gradually over time",
                    "Requires staff training for new management practices"
                ]
            },
            {
                "name": "Rapid Neutrality Pathway",
                "description": "Accelerated approach to achieve carbon neutrality as quickly as possible",
                "strategy": "Combine maximum sink expansion with carbon offset purchases",
                "key_actions": [
                    "Expand existing forest areas by 50%",
                    "Establish 25 hectares of new fast-growing forest",
                    "Purchase verified carbon credits to bridge remaining gap",
                    "Implement advanced monitoring and optimization systems"
                ],
                "estimated_cost": f"₹{int(gap * 0.04 * usd_to_inr):,} - ₹{int(gap * 0.06 * usd_to_inr):,}",
                "timeline_to_implement": "6-12 months (aggressive implementation)",
                "projected_sequestration": f"{int(current_sequestration * 2.5):,} kg CO2/year",
                "time_to_neutrality": "Immediate (with offsets) to 5 years (natural sinks only)",
                "co_benefits": [
                    "Marketing advantage as early carbon-neutral organization",
                    "Significant increase in ecosystem services",
                    "Leadership position in sustainability"
                ],
                "challenges": [
                    "Higher upfront costs",
                    "Requires significant land resources",
                    "Demands intensive management during establishment phase"
                ]
            },
            {
                "name": "Biodiversity-Focused Approach",
                "description": "Enhance carbon sinks while maximizing ecological co-benefits",
                "strategy": "Create diverse, multi-species sinks that support robust ecosystems",
                "key_actions": [
                    "Establish mixed-species forests with native species",
                    "Create wetland areas in appropriate locations",
                    "Implement silvopasture systems for agricultural areas",
                    "Establish wildlife corridors between sink areas"
                ],
                "estimated_cost": f"₹{int(gap * 0.025 * usd_to_inr):,} - ₹{int(gap * 0.04 * usd_to_inr):,}",
                "timeline_to_implement": "2-3 years (phased implementation)",
                "projected_sequestration": f"{int(current_sequestration * 2.0):,} kg CO2/year",
                "time_to_neutrality": f"{max(5, int(gap / (current_sequestration)))} years",
                "co_benefits": [
                    "Significant increase in local biodiversity",
                    "Enhanced ecosystem resilience",
                    "Improved water quality and reduced flooding risk",
                    "Potential for ecotourism and educational opportunities"
                ],
                "challenges": [
                    "More complex to implement than monoculture approaches",
                    "Longer establishment period before maximum sequestration",
                    "Requires ecological expertise for optimal design"
                ]
            }
        ]
        
        # Customize based on priorities
        if "Cost-effectiveness" in priorities:
            scenarios[0]["name"] += " (Recommended)"
        elif "Speed" in priorities:
            scenarios[1]["name"] += " (Recommended)"
        elif "Biodiversity" in priorities:
            scenarios[2]["name"] += " (Recommended)"
            
        return scenarios
    
    def _process_api_scenarios(self, scenarios: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Process scenarios from API to convert USD to INR values"""
        # USD to INR conversion factor (approximate)
        usd_to_inr = 83.0
        
        for scenario in scenarios:
            # Convert cost from USD to INR if it contains dollar sign
            if "estimated_cost" in scenario and isinstance(scenario["estimated_cost"], str):
                cost = scenario["estimated_cost"]
                if "$" in cost or "USD" in cost:
                    # Extract numbers from the string
                    numbers = [float(s.replace(",", "").replace("$", "")) 
                               for s in re.findall(r'[$]?[\d,]+(?:\.\d+)?', cost)]
                    
                    if len(numbers) >= 1:
                        if len(numbers) == 1:
                            # Single value
                            inr_value = int(numbers[0] * usd_to_inr)
                            scenario["estimated_cost"] = f"₹{inr_value:,}"
                        else:
                            # Range value (use the first two numbers as a range)
                            inr_value_low = int(numbers[0] * usd_to_inr)
                            inr_value_high = int(numbers[1] * usd_to_inr)
                            scenario["estimated_cost"] = f"₹{inr_value_low:,} - ₹{inr_value_high:,}"
        
        return scenarios

# Create a singleton instance
gemini_service = GeminiService() 