import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Date

    type Pendonor {
        id: String
        fullName: String!
        phoneNumber: String!
        email: String!
        password: String!
        pendonorDetails: PendonorDetail
        activitys: [Activity!]!
        createdAt:  Date
        updatedAt:  Date
    }

    type PendonorDetail {
        id: String
        pendonor: Pendonor
        pendonorId: String
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
        id: String
        branch: Pmi!
        branchId: String!
        pendonor: Pendonor
        pendonorId: String!
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
        id: String
        branchName: String
        branchSize: String
        branchAddress: String
        langitude: String
        longitude: String
        activitys: [Activity!]!
        timeslots: [Timeslot!]!
        adminPmis: [AdminPmi!]!
        createdAt: Date
    }

    type Timeslot {
        id: String
        branch: Pmi!
        branchId: String!
        type: String
        timeSlot: String
        totalSlot: Int
        createdAt: Date
    }

    type AdminPmi {
        id: String
        branch: Pmi!
        branchId: String!
        fullname: String
        email: String
        password: String
        role: String
        status: Boolean
        createdAt: Date
    }

    type Query {
        getAllPendonor: [Pendonor]
        getPendonor(id: String): Pendonor

        getAllPendonorDetail: [PendonorDetail]
        getPendonorDetail(pendonorId: String): PendonorDetail

        getAllPmi: [Pmi]
        getPmi(id: String): Pmi

        getAllActivity: [Activity]
        getActivity(pendonorId: String): Activity

        getAllTimeslot: [Timeslot]
        getTimeslot(id: String): Timeslot

        getAllAdminPmi: [AdminPmi]
        getAdminPmi(id: String): AdminPmi
    }

    type Mutation {
        #Pendonor
        addPendonor(fullName: String, phoneNumber: String!, email: String!, password: String!, createdAt:  Date, updatedAt:  Date): Pendonor
        updatePendonor(id: String, fullName: String, phoneNumber: String, email: String): Pendonor

        #PendonorDetail
        addPendonorDetail(pendonorId: String, nik: String, sex: String, bloodType: String, placeOfBirth: String, dateOfBirth: String, donorCount: Int, domisiliProvinsi: String, 
                        domisiliKotKab: String, domisiliKecamatan: String, domisiliKelurahan: String, domisiliAddress: String, riwayatHamil: Boolean, riwayatCovid: Boolean, 
                        riwayatKeluhan: String, riwayatKomorbid: String, riwayatDonor: String, riwayatVaksin: String, riwayatGejalaKlinis: String, hospitalName: String,
                        pcrPositiveDate: String, pcrPositiveImg: String, pcrNegativeDate: String, pcrNegativeImg: String
        ): PendonorDetail
        updatePendonorDetail(pendonorId: String, nik: String, sex: String, bloodType: String, placeOfBirth: String, dateOfBirth: Date, donorCount: Int, domisiliProvinsi: String, 
                        domisiliKotKab: String, domisiliKecamatan: String, domisiliKelurahan: String, domisiliAddress: String, riwayatHamil: Boolean, riwayatCovid: Boolean, 
                        riwayatKeluhan: String, riwayatKomorbid: String, riwayatDonor: String, riwayatVaksin: String, riwayatGejalaKlinis: String, hospitalName: String,
                        pcrPositiveDate: Date, pcrPositiveImg: String, pcrNegativeDate: Date, pcrNegativeImg: String
        ): PendonorDetail

        #Pmi
        addPmi(branchName: String, branchSize: String, branchAddress: String, langitude: String, longitude: String, createdAt: Date): Pmi
        updatePmi(id: String, branchName: String, branchSize: String, branchAddress: String, langitude: String, longitude: String): Pmi

        #Activity
        addActivity(branchId: String, pendonorId: String, donorType: String,passForm: Boolean,didSchedule: Boolean,didInterview: Boolean,passInterview: Boolean,didBloodTest: Boolean,
                    passBloodTest: Boolean,didScheduleTest: Boolean,didDonor: Boolean,passFormShow: Boolean,didScheduleShow: Boolean,didInterviewShow: Boolean,passInterviewShow: Boolean,
                    didBloodTestShow: Boolean,passBloodTestShow: Boolean,didScheduleTestShow: Boolean,didDonorShow: Boolean,proofImg: String,passFormAt: Date,didScheduleAt: Date,
                    didInterviewAt: Date,passInterviewAt: Date,didBloodTestAt: Date,passBloodTestAt: Date,didScheduleTestAt: Date,didDonorAt: Date
        ): Activity

        updateActivity(id: String, branchId: String, pendonorId: Int,donorType: String,passForm: Boolean,didSchedule: Boolean,didInterview: Boolean,passInterview: Boolean,didBloodTest: Boolean,
                    passBloodTest: Boolean,didScheduleTest: Boolean,didDonor: Boolean,passFormShow: Boolean,didScheduleShow: Boolean,didInterviewShow: Boolean,passInterviewShow: Boolean,
                    didBloodTestShow: Boolean,passBloodTestShow: Boolean,didScheduleTestShow: Boolean,didDonorShow: Boolean,proofImg: String,passFormAt: Date,didScheduleAt: Date,
                    didInterviewAt: Date,passInterviewAt: Date,didBloodTestAt: Date,passBloodTestAt: Date,didScheduleTestAt: Date,didDonorAt: Date
        ): Activity

        #Timeslot
        addTimeslot(
            branchId: String,
            type: String,
            timeSlot: String,
            totalSlot: Int,
            createdAt: Date
        ): Timeslot

        updateTimeslot(
            id: String
            branchId: String,
            type: String,
            timeSlot: String,
            totalSlot: Int,
            createdAt: Date
        ): Timeslot

        #AdminPmi
        addAdminPmi(
            branchId: String,
            fullname: String,
            email: String,
            password: String,
            role: String,
            status: Boolean,
        ): AdminPmi

        updateAdminPmi(
            id: String
            branchId: String,
            fullname: String,
            email: String,
            password: String,
            role: String,
            status: Boolean
        ): AdminPmi
    }
`;