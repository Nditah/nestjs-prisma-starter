/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('Deactivated', 'Blocked', 'Deleted', 'None');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('Draft', 'Applied', 'Declined', 'Hired');

-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('local', 'facebook', 'google');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('Photo', 'Video', 'Audio', 'Resume', 'Other', 'ProjectDocument', 'Gallery');

-- CreateEnum
CREATE TYPE "FriendRequestAction" AS ENUM ('Request', 'Accept', 'Ignore', 'Delete', 'Follow');

-- CreateEnum
CREATE TYPE "FriendRequestStatus" AS ENUM ('None', 'Pending', 'Connected', 'Ignored', 'Requested', 'Deleted', 'Following');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('heHim', 'sheHer', 'theyThem', 'ratherNotSay', 'notListedSeeBio');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('Draft', 'Posted', 'Hiring', 'Finished', 'Deleted');

-- CreateEnum
CREATE TYPE "MentorshipUserType" AS ENUM ('Mentor', 'Mentee', 'Both');

-- CreateEnum
CREATE TYPE "PositionStatus" AS ENUM ('Hiring', 'Filled');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('Waiting', 'Approved', 'Rejected', 'Deleted');

-- CreateEnum
CREATE TYPE "UserCircleStatus" AS ENUM ('None', 'Follow', 'Join', 'Unfollow', 'Leave');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Talent', 'Company', 'Admin');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "authorId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "award" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "title" VARCHAR(255) NOT NULL,
    "organization" TEXT NOT NULL,
    "issuedYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookmarked_job" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "jobId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookmarked_project" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "projectId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "circle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "contactorName" TEXT NOT NULL,
    "contactorEmail" TEXT NOT NULL,
    "contactorPhone" TEXT NOT NULL,
    "contactorJobTitle" TEXT NOT NULL,
    "contactorDepartment" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "employees" INTEGER NOT NULL,
    "skills" TEXT NOT NULL,
    "fields" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "schoolName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "startMonth" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "endMonth" INTEGER NOT NULL,
    "locationId" TEXT,
    "created" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "startMonth" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "endMonth" INTEGER NOT NULL,
    "locationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "external_company" (
    "id" TEXT NOT NULL,
    "logoLink" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "external_job" (
    "id" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "jobLink" TEXT NOT NULL,
    "externalCompanyId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file_item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "fileType" "FileType" NOT NULL,
    "userId" TEXT,
    "projectId" TEXT,
    "jobId" TEXT,
    "projectApplicationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friend_request" (
    "id" TEXT NOT NULL,
    "requesterId" TEXT,
    "receiverId" TEXT,
    "status" "FriendRequestStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job" (
    "id" TEXT NOT NULL,
    "companyId" TEXT,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locationId" TEXT,
    "responsibility" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "salaryMin" INTEGER NOT NULL,
    "salaryMax" INTEGER NOT NULL,
    "experienceLevel" TEXT NOT NULL,
    "screeningQuestions" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "posterDepartment" TEXT NOT NULL,
    "posterFirstName" TEXT NOT NULL,
    "posterLastName" TEXT NOT NULL,
    "posterEmail" TEXT NOT NULL,
    "posterPhone" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,
    "finished" TIMESTAMP(3) NOT NULL,
    "externalJobId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_application" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "jobId" TEXT,
    "coverLetter" TEXT NOT NULL,
    "cvId" TEXT,
    "screeningAnswers" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "saved" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "stateId" TEXT,
    "countryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iso2" TEXT NOT NULL,
    "iso3" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_state" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentorship_user" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "userType" "MentorshipUserType" NOT NULL,
    "professionalSelfDescribe" TEXT NOT NULL,
    "professionalLevel" TEXT NOT NULL,
    "quarterStart" TEXT NOT NULL,
    "selfDescribe" TEXT NOT NULL,
    "reviewStatus" "ReviewStatus" NOT NULL,
    "paired" BOOLEAN NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,
    "isHaveNullableFields" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentorship_user_friend" (
    "id" TEXT NOT NULL,
    "requesterId" TEXT,
    "receiverId" TEXT,
    "status" "FriendRequestStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "picture" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "pictureLink" TEXT NOT NULL,
    "redirectLink" TEXT NOT NULL,
    "numberPosition" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isVideo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "coverImage" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "locationId" TEXT,
    "status" "JobStatus" NOT NULL,
    "schedule" TEXT NOT NULL,
    "housingDetails" TEXT NOT NULL,
    "childElderDetails" TEXT NOT NULL,
    "finished" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_application" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "projectPositionId" TEXT,
    "projectId" TEXT,
    "coverLetter" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "saved" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_position" (
    "id" TEXT NOT NULL,
    "projectId" TEXT,
    "type" TEXT NOT NULL,
    "roleDescription" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "additionalRequirements" TEXT NOT NULL,
    "minAge" INTEGER NOT NULL,
    "maxAge" INTEGER NOT NULL,
    "status" "PositionStatus" NOT NULL,
    "finished" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setting" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "privateVisibleToAllTalents" BOOLEAN NOT NULL,
    "privateVisibleToAllCompanies" BOOLEAN NOT NULL,
    "emailPhoneVisibleToAllTalents" BOOLEAN NOT NULL,
    "notificationNewConnectionRequest" BOOLEAN NOT NULL,
    "notificationNewConnectionAccepted" BOOLEAN NOT NULL,
    "notificationFeedUpdate" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "talent" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "website" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "weightUnit" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "heightUnit" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "availableLocations" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "unionStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "role" "Role" DEFAULT E'USER',
    "email" TEXT,
    "avatarUrl" TEXT,
    "emailVerified" BOOLEAN,
    "password" TEXT,
    "userType" "UserType" DEFAULT E'Talent',
    "provider" "AuthProvider",
    "providerId" TEXT,
    "overview" TEXT,
    "facebookUrl" TEXT,
    "linkedinUrl" TEXT,
    "instagramUrl" TEXT,
    "twitterUrl" TEXT,
    "website" TEXT,
    "youtubeUrl" TEXT,
    "companyId" TEXT,
    "address" TEXT,
    "phoneNumber" TEXT,
    "accountStatus" "AccountStatus",
    "locationId" TEXT,
    "coverImage" TEXT,
    "streamJoined" BOOLEAN,
    "sendbirdJoined" BOOLEAN,
    "permissions" TEXT,
    "restorePasswordCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_circle" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "circleId" TEXT,
    "status" "UserCircleStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viewed_job" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "jobId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viewed_project" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "projectId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "file_item_projectApplicationId_unique" ON "file_item"("projectApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "job_application_cvId_unique" ON "job_application"("cvId");

-- CreateIndex
CREATE UNIQUE INDEX "setting_userId_unique" ON "setting"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "talent_userId_unique" ON "talent"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user.email_unique" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_companyId_unique" ON "user"("companyId");

-- AddForeignKey
ALTER TABLE "post" ADD FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "award" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmarked_job" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmarked_job" ADD FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmarked_project" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmarked_project" ADD FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "external_job" ADD FOREIGN KEY ("externalCompanyId") REFERENCES "external_company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_item" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_item" ADD FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_item" ADD FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_item" ADD FOREIGN KEY ("projectApplicationId") REFERENCES "project_application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_request" ADD FOREIGN KEY ("requesterId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_request" ADD FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD FOREIGN KEY ("externalJobId") REFERENCES "external_job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_application" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_application" ADD FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_application" ADD FOREIGN KEY ("cvId") REFERENCES "file_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD FOREIGN KEY ("stateId") REFERENCES "location_state"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD FOREIGN KEY ("countryId") REFERENCES "location_country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentorship_user" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentorship_user_friend" ADD FOREIGN KEY ("requesterId") REFERENCES "mentorship_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentorship_user_friend" ADD FOREIGN KEY ("receiverId") REFERENCES "mentorship_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_application" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_application" ADD FOREIGN KEY ("projectPositionId") REFERENCES "project_position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_application" ADD FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_position" ADD FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setting" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talent" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_circle" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_circle" ADD FOREIGN KEY ("circleId") REFERENCES "circle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viewed_job" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viewed_job" ADD FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viewed_project" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viewed_project" ADD FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
