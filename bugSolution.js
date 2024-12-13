const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('OK');
  }).catch(err => {
    console.error('Error handling request:', err); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send appropriate error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

// Dummy asynchronous operation for demonstration
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve();
    } else {
      reject(new Error('Simulated async operation failed'));
    }
  });
}