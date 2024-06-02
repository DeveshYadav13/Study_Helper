import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

const PDFList = ({ materials }) => {
  return (
    <List>
      {materials.map((material, index) => (
        <ListItem key={index}>
          <ListItemText primary={material.title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="view"
              href={material.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginRight: '10px' }}
            >
              <VisibilityIcon />
            </IconButton>
            <IconButton edge="end" aria-label="download" href={material.url} download>
              <DownloadIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default PDFList;
