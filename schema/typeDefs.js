import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  scalar CustomDateTime
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
    pendonorDetails: PendonorDetail
    activitys: [Activity!]!
    createdAt: CustomDateTime
    updatedAt: CustomDateTime
  }

  type PendonorDetail {
    id: String
    pendonor: Pendonor
    pendonorId: String
    nik: String
    sex: String
    bloodType: String
    placeOfBirth: String
    dateOfBirth: CustomDateTime
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
    pcrPositiveDate: CustomDateTime
    pcrPositiveImg: String
    pcrNegativeDate: CustomDateTime
    pcrNegativeImg: String
    pass: Boolean
    lockPermanent: Boolean
    unlockDate: CustomDateTime
    testDate: CustomDateTime
    createdAt: CustomDateTime
    updatedAt: CustomDateTime
  }

  type Activity {
    id: String
    branch: Pmi
    branchId: String
    pendonor: Pendonor
    pendonorId: String
    donorType: String
    interviewNotes: String
    antibodyLevel: String
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
    proofImg: String
    passFormAt: CustomDateTime
    didScheduleAt: CustomDateTime
    didInterviewAt: CustomDateTime
    passInterviewAt: CustomDateTime
    didBloodTestAt: CustomDateTime
    passBloodTestAt: CustomDateTime
    didScheduleTestAt: CustomDateTime
    didDonorAt: CustomDateTime
    createdAt: CustomDateTime
    updatedAt: CustomDateTime
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
    createdAt: CustomDateTime
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
    createdAt: CustomDateTime
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
    url: String!
    key: String!
  }

  type Response {
    success: Boolean!
    message: String!
  }

  type TotalQueue {
    count: Int
  }

  type Query {
    getAllPendonor: [Pendonor]
    getPendonor(id: String): Pendonor
    getPendonorByIdentifier(identifier: String): Pendonor

    getAllPendonorDetail: [PendonorDetail]
    getPendonorDetail(pendonorId: String): PendonorDetail
    updateLockedData: [PendonorDetail]

    getAllPmi: [Pmi]
    getPmi(id: String): Pmi

    getAllActivity: [Activity]
    getActivity(pendonorId: String): Activity
    getActivityForInterview: [Activity]
    getActivityForBloodTest: [Activity]
    getActivityForDonor: [Activity]

    getAllAdminPmi: [AdminPmi]
    getAdminPmiById(id: String): AdminPmi
    getAdminPmiByBranch(branchId: String): [AdminPmi]
    getAdminPmiByIdAndBranch(id: String, branchId: String): AdminPmi

    getAllJadwal: [Jadwal]
    getJadwalById(id: String): Jadwal

    fetchBuckets: [String!]!
    fetchObjects(bucketName: String): [Object!]!
  }

  type Mutation {
    #Pendonor
    addPendonor(
      fullName: String
      phoneNumber: String!
      email: String!
      password: String!
      occupation: String
      identifier: String
      createdAt: CustomDateTime
      updatedAt: CustomDateTime
    ): Pendonor
    addPendonorAndDetail(
      fullName: String
      phoneNumber: String!
      email: String!
      password: String!
      occupation: String
      identifier: String
      createdAt: CustomDateTime
      updatedAt: CustomDateTime
      riwayatCovid: Boolean
      riwayatTransfusi: Boolean
      riwayatHamil: Boolean
      riwayatKeluhan: String
      riwayatDonor: String
      riwayatVaksin: String
      riwayatKomorbid: String
      riwayatGejalaKlinis: String
      pcrPositiveDate: CustomDateTime
      pcrNegativeDate: CustomDateTime
      pass: Boolean
      lockPermanent: Boolean
      unlockDate: CustomDateTime
      testDate: CustomDateTime
    ): Pendonor
    updatePendonor(
      id: String
      fullName: String
      phoneNumber: String
      email: String
      occupation: String
      identifier: String
    ): Pendonor

    #PendonorDetail
    addPendonorDetail(
      pendonorId: String
      nik: String
      sex: String
      bloodType: String
      placeOfBirth: String
      dateOfBirth: CustomDateTime
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
      pcrPositiveDate: CustomDateTime
      pcrPositiveImg: String
      pcrNegativeDate: CustomDateTime
      pcrNegativeImg: String
      pass: Boolean
      lockPermanent: Boolean
      unlockDate: CustomDateTime
      testDate: CustomDateTime
    ): PendonorDetail
    updatePendonorDetail(
      id: String
      pendonorId: String
      nik: String
      sex: String
      bloodType: String
      placeOfBirth: String
      dateOfBirth: CustomDateTime
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
      pcrPositiveDate: CustomDateTime
      pcrPositiveImg: String
      pcrNegativeDate: CustomDateTime
      pcrNegativeImg: String
      pass: Boolean
      lockPermanent: Boolean
      unlockDate: CustomDateTime
      testDate: CustomDateTime
    ): PendonorDetail

    #Pmi
    addPmi(
      branchName: String
      branchSize: String
      branchAddress: String
      phoneNumber: String
      availability: String
      langitude: String
      longitude: String
      createdAt: CustomDateTime
    ): Pmi
    updatePmi(
      id: String
      branchName: String
      branchSize: String
      branchAddress: String
      phoneNumber: String
      availability: String
      langitude: String
      longitude: String
    ): Pmi

    #Activity
    addActivity(
      branchId: String
      pendonorId: String
      donorType: String
      interviewNotes: String
      antibodyLevel: String
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
      passFormShow: Boolean
      didScheduleShow: Boolean
      didInterviewShow: Boolean
      passInterviewShow: Boolean
      didBloodTestShow: Boolean
      passBloodTestShow: Boolean
      didScheduleTestShow: Boolean
      didDonorShow: Boolean
      proofImg: String
      passFormAt: CustomDateTime
      didScheduleAt: CustomDateTime
      didInterviewAt: CustomDateTime
      passInterviewAt: CustomDateTime
      didBloodTestAt: CustomDateTime
      passBloodTestAt: CustomDateTime
      didScheduleTestAt: CustomDateTime
      didDonorAt: CustomDateTime
    ): Activity

    updateActivity(
      id: String
      donorType: String
      interviewNotes: String
      antibodyLevel: String
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
      passFormShow: Boolean
      didScheduleShow: Boolean
      didInterviewShow: Boolean
      passInterviewShow: Boolean
      didBloodTestShow: Boolean
      passBloodTestShow: Boolean
      didScheduleTestShow: Boolean
      didDonorShow: Boolean
      proofImg: String
      passFormAt: CustomDateTime
      didScheduleAt: CustomDateTime
      didInterviewAt: CustomDateTime
      passInterviewAt: CustomDateTime
      didBloodTestAt: CustomDateTime
      passBloodTestAt: CustomDateTime
      didScheduleTestAt: CustomDateTime
      didDonorAt: CustomDateTime
    ): Activity

    updateScheduleStatus(id: String, didSchedule: Boolean): Activity

    #AdminPmi
    addAdminPmi(
      branchId: String
      fullname: String
      email: String
      password: String
      role: String
      status: Boolean
    ): AdminPmi

    updateAdminPmi(
      id: String
      fullname: String
      email: String
      password: String
      role: String
      status: Boolean
    ): AdminPmi

    #Jadwal
    addJadwal(
      branchId: String
      day: String
      dayInt: Int
      open: Boolean
      editable: Boolean
      timeslot: JSON
    ): Jadwal

    updateJadwals(
      id: String
      day: String
      dayInt: Int
      open: Boolean
      editable: Boolean
      timeslot: JSON
    ): Jadwal

    #S3
    createBucket(bucketName: String!): Response
    uploadObject(file: Upload!, fileName: String!, bucketName: String!): Object
    uploadObjects(
      files: [Upload!]!
      fileNames: String!
      bucketName: String!
    ): [Object!]!
    deleteObject(bucketName: String!, key: String!): Response
    deleteObjects(bucketName: String!, objectKeys: [String!]!): Response
    deleteBucket(bucketName: String!): Response
  }
`;