import express from 'express';
import mongoose from "mongoose";
import 'dotenv/config';
import cors from "cors";
import passport from "passport";
import cookieSession from 'cookie-session';
import ChatRoute from './routes/ChatRoute.js';
import passportSetup from './passport.js'
import authRoute from './routes/AuthRoute.js'
import emailRoute from './routes/EmailRoute.js'
import messageRoute from './routes/MessageRoute.js'

const app = express();
const PORT = 8000;

const uri = "mongodb+srv://gazi:cs326@chatr.jwbbusf.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(
  cookieSession({name:"session", keys:["openreplay"], maxAge: 24 * 60 * 60 * 100,})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
});

app.use("/", authRoute);
app.use('/email', emailRoute);
app.use('/chat', ChatRoute);
app.use('/message', messageRoute);
