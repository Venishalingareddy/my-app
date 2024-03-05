// src/components/DatabaseComparison.js
import React, { useState } from 'react';
import DatabasePanel from './DatabasePanel';
import DatabaseService from '../services/DatabaseServices';

const DatabaseComparison = () => {
  const [result1, setResult1] = useState({});
  const [result2, setResult2] = useState({});

  const executeQuery = async (database, query) => {
    const result = await DatabaseService.executeQuery(database, query);
    if (database === '1IGB') {
      setResult1(result);
    } else if (database === '2IOMP') {
      setResult2(result);
    }
  };

  const calculateTimeDifference = () => {
    if (result1.executionTime && result2.executionTime) {
      const timeDifference = result2.executionTime - result1.executionTime;
      return timeDifference;
    }
    return null;
  };

  return (
    <div>
      <DatabasePanel database="1IGB" onExecute={executeQuery} />
      <DatabasePanel database="2IOMP" onExecute={executeQuery} />
      <h2>Time Difference</h2>
      <p>{`T1: ${calculateTimeDifference()} milliseconds`}</p>
    </div>
  );
};

export default DatabaseComparison;
