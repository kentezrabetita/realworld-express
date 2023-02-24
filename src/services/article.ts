import Article from '../models/article/article.model.js';
import slugify from 'slugify';

// TODO validation
// TODO article exist check

const getAllArticles = async () => {
  try {
    const articles = await Article.findAll();
    if (articles.length === 0)
      throw new Error('There are currently no Articles in the Database.');
    return articles;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getArticle = async (id: number) => {
  try {
    const article = await Article.findByPk(id);
    if (!article) throw new Error('Article does not exist!');
    return article;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const createArticle = async (articleData: any) => {
  const data = {
    ...articleData,
    slug: slugify(articleData.title, { lower: true })
  };
  try {
    const article = await Article.create(data);
    if (!article) throw new Error('Error creating article!');
    return article;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateArticle = async (id: number, articleData: any) => {
  try {
    const article = await getArticle(id);
    return await Article.update(articleData, { where: { id } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteArticle = async (id: number) => {
  try {
    const article = await getArticle(id);
    return await Article.destroy({ where: { id } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const ArticleService = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
};

export default ArticleService;
