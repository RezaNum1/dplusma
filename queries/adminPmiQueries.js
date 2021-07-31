import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllAdminPmi: function getAllAdminPmi() {
        return prisma.adminPmi.findMany()
    },
    getAdminPmiById: function getAdminPmiById(cast) {
        const data = prisma.adminPmi.findUnique({
            where: {
                id: cast.id
            }
        })

        return data
    },
    getAdminPmiByBranch: function getAdminPmiByBranch(cast) {
        const data = prisma.adminPmi.findMany({
            where: {
                branchId: cast.branchId
            }
        })

        return data
    },
    getAdminPmiByIdAndBranch: function getAdminPmiByIdAndBranch(cast){
        const data = prisma.adminPmi.findFirst({
            where: {
                id: cast.id,
                branchId: cast.branchId
            }
        })

        return data
    },
    addAdminPmi: async function addAdminPmi(cast) {
        return await prisma.adminPmi.create({
            data: {
                branch: { connect: { id: cast.branchId } },
                fullname: cast.fullname,
                email: cast.email,
                password: cast.password,
                role: cast.role,
                status: cast.status
            }
        })
    },
    updateAdminPmi: async function updateAdminPmi(cast) {
        return await prisma.adminPmi.update({
            where: {
                id: cast.id
            },
            data: {
                branch: { connect: { id: cast.branchId } },
                fullname: cast.fullname,
                email: cast.email,
                password: cast.password,
                role: cast.role,
                status: cast.status
            }
        })
    }
}