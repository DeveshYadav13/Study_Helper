import React from 'react';

const Sidebar = ({ subjects, onSelectSubject }) => {
  return (
    <div className="sidebar">
      <ul>
        {subjects.map((subject, index) => (
          <li key={index} onClick={() => onSelectSubject(subject)}>
            {subject.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
