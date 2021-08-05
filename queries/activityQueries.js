import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

module.exports = {
    getAllActivity: function getAllActivity() {
        return prisma.activity.findMany()
    },
    getActivity: function getActivity(cast) {
        return prisma.activity.findFirst({
            where: {
                pendonorId: cast.pendonorId
            }
        })
    },
    getActivityForInterview: function getActivityForInterview() {
        return prisma.activity.findMany({
            where: {
                passForm: true,
                didSchedule: true,
                didInterview: false
            }
        })
    },
    getActivityForBloodTest: function getActivityForBloodTest() {
        return prisma.activity.findMany({
            where: {
                didInterview: true,
                passInterview: true,
                didBloodTest: false
            }
        })
    },
    getActivityForDonor: function getActivityForDonor() {
        return prisma.activity.findMany({
            where: {
                didBloodTest: true,
                passBloodTest: true,
                didDonor: false
            }
        })
    },
    addActivity: async function addActivity(cast) {
        return await prisma.activity.create({
            data: {
                branch: { connect: { id: cast.branchId } },
                pendonor: { connect: { id: cast.pendonorId } },
                donorType: cast.donorType,
                interviewNotes: cast.interviewNotes,
                antibodyLevel:  cast.antibodyLevel,
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
                donorType: cast.donorType,
                interviewNotes: cast.interviewNotes,
                antibodyLevel:  cast.antibodyLevel,
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