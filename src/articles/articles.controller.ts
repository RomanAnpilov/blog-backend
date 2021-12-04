import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import {CreateArticleDto, UpdateArticleDto} from "./dto"

@Controller('articles')
export class ArticlesController {
    
    constructor(private articlesService: ArticlesService) {}

    @Get()
    allArticles()  {
        return this.articlesService.getAllArticles();
    }

    @Delete(":id")
    deleteArticle(@Param("id") id: string) {
        return this.articlesService.deleteArticle(id);
    }

    @Post()
    createArticle(@Body() article: CreateArticleDto) {
        return this.articlesService.createArticle(article)
    }

    @Put(":id")
    updateArticle(@Body() article: UpdateArticleDto, @Param("id") id: string) {
        return this.articlesService.updateArticle(id, article);
    }

}
