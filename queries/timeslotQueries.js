import { PrismaClient } from "@prisma/client"
import { knex } from "../connection/dbConnection";

const prisma = new PrismaClient();

module.exports = {
    getAllTimeslot: function getAllTimeslot() {
        return prisma.timeslot.findMany()
    },
    addTimeslot: function addTimeslot(cast) {
        // return knex("timeslot")
        //         .insert({
        //             branchId: 1,
        //             type: cast.type,
        //             timeSlot: cast.timeSlot,
        //             totalSlot: cast.totalSlot,
        //             createdAt: knex.fn.now()
        //         })
        //         .returning('*');
    }
}