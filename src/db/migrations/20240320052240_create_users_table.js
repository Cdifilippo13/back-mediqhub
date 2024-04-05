/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.
        createTable('types', (table) => {
            table.increments('id').primary();
            table.string('type');
        }).
        createTable('users', (table) => {
            table.string('email').primary();
            table.string('name');
            table.string('password');
            table.integer('typeId').unsigned().references('id').inTable('types').onDelete('CASCADE').index();
        }).
        createTable('doctors', (table) => {
            table.increments('id').primary();
            table.string('medicalSpeciality');
            table.string('userId').references('email').inTable('users').onDelete('SET NULL').index();
        }).
        createTable('patients', (table) => {
            table.increments('id').primary();
            table.string('userId').references('email').inTable('users').onDelete('SET NULL').index();
        }).
        createTable('appointments', (table) => {
            table.increments('id').primary();
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('citation');
            table.string('state');
            table.integer('doctorId').references('id').inTable('doctors').onDelete('CASCADE').index();
            table.integer('patientId').references('id').inTable('patients').onDelete('CASCADE').index();
        }).
        createTable('clinicHistorys', (table) => {
            table.increments('id');
            table.integer('patientId').primary().references('id').inTable('patients').onDelete('SET NULL').index();
            table.string('diagnosis');
            table.string('cie10');
            table.integer('doctorId').references('id').inTable('doctors').onDelete('CASCADE').index();
        })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema
    .dropTableIfExists('patient')
    .dropTableIfExists('doctors')
    .dropTableIfExists('users')
    .dropTableIfExists('types')
       
        
        .dropTableIfExists('clinicHistorys')
        
        .dropTableIfExists('appointment')
      

}
