import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Article = db.define('article', {
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Article;

// Article.beforeValidate((article) => {
//   article.slug = slugify(article.title, { lower: true }); // ! will require slugify library
// });
