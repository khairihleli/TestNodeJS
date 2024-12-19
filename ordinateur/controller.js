var express = require('express')
var router = express.Router()
const { create, list, update, deleteU, getCategoryZ, getPrice } = require('./ordinateurService')

router.get('/list', list)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteU)
router.get('/categoryZ', getCategoryZ)
router.post('/priceRange', getPrice)

module.exports = router