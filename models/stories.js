const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String, 
    name: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        }
    },
    userName: String,
    userAvatar: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

const storySchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: String,
        required: true
    },
    location: String, 
    timeframe: {  type: String,
        enum: ['1 month', 'six months', 'one year', 'year plus']},
    date: Date,
    story: String, 
    comments: [commentSchema],
    userName: String,
    userAvatar: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Story', storySchema);