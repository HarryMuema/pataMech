/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('towservice', function (table){
        table.increments('tow_id').notNullable();
        table.integer('user_id',255).index().references('user_id').inTable('user');
        table.integer('phone_id',255).index().references('phone_id').inTable('contacts');
        table.integer('center_id',255).index().references('center_id').inTable('servicestation');
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('towservice')
};
