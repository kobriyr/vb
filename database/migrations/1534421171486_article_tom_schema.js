'use strict'

const Schema = use('Schema')

class ArticleTomSchema extends Schema {
  up () {
    this.create('articles_toms', (table) => {
      table.increments()
      table.integer('article_id').unsigned().index()
      table.foreign('article_id').references('id').on('articles').onDelete('cascade')
      table.integer('tom_id').unsigned().index()
      table.foreign('tom_id').references('id').on('toms').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('article_toms')
  }
}

module.exports = ArticleTomSchema
