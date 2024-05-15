import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

export const useChartArea = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
  );

  const options = { responsive: true, elements: { line: { tension: 0.4 } } };

  const data = {
    labels: ['15:20', '15:22', '15:24', '15:26', '15:28', '15:30'],
    datasets: [
      {
        fill: true,
        data: [100, 40, 60, 20, 100, 75, 40],
        borderColor: 'rgb(0, 132, 244)',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(0, 132, 244, 0.75)");
          gradient.addColorStop(1, "rgba(213, 233, 250, 0.75)");
          return gradient;
        },
      },
    ],
  };

  const draw = () => {
    return <Line options={options} data={data} />
  }

  return { draw }
}