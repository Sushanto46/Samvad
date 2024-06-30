import { ApiResponse } from '../utils/ApiResponse.js';
import { User } from './../models/users.model.js';
const registerUser = async (req,res) => {
    const {username, email, password} = req.body;
    try {
        const createdUser = await User.create({
            username,
            email,
            password
        })
        return res.status(200).json(new ApiResponse(200, createdUser, "User created successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, {}, "Error while creating user"))
    }
}

const loggedInUser = async (req,res) => {
    const email = req.query.email
    
    try {
        const user = await User.find({email})
        if(!user)
            res.json(new ApiResponse(200, {}, "User not found"))
    
        res.status(200).json(new ApiResponse(200, user, "User logged in successfully"))
    } catch (error) {
        res.json(new ApiResponse(400, {}, "Error while fetching user"))
    }
}

export {
    registerUser,
    loggedInUser
}