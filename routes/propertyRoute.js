const express=require('express');
const router=express.Router();
const propertyController=require('../controller/propertyController');


router.get('/sellerDashboard',propertyController.getSellerDashboard);

router.get('/newProperty',propertyController.getNewProperty);
router.post('/newProperty',propertyController.postNewProperty);

router.get('/editProperty',propertyController.getEditProperty);
router.post('/editProperty',propertyController.postEditProperty);

router.post('/deleteProperty',propertyController.postDeleteProperty);

router.get('/buyerDashboard',propertyController.getBuyerDashboard);

module.exports=router;