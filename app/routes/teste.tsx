import { json } from "stream/consumers";
import { prisma } from "~/db.server";


export async function loader() {
  return JSON.stringify(await prisma.user.findMany());
}