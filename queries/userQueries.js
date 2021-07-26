import { knex } from "../connection/dbConnection";

module.exports = {
    getAllUser: function getAllUser() {
        return knex('users')
        .select('*')
    },
    addUser: function addUser(cast) {
        return knex("users")
                .insert({
                    branchId: cast.branchId,
                    name: cast.name,
                    email: cast.email,
                    password: cast.password,
                    role: cast.role,
                    status: cast.status,
                    createdAt: knex.fn.now()
                })
                .returning('*');
    }
}