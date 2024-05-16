import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

export const useChartArea = (labels, dataset) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
  );

  const options = { 
    responsive: true, 
    maintainAspectRatio: false,
    elements: { line: { tension: 0.4 } } 
  };

  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        data: dataset,
        borderColor: 'rgb(0, 132, 244)',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(0, 132, 244, 0.75)");
          gradient.addColorStop(1, "rgba(213, 233, 250, 0.75)");
          return gradient;
        },
      },
    ],
  };

  const draw = () => {
    return (
      <div style={{maxHeight:'250px'}}>
        <Line options={options} data={data} />
      </div>
    )
  }

  return draw
}