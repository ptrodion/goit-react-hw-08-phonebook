import React from 'react';

export const HomePage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
      }}
    >
      <p
        style={{
          width: '600px',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '20px',
        }}
      >
        Hello! Welcome to the "Phone Book App" where you can save a person's
        name and their phone number.
      </p>
    </div>
  );
};
