import React from 'react';

const AppSkillLevel = ({ appName, ratingPercentage }) => {
  return (
    <div className="flex items-center mb-4">
      <div style={{ flex: 1 }}>
        <span style={{ lineHeight: '2', textAlign: 'left', color: 'gray', fontFamily: 'Montserrat', fontWeight: '700', fontSize: '20px' }}>{appName}</span>
      </div>
      <div className="w-2/6 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 rounded" style={{ width: `${ratingPercentage}%`, backgroundColor: '#C8A579' }}></div>
      </div>
    </div>
  );
};

export default AppSkillLevel;
