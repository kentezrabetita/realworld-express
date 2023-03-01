import { Model } from 'sequelize';

interface ArticleAttributes {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
}

interface ArticleCreationAttributes {}

export interface ArticleInstance
  extends Model<ArticleAttributes, ArticleCreationAttributes>,
    ArticleAttributes {}
