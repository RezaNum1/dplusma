import { PrismaClient } from "@prisma/client"
import { knex } from "../connection/dbConnection";

const prisma = new PrismaClient();

module.exports = {
    getAllActivity: function getAllActivity() {
        return prisma.activity.findMany()
    },
    addActivity: function addActivity(cast) {
        // return knex("activity")
        //         .insert({
        //             branchId: cast.branchId,
        //             pendonorId: cast.pendonorId,
        //             donorType: cast.donorType,
        //             passForm: cast.passForm,
        //             didSchedule: cast.didSchedule,
        //             didInterview: cast.didInterview,
        //             passInterview: cast.passInterview,
        //             didBloodTest: cast.didBloodTest,
        //             passBloodTest: cast.passBloodTest,
        //             didScheduleTest: cast.didScheduleTest,
        //             didDonor: cast.didDonor,
        //             passFormShow: cast.passFormShow,
        //             didScheduleShow: cast.didScheduleShow,
        //             didInterviewShow: cast.didInterviewShow,
        //             passInterviewShow: cast.passInterviewShow,
        //             didBloodTestShow: cast.didBloodTestShow,
        //             passBloodTestShow: cast.passBloodTestShow,
        //             didScheduleTestShow: cast.didScheduleTestShow,
        //             didDonorShow: cast.didDonorShow,
        //             proofImg: cast.proofImg,
        //             passFormAt: cast.passFormAt,
        //             didScheduleAt: cast.didScheduleAt,
        //             didInterviewAt: cast.didInterviewAt,
        //             passInterviewAt: cast.passInterviewAt,
        //             didBloodTestAt: cast.didBloodTestAt,
        //             passBloodTestAt: cast.passBloodTestAt,
        //             didScheduleTestAt: cast.didScheduleTestAt,
        //             didDonorAt: cast.didDonorAt
        //         })
        //         .returning('*');
    }
}