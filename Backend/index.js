import express from "express";
import dotenv from 'dotenv'
import connection from "./Config/connect.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";
import crypto from "crypto";
const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use(cors({
    origin: "https://learn-it-mocha.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
dotenv.config()

import Route from "./Routes/userRoute.js";
import courseRoute from "./Routes/courseRoute.js";
import cartRoute from "./Routes/cartRoute.js";
import contactRouter from "./Routes/contactRoute.js";

app.use('/api/users', Route)
app.use('/api/users',courseRoute)
app.use('/api/users',cartRoute)
app.use('/api/users',contactRouter)

app.options('*', cors());

app.post('/payment/order',async (req,res)=>{
  console.log("here")
  try {
    const razorpay = new Razorpay({
      key_id : process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET
    });
    console.log("herr")
    const options = req.body;
    const order = await razorpay.orders.create(options);
  
    if(!order) return res.status(500).send("Error")
  
  
    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }

})


app.post("/payment/verification",(req,res)=>{

  const {razorpay_order_id, razorpay_payment_id,razorpay_signature} =req.body;
  console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature);
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  // order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  console.log(digest);
  if(digest !== razorpay_signature)
    return res.status(400).send("transaction failed");

  res.json({
    message:"success",
  })
})
if(connection()){
app.listen(process.env.PORT ,()=>{
    console.log(`App started at ${process.env.PORT} `);
})}
