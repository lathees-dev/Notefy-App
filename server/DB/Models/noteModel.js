const mongoose = require('mongoose');

const noteScheme =new mongoose.Schema(
    {
        title:{
            type : String,
            required : [true,"Please Enter The Title"]
        },

        content:{
            type : String,
            required : [true,"Please Enter The Content"]
        },
        date:{
            type : Date,
            default : Date.now}

    }
);

const noteModel =new mongoose.model('Notes',noteScheme)
module.exports = noteModel;