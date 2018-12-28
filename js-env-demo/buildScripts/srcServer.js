//const express = require('express');
import express from 'express';

//const path = require('path') ;
import path from 'path';

//const open = require('open');
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

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
