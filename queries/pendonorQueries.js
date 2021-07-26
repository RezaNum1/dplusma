import { knex } from "../connection/dbConnection";

module.exports = {
    getAllPendonor: function getAllPendonor() {
        return knex('pendonor')
        .select('*')
    },
    addPendonor: function addPendonor(cast) {
        return knex("pendonor")
                .insert({
                    firstName: cast.firstName,
                    lastName: cast.lastName,
                    nik: cast.nik,
                    phoneNumber: cast.phoneNumber,
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
                    createdAt: knex.fn.now()
                })
                .returning('*');
    }
}