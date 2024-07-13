import express from 'express';
import { register, login } from '../controllers/authController.js';
import auth from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', auth, getUser);

export default router;
