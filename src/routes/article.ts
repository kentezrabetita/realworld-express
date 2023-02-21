import express from 'express';
import {
  getAllArticlesHandler,
  getArticleHandler,
  createArticleHandler
} from '../controllers/article.js';

const router = express.Router();

router.get('/', getAllArticlesHandler);
router.get('/:id', getArticleHandler);

router.post('/', createArticleHandler);

export default router;
