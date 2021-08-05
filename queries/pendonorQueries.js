import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllPendonor: function getAllPendonor() {
        return prisma.pendonor.findMany()
    },
    getPendonor: function getPendonor(id) {
        return prisma.pendonor.findUnique({
            where: {
                id: id
            }
        })
    },
    addPendonor: async function addPendonor(cast) {
        return await prisma.pendonor.create({
            data: {
                fullName: cast.fullName,
                email: cast.email,
                password: cast.password,
                phoneNumber: cast.phoneNumber,
                occupation: cast.occupation
            }
        })
    },
    updatePendonor: async function updatePendonor(cast) {
        return await prisma.pendonor.update({
            where: { id: cast.id },
            data: {
                fullName: cast.fullName,
                email: cast.email,
                phoneNumber: cast.phoneNumber,
                occupation: cast.occupation
            }
        })
    }
}
