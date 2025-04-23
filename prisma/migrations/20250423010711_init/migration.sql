-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "extensions";

-- CreateEnum
CREATE TYPE "EGender" AS ENUM ('MALE', 'FEMALE', 'NONBINARY', 'OTHER');

-- CreateEnum
CREATE TYPE "EGenderIdentity" AS ENUM ('GENDER_FLUID', 'GENDERQUEER', 'GENDER_QUESTIONING', 'INTERSEX_MAN', 'TRANS_MAN', 'TRANS_WOMAN', 'TRANS_FEMININE', 'TRANS_MASCULINE', 'INTERSEX_WOMAN', 'FEMME', 'MASC', 'BIGENDER', 'AGENDER', 'GENDER_NONCONFORMING', 'GENDER_VARIANT', 'PANGENDER', 'POLYGENDER', 'TRANSGENDER', 'TWO_SPIRIT', 'CISGENDER', 'OTHER');

-- CreateEnum
CREATE TYPE "EEthnicity" AS ENUM ('BLACK_AFRICAN_AMERICAN_CARIBBEAN_AMERICAN', 'EAST_ASIAN', 'SOUTHEAST_ASIAN', 'HISPANIC', 'LATINO', 'SOUTH_ASIAN', 'WHITE_CAUCASIAN', 'MIDDLE_EASTERN', 'NATIVE_AMERICAN', 'PACIFIC_ISLANDER', 'MIXED_RACE', 'OTHER');

-- CreateEnum
CREATE TYPE "EPoliticalBelief" AS ENUM ('LIBERAL', 'CONSERVATIVE', 'MODERATE', 'APOLITICAL', 'PREFER_NOT_TO_SAY', 'OTHER');

-- CreateEnum
CREATE TYPE "EReligion" AS ENUM ('CATHOLIC', 'CHRISTIAN', 'AGNOSTIC', 'PROTESTANT', 'HINDU', 'SPIRITUAL', 'ATHEIST', 'BUDDHIST', 'JEWISH', 'MUSLIM', 'SIKH', 'DONT_WANT_TO_ANSWER', 'OTHER');

-- CreateTable
CREATE TABLE "TestEmbedding" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "embedding" vector(4) NOT NULL,

    CONSTRAINT "TestEmbedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" "EGender" NOT NULL,
    "genderIdentity" "EGenderIdentity" NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "ethnicity" "EEthnicity" NOT NULL,
    "politcalBelief" "EPoliticalBelief" NOT NULL,
    "religion" "EReligion" NOT NULL,
    "drinker" BOOLEAN NOT NULL,
    "drinkerDealbreaker" BOOLEAN NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "smokerDealbreaker" BOOLEAN NOT NULL,
    "weed" BOOLEAN NOT NULL,
    "weedDealbreaker" BOOLEAN NOT NULL,

    CONSTRAINT "TestUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Match" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Match_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestUser_email_key" ON "TestUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TestUser_phoneNumber_key" ON "TestUser"("phoneNumber");

-- CreateIndex
CREATE INDEX "_Match_B_index" ON "_Match"("B");

-- AddForeignKey
ALTER TABLE "_Match" ADD CONSTRAINT "_Match_A_fkey" FOREIGN KEY ("A") REFERENCES "TestUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Match" ADD CONSTRAINT "_Match_B_fkey" FOREIGN KEY ("B") REFERENCES "TestUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
