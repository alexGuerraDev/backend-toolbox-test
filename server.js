const express = require('express')
const app = (module.exports = express())
const routes = require('./routes')
const cors = require('cors');
const port = 3000

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
app.use('/', routes)

app.listen(port, () => {
  console.log(`Backend test to Toolbox listening on port ${port}`)
})