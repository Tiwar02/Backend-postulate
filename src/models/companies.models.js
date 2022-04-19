const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompaniesSchema = new Schema({
    nit:Number,
    company_name:String,
    sector:String,
    size:Number,
    employers_number:Number,
    webpage:String,
    country:String,
    department:String,
    city:String,
    category:String,
    email:String
})
//Convert Model
module.exports= mongoose.model('companies',CompaniesSchema) 