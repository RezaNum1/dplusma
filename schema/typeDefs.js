import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Date

    type Pendonor {
        id: Int
        fullName: String!
        phoneNumber: String!
        email: String!
        password: String!
        pendonorDetail: PendonorDetail
        activity: [Activity]
        createdAt:  Date
        updatedAt:  Date
    }

    type PendonorDetail {
        id: Int
        pendonorId: Pendonor
        nik: String
        sex: String
        bloodType: String
        placeOfBirth: String
        dateOfBirth: String
        donorCount: Int
        domisiliProvinsi: String
        domisiliKotKab: String
        domisiliKecamatan: String
        domisiliKelurahan: String
        domisiliAddress: String
        riwayatHamil: Boolean
        riwayatCovid: Boolean
        riwayatKeluhan: String
        riwayatKomorbid: String
        riwayatDonor: String
        riwayatVaksin: String
        riwayatGejalaKlinis: String
        hospitalName: String
        pcrPositiveDate: String
        pcrPositiveImg: String
        pcrNegativeDate: String
        pcrNegativeImg: String
        createdAt: Date
        updatedAt: Date
    }

    type Activity {
        id: Int
        branchId: Pmi
        pendonorId: Pendonor
        donorType: String
        passForm: Boolean
        didSchedule: Boolean
        didInterview: Boolean
        passInterview: Boolean
        didBloodTest: Boolean
        passBloodTest: Boolean
        didScheduleTest: Boolean
        didDonor: Boolean
        passFormShow: Boolean
        didScheduleShow: Boolean
        didInterviewShow: Boolean
        passInterviewShow: Boolean
        didBloodTestShow: Boolean
        passBloodTestShow: Boolean
        didScheduleTestShow: Boolean
        didDonorShow: Boolean
        proofImg: String
        passFormAt: Date
        didScheduleAt: Date
        didInterviewAt: Date
        passInterviewAt: Date
        didBloodTestAt: Date
        passBloodTestAt: Date
        didScheduleTestAt: Date
        didDonorAt: Date
    }

    type Pmi {
        id: Int
        branchName: String
        branchSize: String
        branchAddress: String
        langitude: String
        longitude: String
        activitys: [Activity]
        timeslots: [Timeslot]
        adminPmi: [AdminPmi]
        createdAt: Date
    }

    type Timeslot {
        id: Int
        branchId: Pmi
        type: String
        timeSlot: String
        totalSlot: Int
        createdAt: Date
    }

    type AdminPmi {
        id: Int
        branchId: Pmi
        fullname: String
        email: String
        password: String
        role: String
        status: Boolean
        createdAt: Date
    }

    type Query {
        getAllPendonor(id: Int): [Pendonor]
        getPendonor(id: Int): Pendonor

        getAllPendonorDetail(id: Int): [PendonorDetail]
        getPendonorDetail(id: Int): PendonorDetail

        getAllPmi(id: Int): [Pmi]
        getPmi(id: Int): Pmi

        getAllActivity(id: Int): [Activity]
        getActivity(id: Int): Activity

        getAllTimeslot(id: Int): [Timeslot]
        getTimeslot(id: Int): Timeslot

        getAllAdminPmi(id: Int): [AdminPmi]
        getAdminPmi(id: Int): AdminPmi
    }

    type Mutation {
        #Pendonor
        addPendonor(fullName: String, phoneNumber: String!, email: String!, password: String!, createdAt:  Date, updatedAt:  Date): Pendonor
        updatePendonor(id: Int, fullName: String, phoneNumber: String, email: String): Pendonor

        #PendonorDetail
        addPendonorDetail(pendonorId: Int, nik: String, sex: String, bloodType: String, placeOfBirth: String, dateOfBirth: String, donorCount: Int, domisiliProvinsi: String, 
                        domisiliKotKab: String, domisiliKecamatan: String, domisiliKelurahan: String, domisiliAddress: String, riwayatHamil: Boolean, riwayatCovid: Boolean, 
                        riwayatKeluhan: String, riwayatKomorbid: String, riwayatDonor: String, riwayatVaksin: String, riwayatGejalaKlinis: String, hospitalName: String,
                        pcrPositiveDate: String, pcrPositiveImg: String, pcrNegativeDate: String, pcrNegativeImg: String
        ): PendonorDetail
        updatePendonorDetail(pendonorId: Int, nik: Int, sex: String, bloodType: String, placeOfBirth: String, dateOfBirth: Date, donorCount: Int, domisiliProvinsi: String, 
                        domisiliKotKab: String, domisiliKecamatan: String, domisiliKelurahan: String, domisiliAddress: String, riwayatHamil: Boolean, riwayatCovid: Boolean, 
                        riwayatKeluhan: String, riwayatKomorbid: String, riwayatDonor: String, riwayatVaksin: String, riwayatGejalaKlinis: String, hospitalName: String,
                        pcrPositiveDate: Date, pcrPositiveImg: String, pcrNegativeDate: Date, pcrNegativeImg: String
        ): PendonorDetail

        #Pmi
        addPmi(branchName: String, branchSize: String, branchAddress: String, langitude: String, longitude: String, createdAt: Date): Pmi
        updatePmi(id: Int!, branchName: String, branchSize: String, branchAddress: String, langitude: String, longitude: String): Pmi

        #Activity
        addActivity(branchId: Int, pendonorId: Int, donorType: String,passForm: Boolean,didSchedule: Boolean,didInterview: Boolean,passInterview: Boolean,didBloodTest: Boolean,
                    passBloodTest: Boolean,didScheduleTest: Boolean,didDonor: Boolean,passFormShow: Boolean,didScheduleShow: Boolean,didInterviewShow: Boolean,passInterviewShow: Boolean,
                    didBloodTestShow: Boolean,passBloodTestShow: Boolean,didScheduleTestShow: Boolean,didDonorShow: Boolean,proofImg: String,passFormAt: Date,didScheduleAt: Date,
                    didInterviewAt: Date,passInterviewAt: Date,didBloodTestAt: Date,passBloodTestAt: Date,didScheduleTestAt: Date,didDonorAt: Date
        ): Activity

        updateActivity(id: Int, branchId: Int, pendonorId: Int,donorType: String,passForm: Boolean,didSchedule: Boolean,didInterview: Boolean,passInterview: Boolean,didBloodTest: Boolean,
                    passBloodTest: Boolean,didScheduleTest: Boolean,didDonor: Boolean,passFormShow: Boolean,didScheduleShow: Boolean,didInterviewShow: Boolean,passInterviewShow: Boolean,
                    didBloodTestShow: Boolean,passBloodTestShow: Boolean,didScheduleTestShow: Boolean,didDonorShow: Boolean,proofImg: String,passFormAt: Date,didScheduleAt: Date,
                    didInterviewAt: Date,passInterviewAt: Date,didBloodTestAt: Date,passBloodTestAt: Date,didScheduleTestAt: Date,didDonorAt: Date
        ): Activity

        #Timeslot
        addTimeslot(
            branchId: Int,
            type: String,
            timeSlot: String,
            totalSlot: Int,
            createdAt: Date
        ): Timeslot

        updateTimeslot(
            id: Int
            branchId: Int,
            type: String,
            timeSlot: String,
            totalSlot: Int,
            createdAt: Date
        ): Timeslot

        #AdminPmi
        addAdminPmi(
            branchId: Int,
            fullname: String,
            email: String,
            password: String,
            role: String,
            status: Boolean,
        ): AdminPmi

        updateAdminPmi(
            id: Int
            branchId: Int,
            fullname: String,
            email: String,
            password: String,
            role: String,
            status: Boolean
        ): AdminPmi
    }
`;