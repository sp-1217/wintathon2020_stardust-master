const express = require('express');
const path = require('path');
const setupProxy = require('./Admin/setup.js');
const apple=require("./Admin/apple.js");
const pf = require('pareto-frontier');
const app = express();
setupProxy(app);
app.use(express.static(path.join(__dirname, './Admin')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './Admin', 'index.html'));
});
const graph = [
  [0,-4],
  [,],
  [1,],  
  [2,0],
];

// Throws a TypeError
const out = pf.getParetoFrontier(graph);
app.listen(process.env.PORT || 3000);