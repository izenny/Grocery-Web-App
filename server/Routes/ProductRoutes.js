const router = require('express').Router()
const ProductController = require('../Controllers/PoductController')

router.post('/',ProductController.createProduct)
router.get('/bycategory',ProductController.productbyCategory)