import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllTimeslot: function getAllTimeslot() {
        return prisma.timeslot.findMany()
    },
    getTimeslot: function getTimeslot(id) {
        return prisma.timeslot.findUnique({
            where: {
                id: id
            }
        })
    },
    addTimeslot: async function addTimeslot(cast) {
        return await prisma.timeslot.create({
            data: {
                branch: { connect: { id: cast.branchId } },
                type: cast.type,
                timeSlot: cast.timeSlot,
                totalSlot: cast.totalSlot
            }
        })
    },
    updateTimeslot: async function updateTimeslot(cast) {
        return await prisma.timeslot.update({
            where: { id: cast.id },
            data: {
                branch: { connect: { id: cast.branchId } },
                type: cast.type,
                timeSlot: cast.timeSlot,
                totalSlot: cast.totalSlot
            }
        })
    }
}