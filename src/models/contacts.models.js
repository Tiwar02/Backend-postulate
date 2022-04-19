const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactsSchema = new Schema({
    doctype:Number,
    document:Number,
    name:String,
    first_lastname:String,
    second_lastname:String,
    company:Number,
    area:String,
    phone:Number,
    email:String,
    password:String
})
//Convert Model
module.exports= mongoose.model('contacts',ContactsSchema) 