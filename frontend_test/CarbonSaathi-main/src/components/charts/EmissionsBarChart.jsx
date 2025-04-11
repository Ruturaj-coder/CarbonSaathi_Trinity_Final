import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import PropTypes from 'prop-types';

// Register all Chart.js components
Chart.register(...registerables);

const EmissionsBarChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Default data if none provided
  const defaultData = [30, 45, 25, 60, 75, 45, 55, 40, 80, 65];
  const defaultLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  useEffect(() => {
    // Clean up existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Make sure the canvas element exists
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    
    // Create gradient for bars
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    gradientFill.addColorStop(0, 'rgba(46, 125, 50, 0.8)');   // Primary green
    gradientFill.addColorStop(1, 'rgba(46, 125, 50, 0.2)');

    // Initialize the chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels || defaultLabels,
        datasets: [{
          label: 'CO₂ Emissions (tonnes)',
          data: data || defaultData,
          backgroundColor: gradientFill,
          borderColor: 'rgba(46, 125, 50, 1)',
          borderWidth: 1,
          borderRadius: 4,
          barPercentage: 0.7,
          categoryPercentage: 0.8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#1E293B',
            bodyColor: '#1E293B',
            borderColor: 'rgba(46, 125, 50, 0.3)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `${context.formattedValue} tonnes CO₂e`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 10
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              font: {
                size: 10
              },
              callback: function(value) {
                return value + 't';
              }
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutQuart'
        }
      }
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <div className="relative h-full w-full">
      <canvas ref={chartRef} />
    </div>
  );
};

EmissionsBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default EmissionsBarChart; 