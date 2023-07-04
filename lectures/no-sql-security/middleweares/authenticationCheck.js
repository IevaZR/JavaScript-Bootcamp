import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'



const verifyUser = (req, res, next, userName) => {

    if(req.body.userName || req.params.userName === userName) {
        return next()
    }

    return res.status(400).send('You are not authorized!')
}

const verifyAdmin = (res, next, user) => {
    if (user?.isAdmin) {
       
      return next()
    }
    return res.status(400).send("You are not authorized!");
  };

//we are creating a middlewear
//the third parameter allows us to go further if the conditions are met
export const verifySessionToken = (req, res, next) => {
    const token = req.headers.cookie.split("session_token=")[1] 
    
    //session_token is what we named the cookie un userController

    if(!token) {
        return res.status(401).send("Not authorized!")
    }

    //we verify if the token is valid
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        //we check if something is wrong and there is an error
        if(err) {
            return res.status(401).send("Token is invalid!")
        }

        //if there is no error
        const user = await userModel.findById(decodedToken.id)

        const ADMIN_ROUTES = ["/get-all", "/delete-all"].includes(req.route.path)

        if (user.isAdmin || ADMIN_ROUTES) {
             //with above code ADMIN_ROUTES.includes(req.route.path) we check if that route is only allowed to admin
            verifyAdmin(res, next, user)
        } else {
        verifyUser(req, res, next, user?.userName);
        //the question mark checks if there is a user and only then checks its username
        }
    })
}