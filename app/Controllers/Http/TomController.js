'use strict'

const Tom = use('App/Models/Tom');
const Helpers = use('Helpers');
const fs = use('fs');
const removeFile = Helpers.promisify(fs.unlink);

class TomController {
    async index({ response }) {
        const queryToms = await Tom.all();

        const toms = queryToms.toJSON();
        return response.status(200).send(toms);
    }

    async indexWithArticles({ response }) {
        const toms = await Tom.query()
          .with('articles')
          .fetch()
        return response.status(200).send(toms);
    }

    async show ({ params, response }) {
        const tom = await Tom.query()
                              .where('id', params.id )
                              .with('articles')
                              .first();

        return response.status(200).send(tom);
    }

    async store ({ request, response }) {
        const tom = new Tom();

        const { name, number, year, description } = request.body;

        tom.name = name;
        tom.number = number;
        tom.year = year;
        tom.description = description;

        if (request.file('file')) {
            const file = request.file('file');

            await file.move('public/pdf', {
                name: `${Date.now()}_${file.clientName}`
            });

            tom.document = `public/pdf/${file.fileName}`
        }

        await tom.save();

        return response.status(200).send(tom);
    }

    async update({ params, request, response }) {
        const tom = await Tom.find(params.id);

        const { name, number, year, description } = request.body;

        tom.name = name;
        tom.number = number;
        tom.year = year;
        tom.description = description;

        if (request.file('file')) {
            const file = request.file('file');

            if (tom.document) {
                await removeFile(`./${tom.document}`);
            }

            await file.move('public/pdf', {
                name: `${Date.now()}_${file.clientName}`
            });

            tom.document = `public/pdf/${file.fileName}`
        }

        await tom.save();

        return response.status(200).send(tom);
    }

    async delete ({ params, response }) {
        const tom = await Tom.find(params.id);

        if (tom.document) {
            await removeFile(`./${tom.document}`);
        }

        await tom.delete();

        return response.status(200).send(tom);
    }
}

module.exports = TomController
