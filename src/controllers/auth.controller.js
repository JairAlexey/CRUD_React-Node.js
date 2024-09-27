import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../libs/jwt.js';

export const signin = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        //Encriptamos la contraseña
        const encryptedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: encryptedPassword,
        });

        //Guardamos el usuario en la base de datos
        const userSaved = await newUser.save();

        const token = await createToken({ id: userSaved._id });

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    }
    catch (error) {
        res.status(500).send({ message: 'An error ocurred while trying to create the user' });
    }
}

export const login = async (req, res) => {

}