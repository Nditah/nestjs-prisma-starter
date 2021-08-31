import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'ada@ensemble.com',
      username: 'Adaeze',
      firstName: 'Ada',
      lastName: 'Omolara',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: 'USER',
      posts: {
        create: {
          title: 'Join us for Prisma Day 2021 in Berlin',
          content: 'https://www.prisma.io/day/',
          published: true,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'obi@ensemble.com',
      username: "Obinna",
      firstName: 'Obi',
      lastName: 'Ebuka',
      role: 'ADMIN',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      posts: {
        create: [
          {
            title: 'Build Your Team & Create Your Dream',
            content: 'https://www.createensemble.com/',
            published: true,
          },
          {
            title: 'Follow Nditah on Linkedin',
            content: 'https://linkedin.com/in/nditah',
            published: false,
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
