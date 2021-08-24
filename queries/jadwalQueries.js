import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllJadwal: function getAllJadwal() {
        return prisma.jadwal.findMany()
    },
    getJadwalById: function getJadwalById(cast) {
        return prisma.jadwal.findFirst({
            where: {
                id: cast.id
            }
        })
    },
    addJadwal: async function addJadwal(cast) {
        return await prisma.jadwal.create({
            data: {
                branch: { connect: { id: cast.branchId } },
                day: cast.day,
                open: cast.open,
                editable: cast.editable,
                timeslot: cast.timeslot
            }
        })
    },
    updateJadwals: async function updateJadwals(cast) {
        return await prisma.jadwal.update({
            where: {
                id: cast.id
            },
            data: {
                day: cast.day,
                editable: cast.editable,
                open: cast.open,
                timeslot: cast.timeslot
            }
        })
    }
}