import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import PDFList from '../components/PDFList';
import subjects from '../data/subjects';
import Footer from '../components/Footer';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [progress, setProgress] = useState(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('progress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    // Save progress to localStorage whenever it changes
    localStorage.setItem('progress', JSON.stringify(progress));
  }, [progress]);

  const handleToggleProgress = (subjectName, pdfTitle) => {
    setProgress(prevProgress => {
      const updatedProgress = { ...prevProgress };
      if (!updatedProgress[subjectName]) {
        updatedProgress[subjectName] = [];
      }
      if (updatedProgress[subjectName].includes(pdfTitle)) {
        updatedProgress[subjectName] = updatedProgress[subjectName].filter(title => title !== pdfTitle);
      } else {
        updatedProgress[subjectName].push(pdfTitle);
      }
      return updatedProgress;
    });
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom style={{ paddingTop: '20px', fontWeight: 'bold' }}>
        Akash - IT
      </Typography>
      <Box mt={4} mb={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="subtitle2" gutterBottom style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#333', fontWeight: 'bold' }}>
                Select a subject
              </Typography>
              <Sidebar subjects={subjects} selectedSubject={selectedSubject} onSelectSubject={setSelectedSubject} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="subtitle2" gutterBottom style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#333', fontWeight: 'bold' }}>
                {selectedSubject.name === 'STRIT' ? 'STRIT : Notes' : `${selectedSubject.name} : Akash`}
              </Typography>
              <PDFList
                materials={selectedSubject.materials}
                progress={progress[selectedSubject.name] || []}
                onToggleProgress={handleToggleProgress}
                subjectName={selectedSubject.name}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
};

export default HomePage;
