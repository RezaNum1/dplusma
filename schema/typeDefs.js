import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Date
    scalar JSON
    scalar Upload

    type Pendonor {
        id: String
        fullName: String!
        phoneNumber: String!
        email: String!
        password: String!
        occupation: String!
        identifier: String
        fcm_token: String
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
        pass: Boolean
        lockPermanent: Boolean
        unlockDate: Date
        testDate: Date
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
        queue: String
        slot: String
        passForm: Boolean
        didSchedule: Boolean
        didInterview: Boolean
        passInterview: Boolean
        didBloodTest: Boolean
        passBloodTest: Boolean
        didScheduleTest: Boolean
        didDonor: Boolean
        processState: Boolean
        setReminder: Boolean
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
        adminPmis: [AdminPmi!]!
        jadwals: [Jadwal!]!
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
        dayInt: Int
        open: Boolean
        editable: Boolean
        timeslot: JSON
    }

    type Object {
        url:String!
        key:String!
    }

    type Response {
        success:Boolean!
        message:String!
    }

    type Query {
        getAllPendonor: [Pendonor]
        getPendonor(id: String): Pendonor
        getPendonorByIdentifier(identifier: String): Pendonor
        getAllPendonorByBranch(branchId: String): [Pendonor]

        getAllPendonorDetail: [PendonorDetail]
        getPendonorDetail(pendonorId: String): PendonorDetail
        updateLockedData: [PendonorDetail]

        getAllPmi: [Pmi]
        getPmi(id: String): Pmi

        getAllActivity: [Activity]
        getActivity(pendonorId: String): Activity
        getActivityForInterview(branchId: String): [Activity]
        getActivityForBloodTest(branchId: String): [Activity]
        getActivityForDonor(branchId: String): [Activity]

        getAllAdminPmi: [AdminPmi]
        getAdminPmiById(id: String): AdminPmi
        getAdminPmiByBranch(branchId: String): [AdminPmi]
        getAdminPmiByIdAndBranch(id: String, branchId: String): AdminPmi
        login(email: String, password: String): AdminPmi

        getAllJadwal: [Jadwal]
        getJadwalById(id: String): Jadwal

        fetchBuckets:[String!]!
        fetchObjects(bucketName:String):[Object!]!
    }

    type Mutation {
        #Pendonor
        addPendonor(
            fullName: String, 
            phoneNumber: String!, 
            email: String!, 
            password: String!, 
            occupation: String, 
            identifier: String,
            fcm_token: String,
            createdAt:  Date, 
            updatedAt:  Date
        ): Pendonor

        addPendonorAndDetail(
            fullName: String, 
            phoneNumber: String!, 
            email: String!, 
            password: String!, 
            occupation: String, 
            identifier: String,
            fcm_token: String,
            createdAt:  Date, 
            updatedAt:  Date, 
            riwayatCovid: Boolean, 
            riwayatTransfusi: Boolean, 
            riwayatHamil: Boolean, 
            riwayatKeluhan: String, 
            riwayatDonor: String, 
            riwayatVaksin: String, 
            riwayatKomorbid: String
            riwayatGejalaKlinis: String, 
            pcrPositiveDate: Date, 
            pcrNegativeDate: Date, 
            pass: Boolean, 
            lockPermanent: Boolean, 
            unlockDate: Date, 
            testDate: Date
        ): Pendonor

        updatePendonor(
            id: String, 
            fullName: String, 
            phoneNumber: String, 
            email: String, 
            occupation: String, 
            identifier: String,
            fcm_token: String
        ): Pendonor

        #PendonorDetail
        addPendonorDetail(
            pendonorId: String, 
            nik: String, 
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
            riwayatTransfusi: Boolean,
            riwayatKeluhan: String, 
            riwayatKomorbid: String, 
            riwayatDonor: String, 
            riwayatVaksin: String, 
            riwayatGejalaKlinis: String, 
            hospitalName: String,
            pcrPositiveDate: Date, 
            pcrPositiveImg: String, 
            pcrNegativeDate: Date, 
            pcrNegativeImg: String, 
            pass: Boolean, 
            lockPermanent: Boolean, 
            unlockDate: Date, 
            testDate: Date
        ): PendonorDetail

        updatePendonorDetail(
            id: String, 
            pendonorId: String, 
            nik: String, 
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
            riwayatTransfusi: Boolean,
            riwayatKeluhan: String, 
            riwayatKomorbid: String, 
            riwayatDonor: String, 
            riwayatVaksin: String, 
            riwayatGejalaKlinis: String, 
            hospitalName: String,
            pcrPositiveDate: Date, 
            pcrPositiveImg: String, 
            pcrNegativeDate: Date, 
            pcrNegativeImg: String, 
            pass: Boolean, 
            lockPermanent: Boolean, 
            unlockDate: Date, 
            testDate: Date
        ): PendonorDetail

        #Pmi
        addPmi(
            branchName: String, 
            branchSize: String, 
            branchAddress: String, 
            phoneNumber: String, 
            availability: String, 
            langitude: String, 
            longitude: String, 
            createdAt: Date
        ): Pmi

        updatePmi(
            id: String, 
            branchName: String, 
            branchSize: String, 
            branchAddress: String, 
            phoneNumber: String, 
            availability: String, 
            langitude: String, 
            longitude: String
        ): Pmi

        #Activity        
        addActivity(
            branchId: String, 
            pendonorId: String, 
            donorType: String, 
            interviewNotes: String, 
            antibodyLevel: String, 
            queue: String, 
            slot: String,
            passForm: Boolean,
            didSchedule: Boolean, 
            didInterview: Boolean,
            passInterview: Boolean,
            didBloodTest: Boolean,
            passBloodTest: Boolean,
            didScheduleTest: Boolean, 
            didDonor: Boolean, 
            processState: Boolean,
            setReminder: Boolean,
            proofImg: String,
            passFormAt: Date,
            didScheduleAt: Date,
            didInterviewAt: Date, 
            passInterviewAt: Date,
            didBloodTestAt: Date,
            passBloodTestAt: Date,
            didScheduleTestAt: Date,
            didDonorAt: Date
        ): Activity

        updateActivity(
            id: String, 
            donorType: String, 
            interviewNotes: String, 
            antibodyLevel: String, 
            queue: String, 
            slot: String, 
            passForm: Boolean,
            didSchedule: Boolean,
            didInterview: Boolean,
            passInterview: Boolean,
            didBloodTest: Boolean,
            passBloodTest: Boolean,
            didScheduleTest: Boolean,
            didDonor: Boolean, 
            processState: Boolean,
            setReminder: Boolean,
            proofImg: String, 
            passFormAt: Date, 
            didScheduleAt: Date,
            didInterviewAt: Date,
            passInterviewAt: Date,
            didBloodTestAt: Date,
            passBloodTestAt: Date, 
            didScheduleTestAt: Date,
            didDonorAt: Date
        ): Activity

        updateScheduleStatus(
            id: String, 
            didSchedule: Boolean
        ): Activity

        updateReminder(
            id: String,
            setReminder: Boolean
        ): Activity

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
            dayInt: Int
            open: Boolean,
            editable: Boolean,
            timeslot: JSON
        ): Jadwal

        updateJadwals(
            id: String,
            day: String,
            dayInt: Int
            open: Boolean,
            editable: Boolean,
            timeslot: JSON
        ): Jadwal

        #S3
        createBucket(bucketName:String!) : Response
        uploadObject(file:Upload!,fileName: String!, bucketName:String!) : Object
        uploadObjects(files:[Upload!]!,fileNames:String!,bucketName:String!) : [Object!]!
        deleteObject(bucketName:String!,key:String!) : Response
        deleteObjects(bucketName:String!,objectKeys:[String!]!) : Response
        deleteBucket(bucketName:String!) : Response
    }
`;