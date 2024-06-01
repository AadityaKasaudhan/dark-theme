import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import TopSourceIPsChart from './components/TopSourceIPsChart';
import TopDestIPsChart from './components/TopDestIPsChart';
import EventCategoryChart from './components/EventCategoryChart';
import EventTypeChart from './components/EventTypeChart';
import eventData from './data/eve.json';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(eventData);
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TopSourceIPsChart data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopDestIPsChart data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <EventCategoryChart data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <EventTypeChart data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
