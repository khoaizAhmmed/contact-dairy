const router = require('express').Router()
const { getAllContacts ,createContacts,contactById,updateContactById ,deleteContactById} = require('../RouterController/contactController')

router.get('/api', getAllContacts)
router.post('/', createContacts)
router.get('/delete/:id', deleteContactById)
router.get('/:id', contactById)
router.put('/:id', updateContactById)
// router.delete('/:id', deleteContactById)

module.exports = router
