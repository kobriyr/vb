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
    const { tom, author, number, title, pages, key_words, summary, summary_en } = request.body;
    const article = new Article();

    article.author = author;
    article.number = number;
    article.title = title;
    article.pages = pages;
    article.key_words = key_words;
    article.summary = summary;
    article.summary_en = summary_en;

    if (request.file('file')) {
      const file = request.file('file');

      await file.move('public/pdf', {
        name: `${Date.now()}_${file.clientName}`
      });

      article.document = `public/pdf/${file.fileName}`
    }

    await article.save();
    await article.toms().attach(tom);

    return response.status(200).send(article);
  }

  async update({ params, request, response }) {
    const article = await Article.find(params.id);

    const { author, number, title, pages, key_words, summary, summary_en } = request.body;

    article.author = author;
    article.number = number;
    article.title = title;
    article.pages = pages;
    article.key_words = key_words;
    article.summary = summary;
    article.summary_en = summary_en;

    if (request.file('file')) {
      const file = request.file('file');

      if (article.document) {
        await removeFile(`./${article.document}`);
      }

      await file.move('public/pdf', {
        name: `${Date.now()}_${file.clientName}`
      });

      article.document = `public/pdf/${file.fileName}`
    }

    await article.save();

    return response.status(200).send(article);
  }

  async delete ({ params, response }) {
    const article = await Article.find(params.id);

    if (article.document) {
      await removeFile(`./${article.document}`);
    }

    await article.delete();

    return response.status(200).send(article);
  }
}

module.exports = ArticleController
