import pendonorQueries from '../queries/pendonorQueries'
import activityQueries from '../queries/activityQueries'
import pmiQueries from '../queries/pmiQueries'
import timeslotQueries from '../queries/timeslotQueries'
import userQueries from '../queries/userQueries'
import { knex } from "../connection/dbConnection"

export const resolvers = {
    Query: {
        // ------- Pendonor
        getAllPendonor: () => pendonorQueries.getAllPendonor(),

        // ------- PMI
        getAllPmi: () => pmiQueries.getAllPmi(),

        // ------- Activity
        getAllActivity: () => activityQueries.getAllActivity(),

        // ------- Timeslot
        getAllTimeslot: () => timeslotQueries.getAllTimeslot(),

        // ------- Users
        getAllUser: () => userQueries.getAllUser()
    },
    Mutation: {
        // ------- Pendonor
        addPendonor: async(_, cast) => {
            const newOne = await pendonorQueries.addPendonor(cast);
            return newOne
        },

        // -------- PMI
        addPmi: async(_, cast) => {
            const newOne = await pmiQueries.addPmi(cast)
            return newOne
        },

        // -------- Activity
        addActivity: async(_, cast) => {
            const newOne = await activityQueries.addActivity(cast)
            return newOne
        },

        // -------- Timeslot
        addTimeslot: async(_, cast) => {
            const newOne = await timeslotQueries.addTimeslot(cast)
            return newOne
        },

        // -------- Users
        addUser: async(_, cast) => {
            const newOne = await userQueries.addUser(cast)
            return newOne
        }
    },
    Pendonor: {
        activitys: root => {
            return knex("activity")
            .whereIn("id", root.id)
            .select("*");
        }
    },
    Activity: {
        pendonorId: root => {
            return knex('pendonor')
            .where("id", root.pendonorId)
            .first()
        },
        branchId: root => {
            return knex('pmi')
            .where("id", root.branchId)
            .first()
        }
    },
    Pmi: {
        activitys: root => {
            return knex("activity")
            .whereIn("id", root.id)
            .select("*");
        },
        timeslots: root => {
            return knex("timeslot")
            .whereIn("id", root.id)
            .select("*");
        },
        users: root => {
            return knex("users")
            .whereIn("id", root.id)
            .select("*");
        }
    },
    Timeslot: {
        branchId: root => {
            return knex('pmi')
            .where("id", root.branchId)
            .first()
        }
    },
    Users: {
        branchId: root => {
            return knex('pmi')
            .where("id", root.branchId)
            .first()
        }
    }

}