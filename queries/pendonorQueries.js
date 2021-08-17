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
    addPendonor: async function addPendonor(cast) {
        return await prisma.pendonor.create({
            data: {
                fullName: cast.fullName,
                email: cast.email,
                password: cast.password,
                phoneNumber: cast.phoneNumber,
                occupation: cast.occupation,
                identifier: cast.identifier
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
                identifier: cast.identifier
            }
        })
    }
}

//     riwayatCovid
// riwayatTransfusi
//  riwayatHamil
// riwayatKeluhan
// riwayatDonor
// riwayatVaksin
//  riwayatKomorbid
// riwayatGejalaKlinis
//  pcrPositiveDate
// pcrNegativeDate 
// pass
// lockPermanent
// unlockDateUntil
// testDate