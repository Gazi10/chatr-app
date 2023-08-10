import express from 'express';
import { getUser, getDrafts, readMail, sendMail, readAllMail, getThread, getAllThread } from '../controllers/EmailController.js';
const router = express.Router();

router.get('/mail/user/:email', getUser)
router.get('/mail/send', sendMail);
router.get('/mail/drafts/:email', getDrafts);
router.get('/mail/read/:messageId', readMail);
router.get('/mail/read/all/:email', readAllMail);
router.get('/mail/thread/all/:email', getAllThread);
router.get('/mail/thread/:threadId', getThread)

export default router;
