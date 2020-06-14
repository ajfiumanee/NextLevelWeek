import Knex from 'knex';

/**
 * Create the table
 */
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary;
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('ponts');
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

/**
 * Go to back the table (Rollback)
 */
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}