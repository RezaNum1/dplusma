import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllPendonorDetail: function getAllPendonorDetail() {
        return prisma.pendonor.findMany()
    },
    addPendonorDetail: function addPendonorDetail(cast) {
        return
    }
}