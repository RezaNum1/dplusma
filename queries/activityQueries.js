import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllActivity: function getAllActivity() {
        return prisma.activity.findMany()
    },
    addActivity: function addActivity(cast) {
        return
    }
}