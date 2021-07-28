import { PrismaClient } from "@prisma/client"
import { knex } from "../connection/dbConnection";

const prisma = new PrismaClient();

module.exports = {
    getAllPmi: function getAllPmi() {
        return prisma.pmi.findMany()
    },
    addPmi: function addPmi(cast) {
        // return knex("pmi")
        //         .insert({
        //             branchName: cast.branchName,
        //             branchSize: cast.branchSize,
        //             branchAddress: cast.branchAddress,
        //             langitude: cast.langitude,
        //             longitude: cast.longitude,
        //             createdAt: knex.fn.now()
        //         })
        //         .returning('*');
    }
}