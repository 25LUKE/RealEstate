import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt"

export const allUser = async (req, res) => {

    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong' })
    }
};
export const singleUser = async (req, res ) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        })
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Failed to get User!' });
    }
};
export const updateUser = async (req, res ) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const {password, avatar, ...inputs} = req.body;

    if ( id !== tokenUserId) {
        return res.status(403).json({ msg: 'Not Authenticated'});
    }

    let updatedPassword = null;

    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10)
        }

        const updateUser = await prisma.user.update({
            where: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            }
        });

        const { password: userPassword, ...rest } = updateUser;

        res.status(200).json(rest);
        console.log(rest)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Failed to update User' });

    }
};
export const deleteUser = async (req, res ) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    
    if ( id!== tokenUserId) {
        return res.status(403).json({ msg: 'Not Authenticated'});
    }

    try {
        await prisma.user.delete({
            where: { id }
        })
        res.status(200).json({ msg: "User Deleted Success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Failed to delete User' });
    }
};
