
exports.up = knex => knex.schema.createTable('respostas', table => {
    table.increments('id').primary()
    table.text('resposta').notNullable()

    // relacionamento
    // 1 - N
    table.integer('prof_id')
        .references('prof.id')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('pergunta_id')
        .references('perguntas.id')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
});


exports.down = knex => knex.schema.dropTable('respostas');
