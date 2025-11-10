import "dotenv/config";
import { db } from "./src/drizzle/db.ts";
import { users } from "./src/drizzle/schema.ts";
import { eq } from "drizzle-orm";

interface User {
  name: string;
  email: string;
  password: string;
}

export async function createUser(
  user: User
): Promise<User | { message: string }> {
  try {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  } catch {
    return { message: `Error creating user` };
  }
}

export async function getAllUsers(): Promise<User[] | { message: string }> {
  try {
    const usersData = await db.select().from(users);
    return usersData;
  } catch {
    return { message: `Error getting all users` };
  }
}

export async function getUser(
  email: string
): Promise<User | { message: string }> {
  try {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  } catch {
    return { message: `Error getting user` };
  }
}

export async function updateUser(
  email: string,
  user: Partial<User>
): Promise<{ message: string }> {
  try {
    await db.update(users).set(user).where(eq(users.email, email));
    return { message: "User updated successfully" };
  } catch {
    return { message: `Error updating user` };
  }
}

export async function deleteUser(email: string): Promise<{ message: string }> {
  try {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    if (!user) {
      return { message: "User not found" };
    }

    await db.delete(users).where(eq(users.email, email));
    return { message: "User deleted successfully" };
  } catch {
    return { message: `Error deleting user` };
  }
}
