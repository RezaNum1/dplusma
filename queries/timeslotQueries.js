import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllTimeslot: function getAllTimeslot() {
        return prisma.timeslot.findMany()
    },
    getTimeslotById: function getTimeslotById(cast) {
        return prisma.timeslot.findUnique({
            where: {
                id: cast.id
            }
        })
    },
    getTimeslotByBranch: function getTimeslotByBranch(cast) {
        return prisma.timeslot.findMany({
            where: {
                branchId: cast.branchId
            }
        })
    },
    getTimeslotByIdAndBranch: function getTimeslotByIdAndBranch(cast) {
        return prisma.timeslot.findFirst({
            where: {
                id: cast.id,
                branchId: cast.branchId
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