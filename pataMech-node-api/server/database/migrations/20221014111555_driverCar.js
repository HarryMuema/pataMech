/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('drivercar ', function (table) {
        table.increments('driver_car_id');
        table.string('car_make', 255).nullable;
        table.string('car_model',255).nullable;
        table.string('reg_number',7).notNullable;
        table.integer('model_year',4).nullable
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('drivercar')
};
