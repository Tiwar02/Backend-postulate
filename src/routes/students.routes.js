const {Router} = require('express')
const router = Router()
const studentsCtrl = require('../controllers/students.controllers')
const Auth = require('../helper/Auth')


router.get('/search',Auth.verifyToken,studentsCtrl.search)
router.get('/searchByDoc/:id',Auth.verifyToken,studentsCtrl.searchByDoc)
router.put('/update/:id',Auth.verifyToken,studentsCtrl.update)

module.exports = router