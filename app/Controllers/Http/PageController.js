'use strict'

const Page = use('App/Models/Page');

class PageController {
  async index({ response }) {
    const pages = await Page.query().fetch();

    return response.status(200).send(pages);
  }

  async show ({ params, response }) {
    const page = await Page
      .query()
      .where('id', params.id)
      .first();

    return response.status(200).send(page);
  }

  async getByURL ({ params, response }) {
    const page = await Page
      .query()
      .where('url', params.url)
      .first();

    return response.status(200).send(page);
  }

  async store ({ request, response }) {
    const { title, content, url } = request.body;

    const page = new Page();

    page.title = title;
    page.url = url;
    page.content = content;

    await page.save();

    return response.status(200).send(page);
  }

  async update({ params, request, response }) {
    const page = await Page.find(params.id);

    const { title, content } = request.body;

    page.title = title;
    page.content = content;

    await page.save();

    return response.status(200).send(page);
  }

  async delete ({ params, response }) {
    const page = await Page.find(params.id);

    await page.delete();

    return response.status(200).send(page);
  }
}

module.exports = PageController
