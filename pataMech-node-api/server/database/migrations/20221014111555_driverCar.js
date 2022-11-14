/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('drivercar ', function (table) {
        table.increments('driver_Car_Id');
        table.string('car_Make', 40).nullable;
        table.string('car_Model',40).nullable;
        table.string('reg_Number',7).notNullable;
        table.integer('model_Year',4).nullable;
        table.integer('user_Id',255).index().references('user_Id').inTable('users');
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
