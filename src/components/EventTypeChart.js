import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EventTypeChart = ({ data }) => {
  const eventTypeCounts = data.reduce((acc, curr) => {
    const eventType = curr.event_type;
    acc[eventType] = (acc[eventType] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(eventTypeCounts),
    datasets: [
      {
        label: 'Event Types',
        data: Object.values(eventTypeCounts),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(192, 75, 192, 0.6)',
          'rgba(192, 192, 75, 0.6)',
          'rgba(75, 75, 192, 0.6)',
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default EventTypeChart;
