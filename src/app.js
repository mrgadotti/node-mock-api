const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8030;

app.use(bodyParser.json());

// Sample list of JSON data
let jsonDataList = [
  {
    "id_dm000": 733,
    "id_dm011": 1,
    "valor_total": 10.5,
    "nr_conta": 0,
    "nr_mesa": 12,
    "nr_fone": "988159063",
    "in_tipo": "A"
  }
];

// GET route to return list of JSON data
app.get('/api/data', (req, res) => {
  res.json(jsonDataList);
});

// PUT route to update JSON data
app.put('/api/data/:index', (req, res) => {
  const index = req.params.index;
  jsonDataList[index] = { ...jsonDataList[index], ...req.body };
  res.json(jsonDataList);
});

// POST route to insert new JSON data
app.post('/api/data', (req, res) => {
  jsonDataList.push(req.body);
  res.json(jsonDataList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

