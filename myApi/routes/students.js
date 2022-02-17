var express = require('express');
var router = express.Router();


var students = [
  { id: 1, name: "Horacio Torres" },
  { id: 2, name: "Anderson Joe" },
  { id: 3, name: "Peter Griffin" }
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.send("idk");
});

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

module.exports = router;
