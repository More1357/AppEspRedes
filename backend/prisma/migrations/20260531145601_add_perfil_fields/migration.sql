/*
  Warnings:

  - You are about to drop the column `altura` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `edad` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nivelActividad` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `Usuario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Usuario" ("createdAt", "email", "id", "nombre", "password", "rol", "updatedAt") SELECT "createdAt", "email", "id", "nombre", "password", "rol", "updatedAt" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
