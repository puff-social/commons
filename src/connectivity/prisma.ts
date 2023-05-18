import { PrismaClient } from "@prisma/client";
export type {
  connections,
  sessions,
  users,
  accounts,
  diagnostics,
  devices,
  device_leaderboard,
  strains,
  feedback,
} from "@prisma/client";
export const prisma = new PrismaClient();
