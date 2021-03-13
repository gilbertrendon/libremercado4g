'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectSchema extends Schema {
  up () {
    this.create('proyects', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('username', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('proyects')
  }
}

module.exports = ProyectSchema
