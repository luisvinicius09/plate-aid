import {
  DataTableDonationAndAid,
  type GeneralRequest,
} from "@/app/_components/data-tables/DataTableDonationAndAid";
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

  const collection = db.collection("generalRequests");

  const generalRequests = (await collection
    .find({})
    .toArray()) as unknown as GeneralRequest[];

  await client.close();

  return (
    <>
      <p className="text-2xl">Donations & Aid Requests</p>

      <DataTableDonationAndAid data={generalRequests} />
    </>
  );
}
