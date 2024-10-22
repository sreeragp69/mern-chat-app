import path from 'path'
import express from "express";
import { config } from "dotenv";
import cookieParser from 'cookie-parser'

import authRoutes from './Routes/auth.routes.js'
import messageRoutes from './Routes/message.routes.js'
import userRoutes from './Routes/user.routes.js'

import connectToMongodb from "./db/connectToMongodb.js";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 5000;

const __dirname  = path.resolve()

config();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/",authRoutes)
app.use("/api/messages/", messageRoutes)
app.use("/api/user/", userRoutes)


app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT, () => {
    connectToMongodb()
  console.log(`Sever Runnig at ${PORT}`);
});
