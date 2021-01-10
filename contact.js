const { Schema ,model } = require('mongoose')

const contactSchema = new Schema({
    _id : {
        type: String,
        required:true,
            trim:true
   },
    name : {
        type: String,
        required:true,
        trim:true,
        minlength: 2,
        maxlength:30
    },
    phone :{
        type: String,
        required:true,
        trim:true,
        minlength: 9,
        maxlength: 15
    },
    email:{
        type: String,
        required:true,
        trim:true
    }
},{ versionKey: false })


const Contact = new model('Contact',contactSchema)
module.exports = Contact