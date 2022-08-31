const Story = require('../models/stories');
const User = require('../models/user');

function commentDisplay(req, res){
    Story.findById(req.params.id, function(error, story){
        res.render('story/comment', { story });
    });
}

function commentView(req, res){
    Story.findById(req.params.id, function(error, story){
        res.render('story/commentview', { story });
    });
}

function commentCreate(req, res){
    Story.findById(req.params.id, function(error, story){
        story.comments.push(req.body);
        story.save(function (err) {
            res.redirect(`/story/comment/${req.params.id}/view`);   
        });
    });
}

module.exports = {
    commentDisplay,
    commentCreate,
    commentView
};


