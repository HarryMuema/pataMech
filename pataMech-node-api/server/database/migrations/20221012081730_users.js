/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('user_Id');
        table.string('first_Name', 30);
        table.string('last_Name', 30);
        table.string('user_Name',30).notNullable;
        table.string('email', 255).notNullable().unique();
        table.string('password', 255).notNullable();
        table.integer('role_Id',255).index().references('role_Id').inTable('role');
        table.integer('address_Id',255).index().references('address_Id').inTable('address');
        table.integer('contact_Id',255).index().references('contact_Id').inTable('contacts');
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("users");
};
