const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');

const getRegister = (req,res,next)=>{
    res.render('register');
}

const postRegister = (req,res,next)=>{
    const { firstName, lastName, password, emailId, phoneNumber, type } = req.body;
    
    bcrypt.hash(password, 10)
    .then(hashedPassword => {
        return userModel.create({
            firstName,
            lastName,
            password: hashedPassword,
            emailId,
            phoneNumber,
            type
        });
    })
    .then(newUser => {
        res.redirect('/login');
    })
    .catch(error => {
        console.error('Error registering user:', error);
        res.status(500).json({
            message: 'Error registering user',
            error: error.message
        });
    });
}













const getLogin=(req,res,next)=>{
    res.render('login');
    
}

const postLogin=(req,res,next)=>{const { emailId, password } = req.body;

    userModel.findOne({ where: { emailId: emailId } })
    .then(user => {
        if (!user) {
            return res.status(401).json({
                message: 'Authentication failed. User not found.'
            });
        }
        
        return bcrypt.compare(password, user.password)
        .then(match => {
            if (!match) {
                return res.status(401).json({
                    message: 'Authentication failed. Incorrect password.'
                });
            }
            req.session.isLoggedIn = true;
            req.session.user = {
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId,
                phoneNumber: user.phoneNumber,
                type: user.type,
            };
            console.log("success login")
            console.log(user.type)
            if (user.type === 'SELLER') {
                res.redirect('/sellerDashboard');
            } else if (user.type === 'BUYER') {
                res.redirect('/buyerDashboard');
            } else {
                res.status(403).json({
                    message: 'Forbidden. User type not recognized.'
                });
            }
        });
    })
    .catch(error => {
        console.error('Error during login:', error);
        res.status(500).json({
            message: 'Login failed due to an internal error',
            error: error.message
        });
    });
}


const getLogout = (req,res,next)=>{
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.redirect('/');
}













const getUserDashboard=(req,res,next)=>{
    console.log(req.session);
    console.log(`check kra hu ${req.session.isLoggedIn}`)
    if(req.session.isLoggedIn)
    {
        userModel.findOne(
            {
                where : {id : req.session.userId}
            }
        )
        .then(user=>{
            res.render('dashboard',{
                username : user.username,
                password : user.password,
                role : user.role,
                level : user.level
            });
        })
        .catch(
            err=>console.log(err)
        )
    }
    else
    {
        res.redirect('/');
    }
}










const getRegisteredUsers = (req,res,next)=>{
    if(req.session.isLoggedIn)
    {
        if(req.session.userLevel>1)
        {
            userModel.findAll()
                .then((data)=>{
                    res.render('registeredUsers',{
                        data:data, 
                        username : req.session.username,
                        level:req.session.userLevel
                    })
                })
                .catch((err)=>
                console.log(err)
                )
        }
        else 
        {
            res.redirect('/userDashboard')
        }
    }
    else
    {
        res.redirect('/');
    }
}







const postRegisteredUsers =(req,res,next)=>{
    var id = req.body.id;
    if(req.body.op==="del")
    {
        userModel.destroy({
            where: { id : id}
        })
        .then((result)=>
            res.redirect('/registeredUsers'),
        )
        .catch((err)=>
        console.log(err)
    )
    }
    else if(req.body.op==="edt")
    {
        console.log(req.body.id);
        userModel.update({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        },
        {
            where: {id: id}
        }
        )
        .then((qwe)=>{
            res.send("kyu")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}














module.exports = {
    getLogin,
    postLogin,
    getUserDashboard,
    getRegister,
    postRegister,
    getLogout
}