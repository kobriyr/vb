'use strict'

const Schema = use('Schema')

class UpdatetTomSchema extends Schema {
  up () {
    this.table('toms', (table) => {
      table.string('name_en')
      table.text('description_en')
    })
  }

  down () {
    this.table('toms', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdatetTomSchema
