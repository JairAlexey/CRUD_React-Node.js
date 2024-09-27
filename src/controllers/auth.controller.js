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
        res.status(500).send({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscamos el usuario en la base de datos
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const passwordMatch = await bcrypt.compare(password, userFound.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        const token = await createToken({ id: userFound._id });
        
        // Enviamos la respuesta al cliente
        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    }
    catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}