var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({token: createJWT(user)});
    })
    .catch(err => res.status(400).json(err));
}

/*----- Helper Functions -----*/
function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  signup,
  // login
}