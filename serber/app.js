/* eslint-disable no-undef */
// import express from 'express';

const express = require('express');
const app = express();

app.get('https://pixabay.com/api/?key=29980648-ef6c02eb6f404bf593013495f&q=1&image_type=photo', (req, res) => {
  res.send(res.data);
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
https://pixabay.com/api/?key=29980648-ef6c02eb6f404bf593013495f&q=1&image_type=photo