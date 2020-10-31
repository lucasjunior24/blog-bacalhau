# Comandos usados para rodar projeto 

Para rodar esse projeto voçê precisa ter instalado no seu computador o nodeJS e banco de dados postgreSQL. 
LINK para instalção.

Dentro da pastar "api-blog" rode os sequintes comandos, para as instalar depedencias

npm i

npm start

Com o servidor rodando sera necessario criar um banco de dados
acesse no seu terminal e rode o comando a seguir para criar banco de dados
PSQL -U postgres

dentro do postgres rode o comando parar criar o banco bacalhau
OBS: o banco tem que ter esse nome

CREATE DATABASE bacalhau;

Para ver se o banco foi criado, rode no terminal: \l
Com o banco rodando ja sera possivel criar as tabelas do banco, para criar a primeira tabela, rode o comando

npx knex migrate:make create_table_users

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela users

exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.boolean('admin').notNullable().defaultTo(false)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});


exports.down = function (knex) {
    return knex.schema.dropTable('users')
};

Agora vamos criar a proxima tabela, pra isso rode

npx knex migrate:make create_table_perguntas

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela perguntas

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


Agora vamos criar a proxima tabela, pra isso rode

npx knex migrate:make create_table_prof

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela prof

exports.up = knex => knex.schema.createTable('prof', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.boolean('admin').notNullable().defaultTo(false)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = function (knex) {
    return knex.schema.dropTable('prof')
};

Agora vamos criar a proxima tabela, pra isso rode

npx knex migrate:make create_table_respostas

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela respostas

exports.up = knex => knex.schema.createTable('respostas', table => {
    table.increments('id').primary()
    table.text('resposta').notNullable()

    // relacionamento
    // 1 - N
    table.integer('prof_id')
        .references('prof.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
});


exports.down = knex => knex.schema.dropTable('respostas');


Apos a configuração dos arquivos rode o comando a seguir para execultar a criação das tabelas

npx knex migrate:latest

No terminal com o banco de dados aberto, rode o seguinte comando para ver se as tabelas foram criadas: 
\c portal_alunos
\dt 

Para ver se os campos estao corretos rode:
\d users
\d perguntas
\d prof
\d respostas


