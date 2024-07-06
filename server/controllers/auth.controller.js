import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password:  hashedPassword,
            }
        })
        
    console.log(user)
    res.status(201).json({ msg: 'User created successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong' });
    }
};
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username
            },
        });

        if (!user) {
            return res.status(401).json({ msg: 'Invalid Credentials' });
        }

        const isPasswordValid = await bcrypt.compare( password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid Password!' });
        }

       // res.setHeader("Set-Cookie", "test=" + "myValue").json({ msg: "success"});
       const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: user.id,
            isAdmin: true,
        }, 
        process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        )

        const { password: userPassword, ...userInfo } = user
        
    res.cookie(
        "token", token, {
            httpOnly: true,
            // secure: true, //if we are using https then we can secure true
            maxAge: age,
        }
    ).status(200).json(userInfo)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Failed to logged In' });
    }
}
export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ msg: 'Logged Out Successful' });
}
