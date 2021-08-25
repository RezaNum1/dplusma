-- CreateTable
CREATE TABLE "Pendonor" (
    "id" TEXT NOT NULL DEFAULT (gen_random_uuid())::TEXT,
    "fullName" VARCHAR(50) NOT NULL,
    "phoneNumber" VARCHAR(25) NOT NULL,
    "email" VARCHAR(62) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "occupation" VARCHAR(100) NOT NULL,
    "identifier" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendonorDetail" (
    "id" TEXT NOT NULL DEFAULT (gen_random_uuid())::TEXT,
    "pendonorId" TEXT NOT NULL,
    "nik" VARCHAR(25),
    "sex" VARCHAR(15),
    "bloodType" VARCHAR(4),
    "placeOfBirth" VARCHAR(35),
    "dateOfBirth" TIMESTAMP(3),
    "donorCount" INTEGER,
    "domisiliProvinsi" VARCHAR(35),
    "domisiliKotKab" VARCHAR(35),
    "domisiliKecamatan" VARCHAR(35),
    "domisiliKelurahan" VARCHAR(35),
    "domisiliAddress" VARCHAR(100),
    "riwayatHamil" BOOLEAN,
    "riwayatCovid" BOOLEAN,
    "riwayatTransfusi" BOOLEAN,
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
    "pass" BOOLEAN,
    "lockPermanent" BOOLEAN,
    "unlockDate" TIMESTAMP(3),
    "testDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL DEFAULT (gen_random_uuid())::TEXT,
    "branchId" TEXT NOT NULL,
    "pendonorId" TEXT NOT NULL,
    "donorType" VARCHAR(35),
    "interviewNotes" VARCHAR(255),
    "antibodyLevel" VARCHAR(100),
    "queue" VARCHAR(20),
    "slot" VARCHAR(100),
    "passForm" BOOLEAN DEFAULT false,
    "didSchedule" BOOLEAN DEFAULT false,
    "didInterview" BOOLEAN DEFAULT false,
    "passInterview" BOOLEAN DEFAULT false,
    "didBloodTest" BOOLEAN DEFAULT false,
    "passBloodTest" BOOLEAN DEFAULT false,
    "didScheduleTest" BOOLEAN DEFAULT false,
    "didDonor" BOOLEAN DEFAULT false,
    "processState" BOOLEAN DEFAULT false,
    "proofImg" VARCHAR(255),
    "passFormAt" TIMESTAMP(3),
    "didScheduleAt" TIMESTAMP(3),
    "didInterviewAt" TIMESTAMP(3),
    "passInterviewAt" TIMESTAMP(3),
    "didBloodTestAt" TIMESTAMP(3),
    "passBloodTestAt" TIMESTAMP(3),
    "didScheduleTestAt" TIMESTAMP(3),
    "didDonorAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pmi" (
    "id" TEXT NOT NULL DEFAULT (gen_random_uuid())::TEXT,
    "branchName" VARCHAR(100) NOT NULL,
    "branchSize" VARCHAR(20) NOT NULL,
    "branchAddress" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(25) NOT NULL,
    "availability" VARCHAR(50) NOT NULL,
    "langitude" VARCHAR(100) NOT NULL,
    "longitude" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminPmi" (
    "id" TEXT NOT NULL DEFAULT (gen_random_uuid())::TEXT,
    "branchId" TEXT NOT NULL,
    "fullname" VARCHAR(50) NOT NULL,
    "email" VARCHAR(65) NOT NULL,
    "password" VARCHAR(25) NOT NULL,
    "role" VARCHAR(30) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jadwal" (
    "id" TEXT NOT NULL DEFAULT (gen_random_uuid())::TEXT,
    "branchId" TEXT NOT NULL,
    "day" VARCHAR(100) NOT NULL,
    "dayInt" INTEGER NOT NULL,
    "open" BOOLEAN NOT NULL DEFAULT true,
    "editable" BOOLEAN NOT NULL DEFAULT true,
    "timeslot" JSONB,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PendonorDetail_pendonorId_unique" ON "PendonorDetail"("pendonorId");

-- AddForeignKey
ALTER TABLE "PendonorDetail" ADD FOREIGN KEY ("pendonorId") REFERENCES "Pendonor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD FOREIGN KEY ("branchId") REFERENCES "Pmi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD FOREIGN KEY ("pendonorId") REFERENCES "Pendonor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminPmi" ADD FOREIGN KEY ("branchId") REFERENCES "Pmi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jadwal" ADD FOREIGN KEY ("branchId") REFERENCES "Pmi"("id") ON DELETE CASCADE ON UPDATE CASCADE;
