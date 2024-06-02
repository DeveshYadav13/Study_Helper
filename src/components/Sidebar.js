import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const Sidebar = ({ subjects, selectedSubject, onSelectSubject }) => {
  return (
    <Paper style={{ height: '100%' }}>
      <Typography variant="subtitle2" gutterBottom style={{ textAlign: 'center', padding: '10px' }}>
        Choose the Subject
      </Typography>
      <List style={{ lineHeight: '2', height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {subjects.map((subject, index) => (
          <ListItem
            button
            key={index}
            onClick={() => onSelectSubject(subject)}
            selected={selectedSubject.name === subject.name}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#d0e7ff',
              },
              paddingLeft: '30px', // Add left padding
              paddingRight: '20px', // Add right padding
            }}
          >
            <ListItemText primary={subject.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;
