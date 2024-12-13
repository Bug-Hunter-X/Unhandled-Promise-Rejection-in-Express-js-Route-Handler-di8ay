const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('OK');
  }).catch(err => {
    // Error handling missing here!  This will crash the server if someAsyncOperation rejects.
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));