import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllPmi: function getAllPmi() {
        return prisma.pmi.findMany()
    },
    getPmi: function getPmi(id) {
        return prisma.pmi.findUnique({
            where: {
                id: id
            }
        })
    },
    addPmi: async function addPmi(cast) {
        return await prisma.pmi.create({
            data: {
                branchName: cast.branchName,
                branchAddress: cast.branchAddress,
                branchSize: cast.branchSize,
                phoneNumber: cast.phoneNumber,
                availability: cast.availability,
                langitude: cast.langitude,
                longitude: cast.longitude,
                timeslots: cast.timeslots
            }
        })
    },
    updatePmi: async function updatePmi(cast) {
        return await prisma.pmi.update({
            where: { id: cast.id },
            data: {
                branchName: cast.branchName,
                branchAddress: cast.branchAddress,
                branchSize: cast.branchSize,
                phoneNumber: cast.phoneNumber,
                availability: cast.availability,
                langitude: cast.langitude,
                longitude: cast.longitude,
                timeslots: cast.timeslots
            }
        })
    }
}