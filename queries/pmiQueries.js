import { knex } from "../connection/dbConnection";

module.exports = {
    getAllPmi: function getAllPmi() {
        return knex('pmi')
        .select('*')
    },
    addPmi: function addPmi(cast) {
        return knex("pmi")
                .insert({
                    branchName: cast.branchName,
                    branchSize: cast.branchSize,
                    branchAddress: cast.branchAddress,
                    langitude: cast.langitude,
                    longitude: cast.longitude,
                    createdAt: knex.fn.now()
                })
                .returning('*');
    }
}