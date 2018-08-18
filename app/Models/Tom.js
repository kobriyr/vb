'use strict'

const Model = use('Model')

class Tom extends Model {
    articles () {
        return this.belongsToMany('App/Models/Article').pivotTable('articles_toms')
    }
}

module.exports = Tom
