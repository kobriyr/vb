'use strict'

const Schema = use('Schema')

class ArticlesSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.integer('number')
      table.string('author')
      table.string('title')
      table.string('pages')
      table.text('summary')
      table.text('summary_en')
      table.string('key_words')
      table.string('document')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticlesSchema
