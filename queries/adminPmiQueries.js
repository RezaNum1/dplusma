import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllAdminPmi: function getAllAdminPmi() {
        return prisma.adminPmi.findMany()
    },
    addAdminPmi: function addAdminPmi(cast) {
        return
    }
}