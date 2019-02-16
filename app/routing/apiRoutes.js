var friendsdata = require("../data/friendsdata");

module.exports = function(app) {
    app.post("/api/friendsdata", function(req, res) {
        var newfriend = req.body;
    
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newfriend.name = newfriend.name.trim();
        newfriend.photo = newfriend.photo.trim();
        newfriend.scores = newfriend.scores;
    
        // console.log(newfriend);

        var differentScore = 100;
        var matchIndex = 0;
        for(var j = 0; j<friendsdata.length; j++){
            var currentScore = 0;
            for(var i = 0; i<10; i++){
                currentScore += Math.abs(friendsdata[j].scores[i]-newfriend.scores[i]);
            }
            if(currentScore<differentScore)
            {
                differentScore = currentScore;
                matchIndex = j;
            }
            // console.log(friendsdata[j].photo);
        }



        friendsdata.push(newfriend);

        res.json(friendsdata[matchIndex]);
    });

    app.get("/api/friendsdata", function(req, res) {
        return res.json(friendsdata);
    });
};