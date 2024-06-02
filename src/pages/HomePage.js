import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import PDFList from '../components/PDFList';
import subjects from '../data/subjects';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom style={{ paddingTop: '10px', fontWeight: 'bold' }}>
        Akash - IT
      </Typography>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Sidebar subjects={subjects} selectedSubject={selectedSubject} onSelectSubject={setSelectedSubject} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="subtitle2" gutterBottom style={{ textAlign: 'center', padding: '10px' }}>
                {selectedSubject.name} : Akash
              </Typography>
              <PDFList materials={selectedSubject.materials} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
