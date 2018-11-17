let express = require('express');
let router = express.Router();

router.get('/api/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

module.exports = router;
