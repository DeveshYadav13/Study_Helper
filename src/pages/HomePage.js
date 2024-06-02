import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PDFList from '../components/PDFList';
import subjects from '../data/subjects';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="home-page">
      <h1>Study Materials</h1>
      <div className="content">
        <Sidebar subjects={subjects} onSelectSubject={setSelectedSubject} />
        <PDFList materials={selectedSubject.materials} />
      </div>
    </div>
  );
};

export default HomePage;
