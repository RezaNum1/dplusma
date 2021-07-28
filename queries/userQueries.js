import { PrismaClient } from "@prisma/client"
import { knex } from "../connection/dbConnection";

const prisma = new PrismaClient();

module.exports = {
    getAllUser: function getAllUser() {
        return prisma.user.findMany()
    },
    addUser: function addUser(cast) {
        // return knex("users")
        //         .insert({
        //             branchId: cast.branchId,
        //             name: cast.name,
        //             email: cast.email,
        //             password: cast.password,
        //             role: cast.role,
        //             status: cast.status,
        //             createdAt: knex.fn.now()
        //         })
        //         .returning('*');
    }
}