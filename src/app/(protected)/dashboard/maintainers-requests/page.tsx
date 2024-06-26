import {
  DataTableMaintainer,
  type Maintainer,
} from "@/app/_components/data-tables/DataTableMaintainer";
import { env } from "@/env";
import { getServerAuthSession } from "@/server/auth";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";

export default async function DashboardOrgRequests() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  const client = new MongoClient(env.MONGO_URL);

  await client.connect();
  const db = client.db("forms");

  const collection = db.collection("maintainerRequests");

  const maintainers = (await collection
    .find({})
    .toArray()) as unknown as Maintainer[];

  await client.close();

  return (
    <>
      <p className="text-2xl">Maintainers Requests</p>

      <DataTableMaintainer data={maintainers} />
    </>
  );
}
