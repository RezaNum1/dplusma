import { knex } from "../connection/dbConnection";

module.exports = {
    getAllTimeslot: function getAllTimeslot() {
        return knex('timeslot')
        .select('*')
    },
    addTimeslot: function addTimeslot(cast) {
        return knex("timeslot")
                .insert({
                    branchId: cast.branchId,
                    type: cast.type,
                    timeSlot: cast.timeSlot,
                    totalSlot: cast.totalSlot,
                    createdAt: knex.fn.now()
                })
                .returning('*');
    }
}