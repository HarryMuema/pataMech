/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('insuranceagent', function (table){
        table.increments('agent_id').notNullable();
        table.string('agent_name',255).notNullable();
        table.string('insurance_name',255).notNullable();
        table.integer('user_id',255).index().references('user_id').inTable('user');
        table.integer('phone_id',255).index().references('phone_id').inTable('contacts');
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('insuranceagent');
};
