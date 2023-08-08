import express from 'express';
import { getUser, getDrafts, readMail, sendMail } from '../controllers/EmailController.js';
const router = express.Router();

router.get('/mail/user/:email', getUser)
router.get('/mail/send', sendMail);
router.get('/mail/drafts/:email', getDrafts);
router.get('/mail/read/:messageId', readMail);

export default router;
