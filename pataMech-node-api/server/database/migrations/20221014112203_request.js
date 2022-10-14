/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('request', function (table){
        table.increments('request_id').notNullable();
        table.integer('driver_id',255).index().references('driver_id').inTable('driver');
        table.integer('mechanic_id',255).index().references('mechanic_id').inTable('mechanic');
        table.integer('tow_id',255).index().references('tow_id').inTable('towservice');
        table.integer('agent_id',255).index().references('agent_id').inTable('insuranceagent');
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
    .dropTable('request')
};
