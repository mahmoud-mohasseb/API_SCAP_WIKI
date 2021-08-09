const express = require('express');
const getScrap = require('./getScrap');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/api/population', async (req, res) => {
  // console.log(await getScrap());
  const states = await getScrap();
  // console.log(states);
  res.json(states);
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
