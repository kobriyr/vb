'use strict'

const Schema = use('Schema')

class TomSchema extends Schema {
    up () {
        this.create('toms', (table) => {
            table.increments()
            table.string('name')
            table.integer('number')
            table.integer('year')
            table.text('description')
            table.string('document')
            table.timestamps()
        })
    }

    down () {
        this.drop('toms')
    }
}

module.exports = TomSchema
