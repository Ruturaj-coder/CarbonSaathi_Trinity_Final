import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import PropTypes from 'prop-types';

// Register all Chart.js components
Chart.register(...registerables);

const EmissionsSourcesChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Default data if none provided
  const defaultData = [45, 25, 15, 15];
  const defaultLabels = ['Electricity', 'Transport', 'Waste', 'Other'];
  const defaultColors = [
    'rgba(47, 128, 237, 0.8)',  // Blue
    'rgba(0, 188, 212, 0.8)',   // Cyan
    'rgba(46, 125, 50, 0.8)',   // Green
    'rgba(245, 158, 11, 0.8)'   // Yellow/amber
  ];

  useEffect(() => {
    // Clean up existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Make sure the canvas element exists
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    // Initialize the chart
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels || defaultLabels,
        datasets: [{
          data: data || defaultData,
          backgroundColor: defaultColors,
          borderColor: 'rgba(255, 255, 255, 0.8)',
          borderWidth: 2,
          hoverOffset: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#1E293B',
            bodyColor: '#1E293B',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                const value = context.raw;
                const percentage = ((value / context.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                return `${context.label}: ${percentage}% (${value} tonnes)`;
              }
            }
          }
        },
        animation: {
          animateRotate: true,
          animateScale: true,
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

EmissionsSourcesChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default EmissionsSourcesChart; 