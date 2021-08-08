import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllJadwal: function getAllJadwal() {
        return prisma.jadwal.findMany()
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
    }
}