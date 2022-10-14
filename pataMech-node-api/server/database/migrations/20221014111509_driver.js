/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('driver', function (table) {
        table.increments('driver_id');
        table.integer('phone_id',255).index().references('phone_id').inTable('contacts');
        table.integer('user_id',255).index().references('user_id').inTable('user');
        table.integer('driver_car_id',255).index().references('driver_car_id').inTable('drivercar');
        table.integer('town_id',255).index().references('town_id').inTable('town');
        table.integer('address_id',255).index().references('address_id').inTable('address');
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("driver");
};
