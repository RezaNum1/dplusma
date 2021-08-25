import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
const defaultTimeslot = {
    slot: [
        {
          "name": "08.00 - 09.00",
          "totalSlot": 5,
          "occupied": 3
        },
        {
          "name": "10.00 - 11.00",
          "totalSlot": 5,
          "occupied": 3
        },
        {
          "name": "11.00 - 12.00",
          "totalSlot": 5,
          "occupied": 3
        },
        {
          "name": "12.00 - 13.00",
          "totalSlot": 5,
          "occupied": 3
        },
        {
          "name": "13.00 - 14.00",
          "totalSlot": 5,
          "occupied": 3
        },
        {
          "name": "14.00 - 15.00",
          "totalSlot": 5,
          "occupied": 3
        }
      ]
}


module.exports = {
    getAllPmi: async function getAllPmi() {
        return prisma.pmi.findMany()
    },
    getPmi: function getPmi(id) {
        return prisma.pmi.findUnique({
            where: {
                id: id
            }
        })
    },
    addPmi: async function addPmi(cast) {
        return await prisma.pmi.create({
            data: {
                branchName: cast.branchName,
                branchAddress: cast.branchAddress,
                branchSize: cast.branchSize,
                phoneNumber: cast.phoneNumber,
                availability: cast.availability,
                langitude: cast.langitude,
                longitude: cast.longitude,
                jadwals: {
                    createMany: {
                        data: [
                            {
                                day: "Sunday",
                                dayInt: 1,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            },
                            {
                                day: "Monday",
                                dayInt: 2,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            },
                            {
                                day: "Tuesday",
                                dayInt: 3,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            },
                            {
                                day: "Wednesday",
                                dayInt: 4,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            },
                            {
                                day: "Thursday",
                                dayInt: 5,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            },
                            {
                                day: "Friday",
                                dayInt: 6,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            },
                            {
                                day: "Saturday",
                                dayInt: 7,
                                editable: true,
                                open: true,
                                timeslot: defaultTimeslot
                            }
                        ]
                    }
                }
            }
        })
    },
    updatePmi: async function updatePmi(cast) {
        return await prisma.pmi.update({
            where: { id: cast.id },
            data: {
                branchName: cast.branchName,
                branchAddress: cast.branchAddress,
                branchSize: cast.branchSize,
                phoneNumber: cast.phoneNumber,
                availability: cast.availability,
                langitude: cast.langitude,
                longitude: cast.longitude,
            }
        })
    }
}