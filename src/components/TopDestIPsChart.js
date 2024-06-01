import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const TopDestIPsChart = ({ data }) => {
  const destIPCounts = data.reduce((acc, curr) => {
    acc[curr.dest_ip] = (acc[curr.dest_ip] || 0) + 1;
    return acc;
  }, {});

  const sortedDestIPs = Object.entries(destIPCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const chartData = {
    labels: sortedDestIPs.map(([ip]) => ip),
    datasets: [
      {
        label: 'Top Destination IPs',
        data: sortedDestIPs.map(([, count]) => count),
        backgroundColor: 'rgba(192, 75, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default TopDestIPsChart;
