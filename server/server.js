import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = [
  "https://mern-auth-1-2coj.onrender.com", // Frontend URL
  "https://mern-auth-8yu7.onrender.com", // Backend URL (for your own reference)
  "http://localhost:4000", // If you're testing locally
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins,credentials: true}));

//API Endpoints
app.get('/', (req, res) => {
    res.send("API WORKING")
})
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`server started on PORT: ${port}`)
});