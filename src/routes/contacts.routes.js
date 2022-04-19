const {Router} = require('express')
const router = Router()
const contactCtrl = require('../controllers/contacts.controllers')
const Auth = require('../helper/Auth')


router.post('/create',Auth.verifyToken,contactCtrl.createContact)
router.post('/login',contactCtrl.login)

module.exports = router