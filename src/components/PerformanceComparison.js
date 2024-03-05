import React, { useState } from 'react';
import DatabasePanel from './DatabasePanel';

const PerformanceComparison = () => {
  // State for database 1
  const [db1Data, setDb1Data] = useState({
    name: '1GB',
    sqlQuery: '',
    processingTime: 0,
    result: '',
    timeTaken: 0,
  });

  // State for database 2
  const [db2Data, setDb2Data] = useState({
    name: '1OMB',
    sqlQuery: '',
    processingTime: 0,
    result: '',
    timeTaken: 0,
  });

  // TODO: Implement functions to fetch data from databases and update state

  return (
    <div>
      <DatabasePanel {...db1Data} />
      <DatabasePanel {...db2Data} />
    </div>
  );
};

export default PerformanceComparison;
