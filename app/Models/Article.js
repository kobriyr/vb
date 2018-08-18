'use strict'

const Model = use('Model')

class Article extends Model {
    toms () {
        return this.belongsToMany('App/Models/Tom').pivotTable('articles_toms')
    }
}

module.exports = Article
