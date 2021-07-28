import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllTimeslot: function getAllTimeslot() {
        return prisma.timeslot.findMany()
    },
    addTimeslot: function addTimeslot(cast) {
        return
    }
}