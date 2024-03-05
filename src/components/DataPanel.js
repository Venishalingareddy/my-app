import React, { useState } from 'react';
import axios from 'axios';
import './DataPanel.css';

const DataPanel = ({ dbName }) => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [executionTime, setExecutionTime] = useState(null);

  const executeQuery = async () => {
    const startTime = Date.now();
    
    try {
      // Assuming you have a backend API endpoint for executing SQL queries
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
        database: dbName,
        sqlQuery: sqlQuery,
      });
      
      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error executing SQL query:', error);
    } finally {
      const endTime = Date.now();
      setExecutionTime(endTime - startTime);
    }
  };

  return (
    <div className="data-panel">
      <h2>{dbName} Data Panel</h2>
      <textarea
        placeholder="Enter SQL Query"
        value={sqlQuery}
        onChange={(e) => setSqlQuery(e.target.value)}
      />
      <button onClick={executeQuery}>Submit</button>
      <div>
        <button>Result</button>
        {executionTime && <p>Execution Time: {executionTime} ms</p>}
      </div>
    </div>
  );
};

export default DataPanel;
