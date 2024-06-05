import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import NoteIcon from '@mui/icons-material/Note';
import Modal from 'react-modal';

const PDFList = ({ materials, progress, onToggleProgress, subjectName }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  // Save notes to localStorage when notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const openModal = (title) => {
    setCurrentTitle(title);
    setCurrentNote(notes[`${subjectName}-${title}`] || '');
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const saveNote = () => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [`${subjectName}-${currentTitle}`]: currentNote,
    }));
    closeModal();
  };

  return (
    <>
      <Typography variant="body2" style={{ marginBottom: '10px', color: '#555' }}>
        Use the checkbox to mark your progress. Use notes icon to add remarks.
      </Typography>
      <List>
        {materials.map((material, index) => (
          <ListItem key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={progress.includes(material.title)}
                onChange={() => onToggleProgress(subjectName, material.title)}
                color="primary"
              />
              <ListItemText primary={material.title} />
            </div>
            <ListItemSecondaryAction style={{ display: 'flex' }}>
              <IconButton
                aria-label="note"
                onClick={() => openModal(material.title)}
                style={{ marginRight: '10px' }}
              >
                <NoteIcon style={{ color: notes[`${subjectName}-${material.title}`] ? 'orange' : 'inherit' }} />
              </IconButton>
              <IconButton
                aria-label="view"
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '10px' }}
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                aria-label="download"
                href={material.url}
                download
              >
                <DownloadIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '700px',
            padding: '20px',
            borderRadius: '10px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
        contentLabel="Add Note"
      >
        <h2>Add Note</h2>
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          style={{ width: '100%', height: '100px', marginBottom: '20px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={closeModal} style={{ marginRight: '10px' }}>Close</button>
          <button onClick={saveNote}>Save Note</button>
        </div>
      </Modal>
    </>
  );
};

export default PDFList;
