import React from 'react';

const Timer = ({ label, time }) => (
  <p>
    {label}: {time} ms
  </p>
);

export default Timer;
