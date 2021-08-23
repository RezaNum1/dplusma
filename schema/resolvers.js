import pendonorQueries from '../queries/pendonorQueries'
import pendonorDetailQueries from '../queries/pendonorDetailQueries'
import activityQueries from '../queries/activityQueries'
import pmiQueries from '../queries/pmiQueries'
import timeslotQueries from '../queries/timeslotQueries'
import adminPmiQueries from '../queries/adminPmiQueries'
import jadwalQueries from '../queries/jadwalQueries'
import { queryResolver } from "../aws/query-resolvers.js"
import { mutationResolver } from "../aws/mutation-resolvers.js"

import { PrismaClient } from "@prisma/client"
import graphQlJson from "graphql-type-json"
import { GraphQLUpload } from 'graphql-upload'

const prisma = new PrismaClient();

export const resolvers = {
    JSON: graphQlJson,
    Upload: GraphQLUpload,
    Query: {
        // ------- Pendonor
        getAllPendonor: () => pendonorQueries.getAllPendonor(),
        getPendonor: (_, {id}) => pendonorQueries.getPendonor(id),
        getPendonorByIdentifier: (_, {identifier}) => pendonorQueries.getPendonorByIdentifier(identifier),

        // ------- Pendonor
        getAllPendonorDetail: () => pendonorDetailQueries.getAllPendonorDetail(),
        getPendonorDetail: (_, cast) => pendonorDetailQueries.getPendonorDetail(cast),
        updateLockedData: () => pendonorDetailQueries.updateLockedData(),

        // ------- PMI
        getAllPmi: () => pmiQueries.getAllPmi(),
        getPmi: (_, {id}) => pmiQueries.getPmi(id),

        // ------- Activity
        getAllActivity: () => activityQueries.getAllActivity(),
        getActivity: (_, cast) => activityQueries.getActivity(cast),
        getActivityForInterview: () => activityQueries.getActivityForInterview(), 
        getActivityForBloodTest: () => activityQueries.getActivityForBloodTest(),
        getActivityForDonor: () => activityQueries.getActivityForDonor(),
        getQueueNumber: () => activityQueries.getQueueNumber(),

        // ------- Timeslot 
        getAllTimeslot: () => timeslotQueries.getAllTimeslot(),
        getTimeslotById: (_, cast) => timeslotQueries.getTimeslotById(cast),
        getTimeslotByBranch: (_, cast) => timeslotQueries.getTimeslotByBranch(cast),
        getTimeslotByIdAndBranch: (_, cast) => timeslotQueries.getTimeslotByIdAndBranch(cast),

        // ------- AdminPmi 
        getAllAdminPmi: () => adminPmiQueries.getAllAdminPmi(),
        getAdminPmiById: (_, cast) => adminPmiQueries.getAdminPmiById(cast),
        getAdminPmiByBranch: (_, cast) => adminPmiQueries.getAdminPmiByBranch(cast),
        getAdminPmiByIdAndBranch: (_, cast) => adminPmiQueries.getAdminPmiByIdAndBranch(cast),

        //  ------- Jadwal
        getAllJadwal: () => jadwalQueries.getAllJadwal(),

        //  ------- S3
        fetchBuckets:() => new queryResolver().fetchBuckets(),

        fetchObjects:(_,{bucketName}) => new queryResolver().fetchObjects(bucketName)
    },
    Mutation: {
        // ------- Pendonor
        addPendonor: async(_, cast) => {
            const newOne = await pendonorQueries.addPendonor(cast);
            return newOne
        },

        addPendonorAndDetail: async(_, cast) => {
            const newOne = await pendonorQueries.addPendonorAndDetail(cast);
            return newOne
        },

        updatePendonor: async(_, cast) => {
            const updateOne = await pendonorQueries.updatePendonor(cast);
            return updateOne
        },

        // ------- Pendonor Detail
        addPendonorDetail: async(_, cast) => {
            const newOne = await pendonorDetailQueries.addPendonorDetail(cast);
            return newOne
        },

        updatePendonorDetail: async(_, cast) => {
            const updateOne = await pendonorDetailQueries.updatePendonorDetail(cast)
            return updateOne
        },

        // -------- PMI
        addPmi: async(_, cast) => {
            const newOne = await pmiQueries.addPmi(cast)
            return newOne
        },
        updatePmi: async(_, cast) => {
            const updateOne = await pmiQueries.updatePmi(cast)
            return updateOne
        },

        // -------- Activity
        addActivity: async(_, cast) => {
            const newOne = await activityQueries.addActivity(cast)
            return newOne
        },
        updateActivity: async(_, cast) => {
            const updateOne = await activityQueries.updateActivity(cast)
            return updateOne
        },

        // -------- Timeslot
        addTimeslot: async(_, cast) => {
            const newOne = await timeslotQueries.addTimeslot(cast)
            return newOne
        },
        updateTimeslot: async(_, cast) => {
            const updateOne = await timeslotQueries.updateTimeslot(cast)
            return updateOne
        },

        // -------- AdminPmi
        addAdminPmi: async(_, cast) => {
            const newOne = await adminPmiQueries.addAdminPmi(cast)
            return newOne
        },
        updateAdminPmi: async(_, cast) => {
            const updateOne = await adminPmiQueries.updateAdminPmi(cast)
            return updateOne
        },

        //  ------- Jadwal
        addJadwal: async(_, cast) => {
            const newOne = await jadwalQueries.addJadwal(cast)
            return newOne
        },

        //  ------- S3
        createBucket:(_,{bucketName}) => new mutationResolver().createBucket(bucketName),

        uploadObject:(_,{file,fileName,bucketName}) => new mutationResolver().uploadObject(file,fileName,bucketName),

        uploadObjects:(_,{files,fileNames,bucketName}) => new mutationResolver().uploadObjects(files,fileNames,bucketName),

        deleteObject:(_,{bucketName,key}) => new mutationResolver().deleteObject(bucketName,key),

        deleteObjects:(_,{bucketName,objectKeys}) => new mutationResolver().deleteObjects(bucketName,objectKeys),

        deleteBucket:(_,{bucketName}) => new mutationResolver().deleteBucket(bucketName)
    },
    Pendonor: {
        pendonorDetails: (parent, args, context) => {
            return prisma.pendonorDetail.findFirst({
                where: { pendonorId: parent.id }
            })
        },
        activitys: (parent, args, context) => {
            return prisma.activity.findMany({
                where: { pendonorId: parent.id }
            })
        }
    },
    PendonorDetail: {
        pendonor: (parent, _, context) => {
            return prisma.pendonor.findUnique({
                where: { id: parent.pendonorId },
            })
        }
    },
    Activity: {
        pendonor: (parent, _, context) => {
            return prisma.pendonor.findUnique({
                where: { id: parent.pendonorId },
            })
        },
        branch: (parent, _, context) => {
            return prisma.pmi.findUnique({
                where: { id: parent.branchId },
            })
        }
    },
    Pmi: {
        adminPmis: (parent, args, context) => {
            return prisma.adminPmi.findMany({
                where: { branchId: parent.id }
            })
        },
        timeslots: (parent, args, context) => {
            return prisma.timeslot.findMany({
                where: { branchId: parent.id }
            })
        },
        jadwals: (parent, args, context) => {
            return prisma.jadwal.findMany({
                where: { branchId: parent.id }
            })
        }
    },
    Timeslot: {
        branch: (parent, _, context) => {
            return prisma.pmi.findUnique({
                where: { id: parent.branchId },
            })
        }
    },
    AdminPmi: {
        branch: (parent, _, context) => {
            return prisma.pmi.findUnique({
                where: { id: parent.branchId },
            })
        }
    },
    Jadwal: {
        branch: (parent, _, context) => {
            return prisma.pmi.findUnique({
                where: { id: parent.branchId },
            })
        }
    }
}