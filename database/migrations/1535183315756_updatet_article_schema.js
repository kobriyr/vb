'use strict'

const Schema = use('Schema')

class UpdatetArticleSchema extends Schema {
  up () {
    this.table('articles', (table) => {
      table.string('author_en')
      table.string('title_en')
      table.text('references')
      table.string('key_words_en')
    })
  }

  down () {
    this.table('articles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdatetArticleSchema
