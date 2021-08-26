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
    getActivityForInterview: function getActivityForInterview(cast) {
        return prisma.activity.findMany({
            where: {
                passForm: true,
                didSchedule: true,
                didInterview: false,
                branchId: cast.branchId
            }
        })
    },
    getActivityForBloodTest: function getActivityForBloodTest(cast) {
        return prisma.activity.findMany({
            where: {
                didInterview: true,
                passInterview: true,
                didBloodTest: false,
                branchId: cast.branchId
            }
        })
    },
    getActivityForDonor: function getActivityForDonor(cast) {
        return prisma.activity.findMany({
            where: {
                didBloodTest: true,
                passBloodTest: true,
                didDonor: false,
                branchId: cast.branchId
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
                queue: cast.queue,
                slot: cast.slot,
                passForm: cast.passForm,
                didSchedule: cast.didSchedule,
                didInterview: cast.didInterview,
                passInterview: cast.passInterview,
                didBloodTest: cast.didBloodTest,
                passBloodTest: cast.passBloodTest,
                didScheduleTest: cast.didScheduleTest,
                didDonor: cast.didDonor,
                processState: cast.processState,
                proofImg: cast.proofImg,
                passFormAt: cast.passFormAt,
                didScheduleAt: cast.didScheduleAt,
                didInterviewAt: cast.didInterviewAt,
                passInterviewAt: cast.passInterviewAt,
                didBloodTestAt: cast.didBloodTestAt,
                passBloodTestAt: cast.passBloodTestAt,
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
                queue: cast.queue,
                slot: cast.slot,
                passForm: cast.passForm,
                didSchedule: cast.didSchedule,
                didInterview: cast.didInterview,
                passInterview: cast.passInterview,
                didBloodTest: cast.didBloodTest,
                passBloodTest: cast.passBloodTest,
                didScheduleTest: cast.didScheduleTest,
                didDonor: cast.didDonor,
                processState: cast.processState,
                proofImg: cast.proofImg,
                passFormAt: cast.passFormAt,
                didScheduleAt: cast.didScheduleAt,
                didInterviewAt: cast.didInterviewAt,
                passInterviewAt: cast.passInterviewAt,
                didBloodTestAt: cast.didBloodTestAt,
                passBloodTestAt: cast.passBloodTestAt,
                didScheduleTestAt: cast.didScheduleTestAt,
                didDonorAt: cast.didDonorAt
            }
        })
    },
    updateScheduleStatus: async function updateScheduleStatus(cast) {
        const result = await prisma.$queryRaw`
                SELECT COUNT(id) FROM "public"."Activity" WHERE "didSchedule" = true AND cast("updatedAt" as date) = current_date;
            `
        return await prisma.activity.update({
            where: {
                id: cast.id
            },
            data: {
                didSchedule: cast.didSchedule,
                queue: `${result[0]["count"] + 1}`
            }
        })
    }
}