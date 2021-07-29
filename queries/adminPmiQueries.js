import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllAdminPmi: function getAllAdminPmi() {
        return prisma.adminPmi.findMany()
    },
    getAdminPmi: function getAdminPmi(id) {
        return prisma.adminPmi.findUnique({
            where: {
                id: id
            }
        })
    },
    addAdminPmi: async function addAdminPmi(cast) {
        return await prisma.adminPmi.create({
            data: {
                branchId: cast.branchId,
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
                branchId: cast.branchId,
                fullname: cast.fullname,
                email: cast.email,
                password: cast.password,
                role: cast.role,
                status: cast.status
            }
        })
    }
}