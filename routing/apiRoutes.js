var friendsData = require("../data/friends");

module.exports = function(app) { 
    app.get("/api/freinds", function(req, res){
        res.json(friendsData);
    });
};