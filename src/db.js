import mongoose from "mongoose";

export const connectionDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/crudDB');
        console.log('Database connected');
    }
    catch (error) {
        console.log(error);
    }
};