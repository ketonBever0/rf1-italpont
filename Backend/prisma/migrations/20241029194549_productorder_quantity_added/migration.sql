/*
  Warnings:

  - Added the required column `quantity` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productorder` ADD COLUMN `quantity` INTEGER NOT NULL;
