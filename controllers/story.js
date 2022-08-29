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