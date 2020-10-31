const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users')

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { name, password, email } = req.body;
            // Insere na tabela users
            await knex('users').insert({ name, password, email })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            // Onde o usuario tiver o id, ele vai atualizar
            const { name } = req.body;
            const { id } = req.params;
            // Atualizar dados na tabela users
            await knex('users').update({ name }).where({ id })

            return res.send()
        } catch {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            // Atualizar dados na tabela users
            await knex('users').where({ id }).del()

            return res.send()
        } catch {
            next(error)
        }
    }
}