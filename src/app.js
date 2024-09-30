import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js'; 
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', productRoutes); // Asegúrate de que esta línea sea correcta

export default app;
