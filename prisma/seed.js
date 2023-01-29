// @ts-nocheck
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const post1 = await prisma.post.create({
    data: {
      id: 'cfb5ca8f-05c0-4940-88ed-f3490261560d',
      slug: 'how-stripe-designs-beautiful-websites',
      title: "It's a Gundam"
    }
  });
  const post2 = await prisma.post.create({
    data: {
      id: '5b0a5c8f-bfbe-4e57-a395-f928a7c461ae',
      slug: 'devrel',
      title: 'See you in hell LOL WILL THIS CHANGE'
    }
  });

  const post3 = await prisma.post.create({
    data: {
      id: '8fbafb05-6dcf-4d37-a566-afb122072f25',
      slug: 'hahaha',
      title: 'BirdFlu in Florida Dolphin'
    }
  });
}

seed();
