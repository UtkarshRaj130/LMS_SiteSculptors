import express from 'express';
import { getAllBooks, addBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);

export default router;
