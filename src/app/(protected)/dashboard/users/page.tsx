import { DataTableUser } from "@/app/_components/data-tables/DataTableUser";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { redirect } from "next/navigation";

export default async function DashboardUsers() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  const usersFound = await db.select().from(users);

  return (
    <>
      <p className="text-2xl">User List</p>

      <DataTableUser data={usersFound} />
    </>
  );
}
