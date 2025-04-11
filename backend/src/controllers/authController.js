const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            role,
            password,
            company,
            mainGoal,
            heardFrom,
            agreeTerms
        } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Validate required fields
        if (!firstName || !lastName || !email || !password || !company.name || !company.size || !company.industry || !agreeTerms) {
            return res.status(400).json({ message: 'Please fill all required fields' });
        }

        // Create user
        const user = await User.create({
            firstName,
            lastName,
            email,
            role,
            password,
            company,
            mainGoal,
            heardFrom,
            agreeTerms
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                company: {
                    name: user.company.name,
                    size: user.company.size,
                    industry: user.company.industry
                },
                token: generateToken(user._id)
            });
        }
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email });
        
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                company: {
                    name: user.company.name,
                    size: user.company.size,
                    industry: user.company.industry
                },
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};