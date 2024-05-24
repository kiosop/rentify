const propertyModel = require('../model/propertyModel');

const getSellerDashboard = (req,res,next)=>{
    if(req.session.isLoggedIn)
    {
        propertyModel.findAll(
            {
                where : {propertyOwnerId : req.session.user.userId}
            }
        )
        .then((data)=>{
            console.log(data);
            res.render('sellerDashboard',{
                data:data,
                user : req.session.user
            })
        })
        .catch((error)=>
            console.log(error)
        )
    }
    else
    {
        res.redirect('/');
    }
}

const getNewProperty = (req,res,next)=>{
    if(req.session.isLoggedIn)
    {
        
        res.render('newProperty')
    }
    else
    {
        res.redirect('/');
    }
}

const postNewProperty = (req, res, next) => {
    const { propertyTitle, propertyType, price, address,nearbyLandmark, city, bedroomCount, nearbyCollegeDistance, nearbyHospitalDistance } = req.body;
    const { userId, firstName, lastName, emailId, phoneNumber, type } = req.session.user;

    propertyModel.create({
        propertyTitle,
        propertyType,
        price,
        address,
        nearbyLandmark,
        city,
        bedroomCount,
        nearbyCollegeDistance,
        nearbyHospitalDistance,
        propertyOwnerId: userId,
        propertyOwnerName: `${firstName} ${lastName}`,
        propertyOwnerContactPhoneNumber: phoneNumber,
        propertyOwnerContactEmail: emailId
    })
    .then(newProperty => {
        console.log('New property created:', newProperty);
        res.redirect('/sellerDashboard')
    })
    .catch(error => {
        console.error('Error creating property:', error);
        res.status(500).json({ error: 'Error creating property' });
    });
};




const getEditProperty = (req,res,next)=>{
    console.log(req.query.propertyId)
    if(req.session.isLoggedIn)
    {
        propertyModel.findAll(
            {
                where : {propertyId : req.query.propertyId}
            }
        )
        .then((data)=>{
            console.log(data);
            console.log(data);
            res.render('editProperty',{
                data:data,
                user : req.session.user
            })
        })
        .catch((error)=>
            console.log(error)
        )
    }
    else
    {
        res.redirect('/');
    }
}

const postEditProperty = (req, res, next) => {
    const { propertyId } = req.query; 
    const { propertyTitle, propertyType, price, address, city, bedroomCount, nearbyCollegeDistance, nearbyHospitalDistance } = req.body;

    propertyModel.update(
        {
            propertyTitle,
            propertyType,
            price,
            address,
            city,
            bedroomCount,
            nearbyCollegeDistance,
            nearbyHospitalDistance
        },
        {
            where: { propertyId }
        }
    )
    .then(() => {
        res.redirect('/sellerDashboard'); 
    })
    .catch(error => {
        console.error("Error updating property:", error);
        res.status(500).send("Internal Server Error");
    });
};


const postDeleteProperty = (req, res, next) => {
    const { propertyId } = req.body;
    propertyModel.destroy({
        where: { propertyId: propertyId }
    })
    .then(rowsDeleted => {
        if (rowsDeleted > 0) {
            res.status(200).json({ message: 'Property deleted successfully.' });
        } else {
            res.status(404).json({ message: 'Property not found.' });
        }
    })
    .catch(err => {
        console.error('Error deleting property:', err);
        res.status(500).json({ message: 'Internal server error.' });
    });
}






const getBuyerDashboard =(req,res,next)=>{
    if(req.session.isLoggedIn)
    {
        propertyModel.findAll()
        .then((data)=>{
            console.log(data);
            res.render('buyerDashboard',{
                data:data,
                user : req.session.user
            })
        })
        .catch((error)=>
            console.log(error)
        )
        
    }
    else
    {
        res.redirect('/');
    }
}

module.exports = {
    getSellerDashboard,
    getNewProperty,
    postNewProperty,
    getEditProperty,
    postEditProperty,
    postDeleteProperty,
    getBuyerDashboard
}