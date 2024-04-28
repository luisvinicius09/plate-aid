import { MongoClient } from "mongodb";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "@/env";
import { type GeneralRequest } from "@/app/_components/data-tables/DataTableDonationAndAid";
import { type Maintainer } from "@/app/_components/data-tables/DataTableMaintainer";
import { type Organization } from "@/app/_components/data-tables/DataTableOrganization";

export const dataRouter = createTRPCRouter({
  getMarkers: publicProcedure.query(async ({ ctx }) => {
    const client = new MongoClient(env.MONGO_URL);

    const db = client.db("forms");
    const generalCollection = db.collection("generalRequests");
    const organizationCollection = db.collection("organizationRequests");
    const maintainerCollection = db.collection("maintainerRequests");

    try {
      const generalRequests = (await generalCollection
        // .find({ $where: { coordinates: { $ne: null } } })
        .find()
        .toArray()) as unknown as GeneralRequest[];

      const organizationRequests = (await organizationCollection
        // .find({ $where: { coordinates: { $ne: null } } })
        .find()
        .toArray()) as unknown as Organization[];

      const maintainerRequests = (await maintainerCollection
        // .find({ $where: { coordinates: { $ne: null } } })
        .find()
        .toArray()) as unknown as Maintainer[];

      // put all into one array
      const markers = [
        ...generalRequests,
        ...organizationRequests,
        ...maintainerRequests,
      ];

      return { message: "OK", markers };
    } catch (err) {
      console.error(err);
    } finally {
    }
    return {};
  }),
});
