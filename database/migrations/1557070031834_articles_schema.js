'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticlesSchema extends Schema {
  up () {
    this.table('articles', (table) => {
      table.integer('views').defaultTo(0)
    })
  }

  down () {
    this.table('articles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ArticlesSchema
