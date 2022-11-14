/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('request', function (table){
        table.increments('request_Id').notNullable();
        table.integer('driver_Id',255).index().references('user_Id').inTable('users');
        table.integer('mechanic_Id',255).index().references('user_Id').inTable('users');
        table.integer('tow_Id',255).index().references('user_Id').inTable('users');
        table.integer('agent_Id',255).index().references('user_Id').inTable('users');
        table.integer('center_Id',255).index().references('user_Id').inTable('users');
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('request')
};
