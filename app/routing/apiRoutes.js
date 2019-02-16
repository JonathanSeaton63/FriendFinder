var newFriend = require("../data/friends");
var path = require("path");

module.exports = function (app) {
  app.get("/api/freinds", function (req, res) {
    res.json(newFriend);
  });
  app.post("/api/friends", function (req, res) {
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;
  
    for (var i = 0; i < newFriend.length; i++) {
      var scoresDiff = 0;
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDiff += (Math.abs(parseInt(newFriend[i].scores[j]) - parseInt(newFriendScores[j])));
      }
  
      scoresArray.push(scoresDiff);
    }
  
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }
  
    var bff = newFriend[bestMatch];
    res.json(bff);
  
    newFriend.push(req.body);
  });

};