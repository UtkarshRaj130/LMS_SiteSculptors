import express from 'express';
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  searchBooks,
} from '../controllers/bookControllers.js';

const router = express.Router();

router.route('/').post(createBook).get(getBooks);
router.route('/search').get(searchBooks);
router.route('/:id').put(updateBook).delete(deleteBook);

export default router;
