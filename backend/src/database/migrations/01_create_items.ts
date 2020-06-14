import Knex from 'knex';

/**
 * Create the table
 */
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary;
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

/**
 * Go to back the table (Rollback)
 */
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}