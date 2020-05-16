exports.seed = function(knex) {
    return knex('users').insert([
        { username: 'admin', password: '$2a$12$eBxmzx0RuixMC9lwyDaGV.sOxWva0u51WDwwHbHcb1jDpwu0T4cvi\n' },
        { username: 'seconduser', password: '$2a$12$eBxmzx0RuixMC9lwyDaGV.sOxWva0u51WDwwHbHcb1jDpwu0T4cvi\n' }
    ]);
};