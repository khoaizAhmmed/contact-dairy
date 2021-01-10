const router = require('express').Router()
const{contactApi,errorPage}= require('../RouterController/indexController')

router.get('/', contactApi)
router.get('*',errorPage)

module.exports = router