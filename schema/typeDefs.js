import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Date
    scalar JSON

    type Pendonor {
        id: String
        fullName: String!
        phoneNumber: String!
        email: String!
        password: String!
        occupation: String!
        identifier: String
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
        dateOfBirth: Date
        donorCount: Int
        domisiliProvinsi: String
        domisiliKotKab: String
        domisiliKecamatan: String
        domisiliKelurahan: String
        domisiliAddress: String
        riwayatHamil: Boolean
        riwayatCovid: Boolean
        riwayatTransfusi: Boolean
        riwayatKeluhan: String
        riwayatKomorbid: String
        riwayatDonor: String
        riwayatVaksin: String
        riwayatGejalaKlinis: String
        hospitalName: String
        pcrPositiveDate: Date
        pcrPositiveImg: String
        pcrNegativeDate: Date
        pcrNegativeImg: String
        createdAt: Date
        updatedAt: Date
    }

    type Activity {
        id: String
        branch: Pmi
        branchId: String
        pendonor: Pendonor
        pendonorId: String
        donorType: String
        interviewNotes: String
        antibodyLevel:  String
        passForm: Boolean
        didSchedule: Boolean
        didInterview: Boolean
        passInterview: Boolean
        didBloodTest: Boolean
        passBloodTest: Boolean
        didScheduleTest: Boolean
        didDonor: Boolean
        processState: Boolean
        proofImg: String
        passFormAt: Date
        didScheduleAt: Date
        didInterviewAt: Date
        passInterviewAt: Date
        didBloodTestAt: Date
        passBloodTestAt: Date
        didScheduleTestAt: Date
        didDonorAt: Date
        createdAt: Date
        updatedAt: Date
    }
    
    type Pmi {
        id: String
        branchName: String
        branchSize: String
        branchAddress: String
        phoneNumber: String
        availability: String
        langitude: String
        longitude: String
        activitys: [Activity!]!
        timeslots: [Timeslot!]!
        adminPmis: [AdminPmi!]!
        jadwals: [Jadwal!]!
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

    type Jadwal {
        id: String
        branch: Pmi!
        branchId: String!
        day: String
        open: Boolean
        editable: Boolean
        timeslot: JSON
    }

    type Query {
        getAllPendonor: [Pendonor]
        getPendonor(id: String): Pendonor
        getPendonorByIdentifier(identifier: String): Pendonor

        getAllPendonorDetail: [PendonorDetail]
        getPendonorDetail(pendonorId: String): PendonorDetail

        getAllPmi: [Pmi]
        getPmi(id: String): Pmi

        getAllActivity: [Activity]
        getActivity(pendonorId: String): Activity
        getActivityForInterview: [Activity]
        getActivityForBloodTest: [Activity]
        getActivityForDonor: [Activity]

        getAllTimeslot: [Timeslot]
        getTimeslotById(id: String): Timeslot
        getTimeslotByBranch(branchId: String): [Timeslot]
        getTimeslotByIdAndBranch(id: String, branchId: String): Timeslot

        getAllAdminPmi: [AdminPmi]
        getAdminPmiById(id: String): AdminPmi
        getAdminPmiByBranch(branchId: String): [AdminPmi]
        getAdminPmiByIdAndBranch(id: String, branchId: String): AdminPmi

        getAllJadwal: [Jadwal]
    }

    type Mutation {
        #Pendonor
        addPendonor(fullName: String, phoneNumber: String!, email: String!, password: String!, occupation: String, identifier: String, createdAt:  Date, updatedAt:  Date): Pendonor
        updatePendonor(id: String, fullName: String, phoneNumber: String, email: String, occupation: String, identifier: String): Pendonor

        #PendonorDetail
        addPendonorDetail(pendonorId: String, nik: String, sex: String, bloodType: String, placeOfBirth: String, dateOfBirth: Date, donorCount: Int, domisiliProvinsi: String, 
                        domisiliKotKab: String, domisiliKecamatan: String, domisiliKelurahan: String, domisiliAddress: String, riwayatHamil: Boolean, riwayatCovid: Boolean, riwayatTransfusi: Boolean,
                        riwayatKeluhan: String, riwayatKomorbid: String, riwayatDonor: String, riwayatVaksin: String, riwayatGejalaKlinis: String, hospitalName: String,
                        pcrPositiveDate: Date, pcrPositiveImg: String, pcrNegativeDate: Date, pcrNegativeImg: String
        ): PendonorDetail
        updatePendonorDetail(id: String, pendonorId: String, nik: String, sex: String, bloodType: String, placeOfBirth: String, dateOfBirth: Date, donorCount: Int, domisiliProvinsi: String, 
                        domisiliKotKab: String, domisiliKecamatan: String, domisiliKelurahan: String, domisiliAddress: String, riwayatHamil: Boolean, riwayatCovid: Boolean, riwayatTransfusi: Boolean,
                        riwayatKeluhan: String, riwayatKomorbid: String, riwayatDonor: String, riwayatVaksin: String, riwayatGejalaKlinis: String, hospitalName: String,
                        pcrPositiveDate: Date, pcrPositiveImg: String, pcrNegativeDate: Date, pcrNegativeImg: String
        ): PendonorDetail

        #Pmi
        addPmi(branchName: String, branchSize: String, branchAddress: String, phoneNumber: String, availability: String, langitude: String, longitude: String, createdAt: Date): Pmi
        updatePmi(id: String, branchName: String, branchSize: String, branchAddress: String, phoneNumber: String, availability: String, langitude: String, longitude: String): Pmi

        #Activity        
        addActivity(branchId: String, pendonorId: String, donorType: String, interviewNotes: String, antibodyLevel: String,
                    passForm: Boolean,didSchedule: Boolean, didInterview: Boolean,passInterview: Boolean,didBloodTest: Boolean,
                    passBloodTest: Boolean,didScheduleTest: Boolean, didDonor: Boolean, processState: Boolean, passFormShow: Boolean,didScheduleShow: Boolean,didInterviewShow: Boolean,passInterviewShow: Boolean,
                    didBloodTestShow: Boolean,passBloodTestShow: Boolean,didScheduleTestShow: Boolean,didDonorShow: Boolean,proofImg: String,passFormAt: Date,didScheduleAt: Date,
                    didInterviewAt: Date, passInterviewAt: Date,didBloodTestAt: Date,passBloodTestAt: Date,didScheduleTestAt: Date,didDonorAt: Date
        ): Activity

        updateActivity(id: String, donorType: String, interviewNotes: String, antibodyLevel: String, passForm: Boolean,didSchedule: Boolean,didInterview: Boolean,passInterview: Boolean,didBloodTest: Boolean,
                    passBloodTest: Boolean,didScheduleTest: Boolean,didDonor: Boolean, processState: Boolean, passFormShow: Boolean,didScheduleShow: Boolean,didInterviewShow: Boolean,passInterviewShow: Boolean,
                    didBloodTestShow: Boolean,passBloodTestShow: Boolean,didScheduleTestShow: Boolean,didDonorShow: Boolean,proofImg: String, passFormAt: Date, didScheduleAt: Date,
                    didInterviewAt: Date,passInterviewAt: Date,didBloodTestAt: Date,passBloodTestAt: Date, didScheduleTestAt: Date,didDonorAt: Date
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
            fullname: String,
            email: String,
            password: String,
            role: String,
            status: Boolean
        ): AdminPmi

        #Jadwal
        addJadwal(
            branchId: String,
            day: String,
            open: Boolean,
            editable: Boolean,
            timeslot: JSON
        ): Jadwal
    }
`;