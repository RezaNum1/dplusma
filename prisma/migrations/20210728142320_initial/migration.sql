/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Pendonor" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(50) NOT NULL,
    "phoneNumber" VARCHAR(25) NOT NULL,
    "email" VARCHAR(62) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendonorDetail" (
    "id" SERIAL NOT NULL,
    "pendonorId" INTEGER NOT NULL,
    "nik" VARCHAR(25),
    "sex" VARCHAR(5),
    "bloodType" VARCHAR(4),
    "placeOfBirth" VARCHAR(35),
    "dateOfBirth" TIMESTAMP(3),
    "donorCount" INTEGER,
    "domisiliProvinsi" VARCHAR(35),
    "domisiliKotKab" VARCHAR(35),
    "domisiliKelurahan" VARCHAR(35),
    "domisiliAddress" VARCHAR(100),
    "riwayatHamil" BOOLEAN,
    "riwayatCovid" BOOLEAN,
    "riwayatKeluhan" VARCHAR(255),
    "riwayatKomorbid" VARCHAR(255),
    "riwayatDonor" VARCHAR(255),
    "riwayatVaksin" VARCHAR(255),
    "riwayatGejalaKlinis" VARCHAR(255),
    "hospitalName" VARCHAR(50),
    "pcrPositiveDate" TIMESTAMP(3),
    "pcrPositiveImg" VARCHAR(255),
    "pcrNegativeDate" TIMESTAMP(3),
    "pcrNegativeImg" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "branchId" INTEGER NOT NULL,
    "pendonorId" INTEGER NOT NULL,
    "donorType" VARCHAR(35) NOT NULL,
    "passForm" BOOLEAN NOT NULL,
    "didSchedule" BOOLEAN NOT NULL DEFAULT false,
    "didInterview" BOOLEAN NOT NULL DEFAULT false,
    "passInterview" BOOLEAN NOT NULL DEFAULT false,
    "didBloodTest" BOOLEAN NOT NULL DEFAULT false,
    "passBloodTest" BOOLEAN NOT NULL DEFAULT false,
    "didScheduleTest" BOOLEAN NOT NULL DEFAULT false,
    "didDonor" BOOLEAN NOT NULL DEFAULT false,
    "passFormShow" BOOLEAN NOT NULL,
    "didScheduleShow" BOOLEAN NOT NULL DEFAULT false,
    "didInterviewShow" BOOLEAN NOT NULL DEFAULT false,
    "passInterviewShow" BOOLEAN NOT NULL DEFAULT false,
    "didBloodTestShow" BOOLEAN NOT NULL DEFAULT false,
    "passBloodTestShow" BOOLEAN NOT NULL DEFAULT false,
    "didScheduleTestShow" BOOLEAN NOT NULL DEFAULT false,
    "didDonorShow" BOOLEAN NOT NULL DEFAULT false,
    "proofImg" VARCHAR(255) NOT NULL,
    "passFormAt" TIMESTAMP(3) NOT NULL,
    "didScheduleAt" TIMESTAMP(3) NOT NULL,
    "didInterviewAt" TIMESTAMP(3) NOT NULL,
    "passInterviewAt" TIMESTAMP(3) NOT NULL,
    "didBloodTestAt" TIMESTAMP(3) NOT NULL,
    "passBloodTestAt" TIMESTAMP(3) NOT NULL,
    "didScheduleTestAt" TIMESTAMP(3) NOT NULL,
    "didDonorAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pmi" (
    "id" SERIAL NOT NULL,
    "branchName" VARCHAR(100) NOT NULL,
    "branchSize" VARCHAR(20) NOT NULL,
    "branchAddress" VARCHAR(255) NOT NULL,
    "langitude" VARCHAR(100) NOT NULL,
    "longitude" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeslot" (
    "id" SERIAL NOT NULL,
    "branchId" INTEGER NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "timeSlot" VARCHAR(50) NOT NULL,
    "totalSlot" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminPmi" (
    "id" SERIAL NOT NULL,
    "branchId" INTEGER NOT NULL,
    "fullname" VARCHAR(50) NOT NULL,
    "email" VARCHAR(65) NOT NULL,
    "password" VARCHAR(25) NOT NULL,
    "role" VARCHAR(30) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PendonorDetail.pendonorId_unique" ON "PendonorDetail"("pendonorId");

-- AddForeignKey
ALTER TABLE "PendonorDetail" ADD FOREIGN KEY ("pendonorId") REFERENCES "Pendonor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD FOREIGN KEY ("branchId") REFERENCES "Pmi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD FOREIGN KEY ("pendonorId") REFERENCES "Pendonor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeslot" ADD FOREIGN KEY ("branchId") REFERENCES "Pmi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminPmi" ADD FOREIGN KEY ("branchId") REFERENCES "Pmi"("id") ON DELETE CASCADE ON UPDATE CASCADE;
