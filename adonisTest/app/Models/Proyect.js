'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proyect extends Model {
    // user (){
    //     return this.belongsTo('App/Models/User')
    // }

    proyects(){
        return this.hasMany('App/Models/Users')
      }


}

module.exports = Proyect
