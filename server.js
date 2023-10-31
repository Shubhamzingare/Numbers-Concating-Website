const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/index', function(req, res){
  res.sendFile(__dirname + '/public/HTML/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
