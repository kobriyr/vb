'use strict'

const Article = use('App/Models/Article');
const Helpers = use('Helpers');
const fs = use('fs');
const removeFile = Helpers.promisify(fs.unlink);

class ArticleController {
  async index({ response }) {
    const articles = await Article.query().orderBy('number');

    return response.status(200).send(articles);
  }

  async show ({ params, response }) {
    const article = await Article.find(params.id);

    return response.status(200).send(article);
  }

  async store ({ request, response }) {
    const { tom, author, author_en, number, title, title_en, pages,
      key_words, key_words_en, summary, summary_en, references, document } = request.body;
    const article = new Article();

    article.number = number;
    article.author = author;
    article.author_en = author_en;
    article.title = title;
    article.title_en = title_en;
    article.pages = pages;
    article.key_words = key_words;
    article.key_words_en = key_words_en;
    article.summary = summary;
    article.summary_en = summary_en;
    article.references = references;
    article.document = `public/pdf/${document}.pdf`;

    await article.save();
    await article.toms().attach(tom);

    return response.status(200).send(article);
  }

  async update({ params, request, response }) {
    const article = await Article.find(params.id);

    const { author, author_en, number, title, title_en, pages,
      key_words, key_words_en, summary, summary_en, references, document } = request.body;

    article.number = number;
    article.author = author;
    article.author_en = author_en;
    article.title = title;
    article.title_en = title_en;
    article.pages = pages;
    article.key_words = key_words;
    article.key_words_en = key_words_en;
    article.summary = summary;
    article.summary_en = summary_en;
    article.references = references;
    article.document = document;

    await article.save();

    return response.status(200).send(article);
  }

  async delete ({ params, response }) {
    const article = await Article.find(params.id);

    await article.delete();

    return response.status(200).send(article);
  }
}

module.exports = ArticleController
