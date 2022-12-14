/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('address',function (table){
        table.increments('address_Id').notNullable();
        table.string('address_1',255).nullable();
        table.string('address_2',255).nullable();
        table.string('town_Name',255).nullable();
        table.string('county_Name',255).nullable();
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('address')
};
