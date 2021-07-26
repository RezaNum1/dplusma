import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Date

    type Pendonor {
        id: Int
        firstName: String!
        lastName: String!
        nik: Int
        phoneNumber: String!
        sex: String!
        bloodType: String!
        placeOfBirth: String
        dateOfBirth: Date
        donorCount: Int
        domisiliProvinsi: String
        domisiliKotKab: String
        domisiliKecamatan: String
        domisiliKelurahan: String
        domisiliAddress: String
        riwayatHamil: Boolean
        riwayatCovid: Boolean
        riwayatKeluhan: Boolean #[String]
        riwayatKomorbid: Boolean #[String]
        riwayatDonor: Boolean #[String]
        riwayatVaksin: Boolean #[String]
        riwayatGejalaKlinis: Boolean #[String]
        hospitalName: String
        pcrPositiveDate: Date
        pcrPositiveImg: String
        pcrNegativeDate: Date
        pcrNegativeImg: String
        activitys: [Activity]
        createdAt: Date
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
        users: [Users]
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

    type Users {
        id: Int
        branchId: Pmi
        name: String
        email: String
        password: String
        role: String
        status: Boolean
        createdAt: Date
    }

    type Query {
        getAllPendonor(id: Int): [Pendonor]
        getAllPmi(id: Int): [Pmi]
        getAllActivity(id: Int): [Activity]
        getAllTimeslot(id: Int): [Timeslot]
        getAllUser(id: Int): [Users]
    }

    type Mutation {
        addPendonor(
            firstName: String,
            lastName: String,
            nik: Int,
            phoneNumber: String,
            sex: String,
            bloodType: String,
            placeOfBirth: String,
            dateOfBirth: Date,
            donorCount: Int,
            domisiliProvinsi: String,
            domisiliKotKab: String,
            domisiliKecamatan: String,
            domisiliKelurahan: String,
            domisiliAddress: String,
            riwayatHamil: Boolean,
            riwayatCovid: Boolean,
            riwayatKeluhan: Boolean,
            riwayatKomorbid: Boolean,
            riwayatDonor: Boolean,
            riwayatVaksin: Boolean,
            riwayatGejalaKlinis: Boolean,
            hospitalName: String,
            pcrPositiveDate: Date,
            pcrPositiveImg: String,
            pcrNegativeDate: Date,
            pcrNegativeImg: String,
            createdAt: Date
        ): [Pendonor]

        addPmi(
            branchName: String,
            branchSize: String,
            branchAddress: String,
            langitude: String,
            longitude: String,
            createdAt: Date
        ): [Pmi]

        addActivity(
            branchId: Int,
            pendonorId: Int,
            donorType: String,
            passForm: Boolean,
            didSchedule: Boolean,
            didInterview: Boolean,
            passInterview: Boolean,
            didBloodTest: Boolean,
            passBloodTest: Boolean,
            didScheduleTest: Boolean,
            didDonor: Boolean,
            passFormShow: Boolean,
            didScheduleShow: Boolean,
            didInterviewShow: Boolean,
            passInterviewShow: Boolean,
            didBloodTestShow: Boolean,
            passBloodTestShow: Boolean,
            didScheduleTestShow: Boolean,
            didDonorShow: Boolean,
            proofImg: String,
            passFormAt: Date,
            didScheduleAt: Date,
            didInterviewAt: Date,
            passInterviewAt: Date,
            didBloodTestAt: Date,
            passBloodTestAt: Date,
            didScheduleTestAt: Date,
            didDonorAt: Date
        ): [Activity]

        addTimeslot(
            branchId: Int,
            type: String,
            timeSlot: String,
            totalSlot: Int,
            createdAt: Date
        ): [Timeslot]

        addUser(
            branchId: Int,
            name: String,
            email: String,
            password: String,
            role: String,
            status: Boolean,
            createdAt: Date
        ): [Users]
    }
`;