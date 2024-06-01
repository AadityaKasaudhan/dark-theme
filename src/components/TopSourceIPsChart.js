import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const TopSourceIPsChart = ({ data }) => {
  const sourceIPCounts = data.reduce((acc, curr) => {
    acc[curr.src_ip] = (acc[curr.src_ip] || 0) + 1;
    return acc;
  }, {});

  const sortedSourceIPs = Object.entries(sourceIPCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const chartData = {
    labels: sortedSourceIPs.map(([ip]) => ip),
    datasets: [
      {
        label: 'Top Source IPs',
        data: sortedSourceIPs.map(([, count]) => count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default TopSourceIPsChart;
