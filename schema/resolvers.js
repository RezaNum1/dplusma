import pendonorQueries from '../queries/pendonorQueries'
import pendonorDetailQueries from '../queries/pendonorDetailQueries'
import activityQueries from '../queries/activityQueries'
import pmiQueries from '../queries/pmiQueries'
import timeslotQueries from '../queries/timeslotQueries'
import adminPmiQueries from '../queries/adminPmiQueries'

export const resolvers = {
    Query: {
        // ------- Pendonor
        getAllPendonor: () => pendonorQueries.getAllPendonor(),
        getPendonor: (_, {id}) => pendonorQueries.getPendonor(id),

        // ------- Pendonor
        getAllPendonorDetail: () => pendonorDetailQueries.getAllPendonorDetail(),
        getPendonorDetail: (_, {id}) => pendonorDetailQueries.getPendonorDetail(id),

        // ------- PMI
        getAllPmi: () => pmiQueries.getAllPmi(),
        getPmi: (_, {id}) => pmiQueries.getPmi(id),

        // ------- Activity
        getAllActivity: () => activityQueries.getAllActivity(),
        getActivity: (_, {id}) => activityQueries.getActivity(id),

        // ------- Timeslot
        getAllTimeslot: () => timeslotQueries.getAllTimeslot(),
        getTimeslot: (_, {id}) => timeslotQueries.getTimeslot(id),

        // ------- AdminPmi
        getAllAdminPmi: () => adminPmiQueries.getAllAdminPmi(),
        getAdminPmi: (_, {id}) => adminPmiQueries.getAdminPmi(id)
    },
    Mutation: {
        // ------- Pendonor
        addPendonor: async(_, cast) => {
            const newOne = await pendonorQueries.addPendonor(cast);
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
        }
    }
}