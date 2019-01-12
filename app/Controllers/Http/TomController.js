'use strict'

const Tom = use('App/Models/Tom');

class TomController {
    async index({ response }) {
        const toms = await Tom.query()
          .orderBy('number', 'desc')
          .fetch();

        return response.status(200).send(toms);
    }

    async indexWithArticles({ response }) {
        const toms = await Tom.query()
          .with('articles', builder => {
            builder.orderBy('number')
          })
          .orderBy('number', 'desc')
          .fetch()
        return response.status(200).send(toms);
    }

    async show ({ params, response }) {
        const tom = await Tom.query()
                              .where('id', params.id )
                              .with('articles', builder => {
                                builder.orderBy('number')
                              })
                              .first();

        return response.status(200).send(tom);
    }

    async store ({ request, response }) {
        const tom = new Tom();

        const { name, name_en, number, year, description, description_en, document } = request.body;

        tom.name = name;
        tom.name_en = name_en;
        tom.number = number;
        tom.year = year;
        tom.description = description;
        tom.description_en = description_en;
        tom.document = `public/pdf/${document}.pdf`;

        await tom.save();

        return response.status(200).send(tom);
    }

    async update({ params, request, response }) {
        const tom = await Tom.find(params.id);

        const { name, name_en, number, year, description, description_en, document } = request.body;

        tom.name = name;
        tom.name_en = name_en;
        tom.number = number;
        tom.year = year;
        tom.description = description;
        tom.description_en = description_en;
        tom.document = document

        await tom.save();

        return response.status(200).send(tom);
    }

    async delete ({ params, response }) {
        const tom = await Tom.find(params.id);

        await tom.delete();

        return response.status(200).send(tom);
    }
}

module.exports = TomController
