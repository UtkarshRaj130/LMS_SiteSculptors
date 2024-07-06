import express from 'express';
import { getBooks, searchBooks, updateBook } from '../controllers/bookController.js';
const router = express.Router();


router.route('/').get(getBooks);
router.route('/search').get(searchBooks);
router.route('/:id').put(updateBook);

export default router;
