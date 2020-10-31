const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            // mostrar/ pegar projetos de usuarios por id
            const { prof_id } = req.query;
            const query = knex('respostas')

            if (prof_id) {
                query
                    .where({ user_id })
                    .join('prof', 'prof.id', '=', 'respostas.prof_id')
                    .select('respostas.*', 'prof.name')

            }

            const results = await query;

            return res.json(results)
        } catch (error) {
            next(error)
        }

    },
    async create(req, res, next) {
        try {
            const { resposta, prof_id } = req.body;
            // Insere na tabela users
            await knex('respostas').insert({ resposta, prof_id })

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