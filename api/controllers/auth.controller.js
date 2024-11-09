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

export const login = async (req, res) => {
    const { username, pasword } = req.body;

    try {
        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { username: username }
        })

        if (!user) return res.status(404).json({ message: "Invlaid Credentials" })

        // Check if the pw is correct
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" })

        // Generate cookie token and send to the user
        res.setHeader("Set-Cookie", "test=" + "myValue")
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to login" })
    }

   
}

export const logout = (req, res) => {
    //db operations
} 