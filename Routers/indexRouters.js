const router = require('express').Router()
const{errorPage}= require('../RouterController/indexController')
const{getAllContacts}= require('../RouterController/contactController')


router.get('/', getAllContacts)
router.get('*',errorPage)

module.exports = router