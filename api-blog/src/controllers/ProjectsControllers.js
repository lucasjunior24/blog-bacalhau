const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            // mostrar/ pegar projetos de usuarios por id
            const { user_id } = req.query;
            const query = knex('projects')

            if (user_id) {
                query
                    .where({ user_id })
                    .join('users', 'users.id', '=', 'projects.user_id')
                    .select('projects.*', 'users.username')

            }

            const results = await query;

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const { title, user_id } = req.body;
            // Insere na tabela users
            await knex('projects').insert({ title, user_id })

            return res.status(201).send()
        } catch {
            next(error)
        }
    },
    // async update(req, res, next) {
    //     try {
    //         // Onde o usuario tiver o id, ele vai atualizar
    //         const { username } = req.body;
    //         const { id } = req.params;
    //         // Atualizar dados na tabela users
    //         await knex('users').update({ username }).where({ id })

    //         return res.send()
    //     } catch {
    //         next(error)
    //     }
    // },
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