import express from 'express';
import {
  getAllArticlesHandler,
  getArticleHandler,
  createArticleHandler,
  updateArtilceHandler,
  deleteArticleHandler
} from '../controllers/article.js';

const router = express.Router();

router.get('/', getAllArticlesHandler);
router.get('/:id', getArticleHandler);

router.post('/', createArticleHandler);

router.patch('/:id', updateArtilceHandler);
router.delete('/:id', deleteArticleHandler);

export default router;
