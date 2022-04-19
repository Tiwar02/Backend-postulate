//Req dependenties
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database')


//Config port

//app.set('port', process.env.PORT || 8000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

app.use('/company',require('./routes/companies.routes'))
app.use('/contact',require('./routes/contacts.routes'))
app.use('/student',require('./routes/students.routes'))

app.listen(8000, () => {
    console.log('Server listen on port',8000)
})

