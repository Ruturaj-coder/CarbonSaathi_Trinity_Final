import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';

const ProgressGaugeChart = ({ progress = 72 }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  
  useEffect(() => {
    // Clean up existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Make sure the canvas element exists
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    
    // Create gradient for the gauge
    const gradientFill = ctx.createLinearGradient(0, 0, 200, 0);
    gradientFill.addColorStop(0, 'rgba(0, 188, 212, 0.8)');    // Cyan
    gradientFill.addColorStop(1, 'rgba(46, 125, 50, 0.8)');    // Green

    // Initialize the chart
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [normalizedProgress, 100 - normalizedProgress],
          backgroundColor: [
            gradientFill,
            'rgba(226, 232, 240, 0.5)'  // Light gray for remaining
          ],
          borderWidth: 0,
          circumference: 180,
          rotation: 270
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          },
          datalabels: {
            display: false
          }
        },
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1500,
          easing: 'easeOutQuart'
        }
      },
      plugins: [{
        id: 'centerText',
        afterDraw: (chart) => {
          const { ctx, width, height } = chart;
          ctx.save();
          ctx.font = 'bold 16px sans-serif';
          ctx.fillStyle = '#1E293B';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${normalizedProgress}%`, width / 2, height - 20);
          ctx.restore();
        }
      }]
    });
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [normalizedProgress]);

  return (
    <div className="relative h-32 w-full">
      <canvas ref={chartRef} />
    </div>
  );
};

ProgressGaugeChart.propTypes = {
  progress: PropTypes.number
};

export default ProgressGaugeChart; 