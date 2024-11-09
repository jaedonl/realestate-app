import bcrypt from "bcrypt";
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash pw
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)

        // Create new user and save to DB
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })
        console.log(newUser)
        res.status(201).json({message: "User created successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to create user"})
    }
    
    
}

export const login = (req, res) => {
    const { username, pasword } = req.body;

    // Check if user exists

    // Check if the pw is correct
}

export const logout = (req, res) => {
    //db operations
} 