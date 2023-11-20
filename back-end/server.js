import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/connection.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import customerRoute from './routes/customerRoutes.js';
import productRoutes from './routes/productRoutes.js';
import subproductsRoutes from './routes/subProductsRoutes.js';


const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{

    res.send('api');
});

app.use('/api/users', userRoutes);
app.use('/api/customer', customerRoute); 
app.use('/api/product', productRoutes); 
app.use('/api/subproducts', subproductsRoutes); 
 
app.listen(port,()=>{console.log(`server is running ${port}`)}); 