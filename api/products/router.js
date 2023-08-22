const app = require('express')
const router = app.Router()
const { Productbybrand, ProductbyId, getAllProducts, postProducts ,Productbycategory ,updateproduct , deleteproduct  } = require('./controller')

router.get('/productsbybrand/:brand', Productbybrand)
router.get('/getAllProducts', getAllProducts)
router.get('/Productbycategory/:category', Productbycategory)
router.post('/products', postProducts)
router.put('/updateproduct/:_id', updateproduct)
router.put('/productbyId/:_id', ProductbyId)
router.delete('/deleteproduct/:_id', deleteproduct)


module.exports = router