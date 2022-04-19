const  ContactCtrl = {}
const  Contact = require('../models/contacts.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


ContactCtrl.createContact=async(req,res)=>{
    try{
        const{doctype,document,name,first_lastname,second_lastname,company,area,phone,email,password} = req.body

        const newContact =  new Contact({
            doctype,
            document,
            name,
            first_lastname,
            second_lastname,
            company,
            area,
            phone,
            email,
            password 
        })

        const docContact = await Contact.findOne({document:document})
        if(docContact)
        {
            res.send("Este contacto ya esta creado")
        }
        else{
            newContact.password = await bcrypt.hash(password,10)
            const token = jwt.sign({_id:newContact._id},"Secreto")
            await newContact.save()
            res.send("Lista el contacto")
        }
        
        
        
        }catch (error){
            return res.send({
                ok:false,
                message:"Ha ocurrido un error obteniendo los usuarios",
                content: error,
            });
        }
    }

ContactCtrl.login = async(req,res)=>{
    const {document,password}=req.body
    const contact = await Contact.findOne({document:document})
    if(!contact){
        res.send("Documento incorrecto")
    }
    const match = await bcrypt.compare(password,contact.password)
    if(match){
        const token = jwt.sign({_id:contact._id},"Secreta")
        await res.json({
            message: 'Bienvenido',
            name: contact.name,
            token
        })
        }
    else{
        res.send('Contraseña incorrecta')
    }
}

ContactCtrl.search= async(req,res)=>{
    const ans= await Contact.find()
    await res.json(ans)
}




module.exports = ContactCtrl