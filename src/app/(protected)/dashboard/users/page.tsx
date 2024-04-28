import { DataTable } from "@/app/_components/DataTable";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function DashboardUsers() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <>
      <p className="text-2xl">User List</p>

      <DataTable />
    </>
  );
}
