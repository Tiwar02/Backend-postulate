const StudentsCtrl = {}
const Student = require('../models/students.models')


StudentsCtrl.search= async(req,res)=>{
    const ans= await Student.find()
    await res.json(ans)
}

StudentsCtrl.searchByDoc= async(req,res)=>{
    const id = req.params.id
    const ans= await Student.findById({_id:id})
    await res.json(ans)
}

StudentsCtrl.update= async(req,res)=>{
    const id = req.params.id
    const ans= await Student.findByIdAndUpdate({_id:id},req.body)
    await res.json({
        mensaje:'Actualizado'
    })
}

module.exports = StudentsCtrl