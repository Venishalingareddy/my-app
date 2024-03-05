// src/services/DatabaseService.js
const executeQuery = (database, query) => {
    return new Promise((resolve) => {
      const startTime = new Date();
      // Simulating database call
      setTimeout(() => {
        const endTime = new Date();
        const executionTime = endTime - startTime;
        resolve({ result: `Result from ${database}`, executionTime });
      }, 2000); // Simulating a 2-second delay
    });
  };
  
  export default { executeQuery };
  