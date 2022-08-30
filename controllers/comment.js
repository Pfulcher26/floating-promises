const Story = require('../models/stories');
const User = require('../models/user');

function commentDisplay(req, res){
    res.render('story/comment');
}

function commentCreate(req, res){
    console.log("hellll")
    // Story.findById(req.params.id, function(error, story){
    //     console.log(story);
    //     });
}

module.exports = {
    commentDisplay,
    commentCreate
};


