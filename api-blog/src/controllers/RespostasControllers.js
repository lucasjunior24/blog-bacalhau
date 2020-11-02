const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            // mostrar/ pegar projetos de usuarios por id
            const { pergunta_id, user_id } = req.query;
            const query = knex('respostas')

            if (user_id) {
                query
                    .where({ user_id })
                    .join('users', 'users.id', '=', 'respostas.user_id')
                    .select('respostas.*', 'users.name')

            }

            if (pergunta_id) {
                query
                    .where({ pergunta_id })
                    .join('perguntas', 'perguntas.id', '=', 'respostas.pergunta_id')
                    .select('perguntas.pergunta')
            }
            const results = await query;

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const { resposta, prof_id, pergunta_id, user_id } = req.body;
            // Insere na tabela users
            await knex('respostas').insert({ resposta, prof_id, pergunta_id, user_id })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            // Onde o usuario tiver o id, ele vai atualizar
            const { resposta } = req.body;
            const { id } = req.params;
            // Atualizar dados na tabela users
            await knex('respostas').update({ resposta }).where({ id })

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