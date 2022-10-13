/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('user_id');
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.string('email', 255).notNullable().unique();
        table.string('password', 255).notNullable();
        table.timestamps(true,true)
    })
    .createTable('products', function (table) {
        table.increments('id');
        table.decimal('price').notNullable();
        table.string('name', 1000).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
