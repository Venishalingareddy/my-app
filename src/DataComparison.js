// src/DataComparison.js
import React, { useState } from 'react';
import axios from 'axios';

const DataComparison = () => {
  const [db1Query, setDb1Query] = useState('');
  const [db2Query, setDb2Query] = useState('');
  const [db1ProcessingTime, setDb1ProcessingTime] = useState(0);
  const [db2ProcessingTime, setDb2ProcessingTime] = useState(0);
  const [db1Result, setDb1Result] = useState('');
  const [db2Result, setDb2Result] = useState('');

  const executeQuery = async (database, query, setProcessingTime, setResult) => {
    const startTime = new Date();
    try {
      // Replace the API_ENDPOINT with the actual endpoint to execute the SQL query
      const response = await axios.post('API_ENDPOINT', { database, query });
      setResult(response.data.result);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      const endTime = new Date();
      const processingTime = endTime - startTime;
      setProcessingTime(processingTime);
    }
  };

  const handleDb1Submit = () => {
    executeQuery('database1', db1Query, setDb1ProcessingTime, setDb1Result);
  };

  const handleDb2Submit = () => {
    executeQuery('database2', db2Query, setDb2ProcessingTime, setDb2Result);
  };

  return (
    <div className="mainsec">
      <div className=" database-section">
       
                <h2>TPC-H Database 1 (1 GB)</h2>
        <textarea
          placeholder="Enter SQL Query for Database 1"
          value={db1Query}
          onChange={(e) => setDb1Query(e.target.value)}
        />
        <button onClick={handleDb1Submit}>Submit</button>
        <div>
          <h3>Processing Time</h3>
          <button onClick={() => alert(db1Result)}>Show Result</button>
        </div>
      </div>

        
        
        
         {/* <h2>Database 1 (1 GB)</h2>
        <textarea
          placeholder="Enter SQL Query for Database 1"
          value={db1Query}
          onChange={(e) => setDb1Query(e.target.value)}
        />
        <button onClick={handleDb1Submit}>Submit</button>
        <div>
          <h3>Processing Time: {db1ProcessingTime} ms</h3>
          <button onClick={() => alert(db1Result)}>Show Result</button>
        </div>
      </div>  */}

      <div className="database-section">

        <h2>TPC-H Database 2 (10 MB)</h2>
        <textarea
          placeholder="Enter SQL Query for Database 2"
          value={db2Query}
          onChange={(e) => setDb2Query(e.target.value)}
        />
        <button onClick={handleDb2Submit}>Submit</button>
        <div>
          <h3>Processing Time</h3>
          <button onClick={() => alert(db2Result)}>Show Result</button>
        </div>
      </div>
    

    </div>
  );
};

export default DataComparison;
