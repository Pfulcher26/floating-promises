const Story = require('../models/stories');
const User = require('../models/user');

function commentDisplay(req, res){
    Story.findById(req.params.id, function(error, story){
        res.render('story/comment', { story });
    });
}

function commentCreate(req, res){
    Story.findById(req.params.id, function(error, story){
        story.comments.push(req.body);
        story.save(function (err) {
            res.redirect('/story');   
        });
    });
}

module.exports = {
    commentDisplay,
    commentCreate
};


