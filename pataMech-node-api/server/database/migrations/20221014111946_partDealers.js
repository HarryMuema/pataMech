/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('partdealer', function (table){
        table.increments('dealer_id').notNullable();
        table.string('dealer_name').notNullable();
        table.integer('user_id',255).index().references('user_id').inTable('user');
        table.integer('address_id',255).index().references('address_id').inTable('address');
        table.integer('phone_id',255).index().references('phone_id').inTable('contacts');
        table.integer('town_id',255).index().references('town_id').inTable('town');
        table.timestamps(true,true)
    })
};  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('partdealer')
};
