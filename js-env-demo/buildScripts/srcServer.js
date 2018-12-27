//const express = require('express');
import express from 'express';

//const path = require('path') ;
import path from 'path';

//const open = require('open');
import open from 'open';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if(err){
    console.log(err);
  }
  else {
    open('http://localhost:'+ port +'/');
  }
});
