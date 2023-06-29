import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const verifyUser = (req, res, next, userName) => {
    if(req.body.userName === userName) {
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
    const token = req.body.session_token //this is not the correct form, but we keep it for now. instead of body there should be name cookie, but it didn't work
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

        if (user.isAdmin) {
            verifyAdmin(res, next, user)
        } else {
        verifyUser(req, res, next, user?.userName);
        //the question mark checks if there is a user and only then checks its username
        }
    })
}