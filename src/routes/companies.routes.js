const {Router} = require('express')
const router = Router()
const companyCtrl = require('../controllers/companies.controllers')
const Auth = require('../helper/Auth')


router.post('/create',Auth.verifyToken,companyCtrl.createCompany)

module.exports = router