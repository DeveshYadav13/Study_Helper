import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ subjects, selectedSubject, onSelectSubject }) => {
  return (
    <List style={{ lineHeight: '2' }}>
      {subjects.map((subject, index) => (
        <ListItem
          button
          key={index}
          onClick={() => onSelectSubject(subject)}
          selected={selectedSubject.name === subject.name}
          sx={{
            '&.Mui-selected': {
              backgroundColor: '#d0e7ff',
              '&:hover': {
                backgroundColor: '#c0d6ff',
              },
            },
            '&:hover': {
              backgroundColor: '#e0f0ff',
            },
          }}
        >
          <ListItemText primary={subject.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
