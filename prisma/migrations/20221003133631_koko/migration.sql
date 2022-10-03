-- CreateTable
CREATE TABLE "guestbook" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "image" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "guestbook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "views" (
    "slug" VARCHAR(128) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "views_pkey" PRIMARY KEY ("slug")
);
