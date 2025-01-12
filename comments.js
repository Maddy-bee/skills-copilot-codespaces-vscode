// Create web server
const express = require('express');
const app = express();

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  res.send('Get a comment');
});

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Create a comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});