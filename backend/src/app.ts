import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan'
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
config();
const app = express();



//middlewares
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan('dev'));

app.use('/api/v1', appRouter);



export default app;

//ALHAMDULILLH
//ALLAH SUBHANA WA TALA
//MUHAMMADUR RASULULLAH
//SALLALLAHU ALAIHI WA SALLAM
//ALLAHU AKBAR
//SUBHANALLAH
//ALHAMDULILLAH
//LAILLAHA ILLALLAH
//WALLAHU AKBAR
//LA HAULA WALA QUWWATA ILLA BILLAH
//RABBISH RAHLI SADRI WA YASSIRLI AMRI WAHLUL UQDATAN MIN LISAANI YAFQAHU QAWLI