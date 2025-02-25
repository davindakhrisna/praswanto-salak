import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {
  try {
    console.log("Prisma client:", prisma); // Debugging: Cek apakah prisma didefinisikan
    console.log("Prisma userEmail model:", prisma.UserEmail); // Debugging: Cek apakah prisma.userEmail didefinisikan

    const newUser = await prisma.UserEmail.create({
      data: {
        name: "Dilli Pandhodho",
        email: "dilli.pandhodho@example.com",
        password: "hashedPassword123", // Pastikan ini adalah hash dari password asli
        gambar: "https://example.com/avatar.jpg", // Opsional
      },
    });
    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
