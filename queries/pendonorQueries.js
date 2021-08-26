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
    getPendonorByIdentifier: function getPendonorByIdentifier(identifier) {
        return prisma.pendonor.findFirst({
            where: {
                identifier: identifier
            }
        })
    },
    getAllPendonorByBranch: async function getAllPendonorByBranch(cast) {
        var pendonorResult = []
        const result = await prisma.$queryRaw`
            SELECT P.*
            FROM "public"."Pendonor" P
            INNER JOIN "public"."Activity" A ON A."pendonorId" = P."id"
            WHERE A."branchId" = ${cast.branchId}
            `

        result.map((x) => {
            if (pendonorResult.filter(e => e.id == x.id).length == 0) {
                pendonorResult.push(x)
            }
        })
        return pendonorResult
    },
    addPendonor: async function addPendonor(cast) {
        return await prisma.pendonor.create({
            data: {
                fullName: cast.fullName,
                email: cast.email,
                password: cast.password,
                phoneNumber: cast.phoneNumber,
                occupation: cast.occupation,
                identifier: cast.identifier,
                fcm_token: cast.fcm_token
            }
        })
    },
    addPendonorAndDetail: async function addPendonorAndDetail(cast) {
        return await prisma.pendonor.create({
            data: {
                fullName: cast.fullName,
                email: cast.email,
                password: cast.password,
                phoneNumber: cast.phoneNumber,
                occupation: cast.occupation,
                identifier: cast.identifier,
                fcm_token: cast.fcm_token,
                pendonorDetail: {
                    create: {
                        riwayatCovid: cast.riwayatCovid,
                        riwayatTransfusi: cast.riwayatTransfusi,
                        riwayatHamil: cast.riwayatHamil,
                        riwayatKeluhan: cast.riwayatKeluhan,
                        riwayatDonor: cast.riwayatDonor,
                        riwayatVaksin: cast.riwayatVaksin,
                        riwayatKomorbid: cast.riwayatKomorbid,
                        riwayatGejalaKlinis: cast.riwayatGejalaKlinis,
                        pcrPositiveDate: cast.pcrPositiveDate,
                        pcrNegativeDate: cast.pcrNegativeDate,
                        pass: cast.pass,
                        lockPermanent: cast.lockPermanent,
                        unlockDate: cast.unlockDate,
                        testDate: cast.testDate,
                    }
                }
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
                occupation: cast.occupation,
                identifier: cast.identifier,
                fcm_token: cast.fcm_token,
            }
        })
    }
}