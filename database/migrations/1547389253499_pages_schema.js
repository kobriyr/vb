'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PagesSchema extends Schema {
  up () {
    this.create('pages', (table) => {
      table.increments()
      table.string('url').notNullable().unique()
      table.string('title')
      table.text('content')
    })
  }

  down () {
    this.drop('pages')
  }
}

module.exports = PagesSchema
