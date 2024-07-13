import express from 'express';
import { getAllBooks, addBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.post('/reserve', auth, reserveBook);
router.get('/reserved', auth, getReservedBooks);
export default router;
