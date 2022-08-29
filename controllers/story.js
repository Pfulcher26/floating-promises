const Story = require('../models/stories');
const User = require('../models/user');

function show(req, res){
    res.render('story/index');
}

function newStory(req, res){
    res.render('story/new')
}

module.exports = {
    show,
    newStory
};