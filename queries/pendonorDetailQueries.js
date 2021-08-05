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
            }
        })
    },
    updatePendonorDetail: async function updatePendonorDetail(cast) {
        return await prisma.pendonorDetail.update({
            where: { pendonorId: cast.pendonorId },
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
            }
        })
    }
}