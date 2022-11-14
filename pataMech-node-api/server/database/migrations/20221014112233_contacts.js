/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('contacts', function (table){
        table.increments('contact_Id').notNullable();
        table.integer('phone_number',20).notNullable();
        table.integer('alt_phone_number',20).notNullable();
        table.integer('telephone',20).notNullable();
        table.string('postal_code',20).notNullable();
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('contacts')
};
