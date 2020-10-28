const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            // mostrar/ pegar projetos de usuarios por id
            const { user_id } = req.query;
            const query = knex('perguntas')

            if (user_id) {
                query
                    .where({ user_id })
                    .join('users', 'users.id', '=', 'perguntas.user_id')
                    .select('perguntas.*', 'users.name')

            }

            const results = await query;

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const { pergunta, user_id } = req.body;
            // Insere na tabela users
            await knex('perguntas').insert({ pergunta, user_id })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            // Onde o usuario tiver o id, ele vai atualizar
            const { pergunta } = req.body;
            const { id } = req.params;
            // Atualizar dados na tabela users
            await knex('perguntas').update({ pergunta }).where({ id })

            return res.send()
        } catch (error) {
            next(error)
        }
    },
    // async delete(req, res, next) {
    //     try {
    //         const { id } = req.params;
    //         // Atualizar dados na tabela users
    //         await knex('users').where({ id }).del()

    //         return res.send()
    //     } catch {
    //         next(error)
    //     }
    // }
}