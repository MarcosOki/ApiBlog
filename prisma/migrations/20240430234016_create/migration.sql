-- CreateTable
CREATE TABLE "Users" (
    "idUser" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cargoUser" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "categorias" (
    "idCategory" TEXT NOT NULL PRIMARY KEY,
    "nameCategory" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id_post" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "idUser" TEXT,
    "categoriaId" TEXT NOT NULL,
    CONSTRAINT "Post_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Users" ("idUser") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Post_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias" ("idCategory") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
