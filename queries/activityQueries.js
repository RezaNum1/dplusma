import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllActivity: function getAllActivity() {
        return prisma.activity.findMany()
    },
    getActivity: function getActivity(id) {
        return prisma.activity.findUnique({
            where: {
                id: id
            }
        })
    },
    addActivity: async function addActivity(cast) {
        return await prisma.activity.create({
            data: {
                branchId: cast.branchId,
                pendonorId: cast.pendonorId,
                donorType: cast.donorType,
                passForm: cast.passForm,
                didSchedule: cast.didSchedule,
                didInterview: cast.didInterview,
                passInterview: cast.passInterview,
                didBloodTest: cast.didBloodTest,
                passBloodTest: cast.passBloodTest,
                didScheduleTest: cast.didScheduleTest,
                didDonor: cast.didDonor,
                passFormShow: cast.passFormShow,
                didScheduleShow: cast.didScheduleShow,
                didInterviewShow: cast.didInterviewShow,
                passInterviewShow: cast.passInterviewShow,
                didBloodTestShow: cast.didBloodTestShow,
                passBloodTestShow: cast.passBloodTestShow,
                didScheduleTestShow: cast.didScheduleTestShow,
                didDonorShow: cast.didDonorShow,
                proofImg: cast.proofImg,
                passFormAt: cast.passFormAt,
                didScheduleAt: cast.didScheduleAt,
                didInterviewAt: cast.didInterviewAt,
                passInterviewAt: cast.passInterviewAt,
                didBloodTestAt: cast.didBloodTestAt,
                passBloodTestAt: cast.passBloodTest,
                didScheduleTestAt: cast.didScheduleTestAt,
                didDonorAt: cast.didDonorAt
            }
        })
    },
    updateActivity: async function updateActivity(cast) {
        return await prisma.activity.update({
            where: {
                id: cast.id
            },
            data: {
                pendonorId: cast.pendonorId,
                branchId: cast.branchId,
                donorType: cast.donorType,
                passForm: cast.passForm,
                didSchedule: cast.didSchedule,
                didInterview: cast.didInterview,
                passInterview: cast.passInterview,
                didBloodTest: cast.didBloodTest,
                passBloodTest: cast.passBloodTest,
                didScheduleTest: cast.didScheduleTest,
                didDonor: cast.didDonor,
                passFormShow: cast.passFormShow,
                didScheduleShow: cast.didScheduleShow,
                didInterviewShow: cast.didInterviewShow,
                passInterviewShow: cast.passInterviewShow,
                didBloodTestShow: cast.didBloodTestShow,
                passBloodTestShow: cast.passBloodTestShow,
                didScheduleTestShow: cast.didScheduleTestShow,
                didDonorShow: cast.didDonorShow,
                proofImg: cast.proofImg,
                passFormAt: cast.passFormAt,
                didScheduleAt: cast.didScheduleAt,
                didInterviewAt: cast.didInterviewAt,
                passInterviewAt: cast.passInterviewAt,
                didBloodTestAt: cast.didBloodTestAt,
                passBloodTestAt: cast.passBloodTest,
                didScheduleTestAt: cast.didScheduleTestAt,
                didDonorAt: cast.didDonorAt
            }
        })
    }
}