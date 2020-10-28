
exports.up = knex => knex.schema.createTable('perguntas', table => {
    table.increments('id').primary()
    table.text('pergunta').notNullable()

    // relacionamento
    // 1 - N
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
});


exports.down = knex => knex.schema.dropTable('perguntas');
