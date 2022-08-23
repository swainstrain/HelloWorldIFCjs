import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get("/", (req, res) => {
  res.sendFile(__dirname +"/home.html");
});

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express().get('/', (req, res) => res.render('index.html'));
// express().listen(PORT, () => console.log(`Listening on ${ PORT }`));

