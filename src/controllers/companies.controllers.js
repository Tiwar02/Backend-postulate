const CompanyCtrl = {}
const Company = require('../models/companies.models')


CompanyCtrl.createCompany=async(req,res)=>{
    try{
        const{nit,company_name,sector,size,employers_number,webpage,country,department,city,category,email} = req.body

        const newCompany =  new Company({
            nit,
            company_name,
            sector,
            size,
            employers_number,
            webpage,
            country,
            department,
            city,
            category,
            email
        })
        const nitCompany = await Company.findOne({nit:nit})
        if(nitCompany)
        {
            res.send("Esta empresa ya esta creado")
        }
        else{
            newContact.save()
            res.send("Lista la empresa")
        }
        
        }catch (error){
            return res.send({
                ok:false,
                message:"Ha ocurrido un error obteniendo los usuarios",
                content: error,
            });
        }
    }



module.exports = CompanyCtrl