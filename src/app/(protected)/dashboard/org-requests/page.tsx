import {
  DataTableOrganization,
  type Organization,
} from "@/app/_components/data-tables/DataTableOrganization";
import { env } from "@/env";
import { getServerAuthSession } from "@/server/auth";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";

export default async function DashboardOrgRequests() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role === "standard") {
    redirect("/dashboard");
  }

  const client = new MongoClient(env.MONGO_URL);

  await client.connect();
  const db = client.db("forms");

  const collection = db.collection("organizationRequests");

  const organizations = (await collection
    .find({})
    .toArray()) as unknown as Organization[];

  await client.close();

  return (
    <>
      <p className="text-2xl">Organization Requests</p>

      <DataTableOrganization data={organizations} />
    </>
  );
}
