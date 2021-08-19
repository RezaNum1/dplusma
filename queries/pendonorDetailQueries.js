import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllPendonorDetail: function getAllPendonorDetail() {
        return prisma.pendonorDetail.findMany()
    },
    getPendonorDetail: function getPendonorDetail(cast) {
        return prisma.pendonorDetail.findFirst({
            where: {
                pendonorId: cast.pendonorId
            }
        })
    },
    updateLockedData: async function updateLockedData() {
        const today = new Date(new Date() - new Date().getTimezoneOffset() * 60 * 1000)
        const dateOnly = `${today.toISOString().split("T")[0]}`
        const result = await prisma.$queryRaw`
            UPDATE "public"."PendonorDetail"
            SET "pass" = false, "lockPermanent" = false, "unlockDate" = NULL, "testDate" = NULL
            WHERE "unlockDate" = now()::date
            `
        return result // On Progress
        // to_char(createdAt, 'YYYY-MM-DD') LIKE '${dateOnly}%'
    },
    addPendonorDetail: async function addPendonorDetail(cast) {
        return await prisma.pendonorDetail.create({
            data: {
                pendonor: { connect: { id: cast.pendonorId } },
                nik: cast.nik,
                sex: cast.sex,
                bloodType: cast.bloodType,
                placeOfBirth: cast.placeOfBirth,
                dateOfBirth: cast.dateOfBirth,
                donorCount: cast.donorCount,
                domisiliProvinsi: cast.domisiliProvinsi,
                domisiliKotKab: cast.domisiliKotKab,
                domisiliKecamatan: cast.domisiliKecamatan,
                domisiliKelurahan: cast.domisiliKelurahan,
                domisiliAddress: cast.domisiliAddress,
                riwayatHamil: cast.riwayatHamil,
                riwayatCovid: cast.riwayatCovid,
                riwayatTransfusi: cast.riwayatTransfusi,
                riwayatKeluhan: cast.riwayatKeluhan,
                riwayatKomorbid: cast.riwayatKomorbid,
                riwayatDonor: cast.riwayatDonor,
                riwayatVaksin: cast.riwayatVaksin,
                riwayatGejalaKlinis: cast.riwayatGejalaKlinis,
                hospitalName: cast.hospitalName,
                pcrPositiveDate: cast.pcrPositiveDate,
                pcrPositiveImg: cast.pcrPositiveImg,
                pcrNegativeDate: cast.pcrNegativeDate,
                pcrNegativeImg: cast.pcrNegativeImg,
                pass: cast.pass,
                lockPermanent: cast.lockPermanent,
                unlockDate: cast.unlockDate,
                testDate: cast.testDate
            }
        })
    },
    updatePendonorDetail: async function updatePendonorDetail(cast) {
        return await prisma.pendonorDetail.update({
            where: { id: cast.id },
            data: {
                nik: cast.nik,
                sex: cast.sex,
                bloodType: cast.bloodType,
                placeOfBirth: cast.placeOfBirth,
                dateOfBirth: cast.dateOfBirth,
                donorCount: cast.donorCount,
                domisiliProvinsi: cast.domisiliProvinsi,
                domisiliKotKab: cast.domisiliKotKab,
                domisiliKecamatan: cast.domisiliKecamatan,
                domisiliKelurahan: cast.domisiliKelurahan,
                domisiliAddress: cast.domisiliAddress,
                riwayatHamil: cast.riwayatHamil,
                riwayatCovid: cast.riwayatCovid,
                riwayatTransfusi: cast.riwayatTransfusi,
                riwayatKeluhan: cast.riwayatKeluhan,
                riwayatKomorbid: cast.riwayatKomorbid,
                riwayatDonor: cast.riwayatDonor,
                riwayatVaksin: cast.riwayatVaksin,
                riwayatGejalaKlinis: cast.riwayatGejalaKlinis,
                hospitalName: cast.hospitalName,
                pcrPositiveDate: cast.pcrPositiveDate,
                pcrPositiveImg: cast.pcrPositiveImg,
                pcrNegativeDate: cast.pcrNegativeDate,
                pcrNegativeImg: cast.pcrNegativeImg,
                pass: cast.pass,
                lockPermanent: cast.lockPermanent,
                unlockDate: cast.unlockDate,
                testDate: cast.testDate
            }
        })
    }
}