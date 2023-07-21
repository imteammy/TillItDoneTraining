/*
  Warnings:

  - A unique constraint covering the columns `[brandOwner]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Brand_brandOwner_key" ON "Brand"("brandOwner");
