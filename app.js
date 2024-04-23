import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRouter from './routes/postRouter.js';

dotenv.config();

const app = express();
app.use(express.json());

//route
app.use('/api/', postRouter)

//connect to database
connectDB();

//port
const port = process.env.PORT || 5000;

//server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})