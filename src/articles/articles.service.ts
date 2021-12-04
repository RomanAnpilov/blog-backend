import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose";
import {Article, ArticleDocument} from "./schemas/article.schema"
import {CreateArticleDto, UpdateArticleDto} from "./dto"

@Injectable()
export class ArticlesService {

    constructor(
        @InjectModel(Article.name) private productModule: Model<ArticleDocument>,
      ) {}

    async getAllArticles() {
        return this.productModule.find().exec();
    }

    async createArticle(articleDto: CreateArticleDto) {
        const newProduct = new this.productModule(articleDto)
        return newProduct.save();
    }

    async deleteArticle(id: string) {
        return this.productModule.findByIdAndDelete(id)
    }

    async updateArticle(id: string, articleDto: UpdateArticleDto) {
        return this.productModule.findByIdAndUpdate(id, articleDto)
    }

}