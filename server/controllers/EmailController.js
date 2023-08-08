import "dotenv/config";
import { google } from "googleapis";
import axios from "axios";
import generateConfig from "../utils/EmailUtil.js";
import UserModel from "../models/userModel.js";

const auth = {
  type: "OAuth2",
  user: "apptester763@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "AppTester <apptester763@gmail.com>",
  to: "apptester763@gmail.com",
  subject: "Gmail API NodeJS",
};

export const sendMail = async (req, res) => {
  try {
    const accessToken = sessionStorage.getItem("token");
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        ...CONSTANTS.auth,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      ...CONSTANTS.mailoptions,
      text: "The Gmail API with NodeJS works",
    };

    const result = await transport.sendMail(mailOptions);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/profile`;
    const user  = await UserModel.find({email: req.params.email});
    const token = user[0].token;
    const config = generateConfig(url, token);
    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
export const getDrafts = async (req, res) => {
  try {
    const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/drafts`;
    const user  = await UserModel.find({email: req.params.email});
    const token = user[0].token;
    const config = generateConfig(url, token);
    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const readMail = async (req, res) => {
  try {
    const url = `https://gmail.googleapis.com/gmail/v1/users/apptester763@gmail.com/messages/${req.params.messageId}`;
    const user  = await UserModel.find({email: "apptester763@gmail.com"});
    const token = user[0].token;
    const config = generateConfig(url, token);
    const response = await axios(config);

    let data = await response.data;

    res.json(data);
  } catch (error) {
    res.send(error);
  }
};
