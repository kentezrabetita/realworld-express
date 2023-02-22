import { Request, Response } from 'express';
import ArticleService from '../services/article.js';

export const getAllArticlesHandler = async (req: Request, res: Response) => {
  try {
    const articles = await ArticleService.getAllArticles();
    res.json(articles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleHandler = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.getArticle(Number(req.params.id));
    res.json(article);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createArticleHandler = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.createArticle(req.body);
    res.json(article);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateArtilceHandler = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.updateArticle(
      Number(req.params.id),
      req.body
    );
    if (article === null) {
      res.status(404).json({ message: 'Article not found!' });
    } else {
      res.json({ message: 'Article Updated' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteArticleHandler = async (req: Request, res: Response) => {
  try {
    const article = await ArticleService.deleteArticle(Number(req.params.id));
    if (article === null) {
      res.status(404).json({ message: 'Article not found' });
    } else {
      res.json({ message: 'Article Deleted' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
