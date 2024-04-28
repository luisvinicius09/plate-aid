import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "@/env";
import { MongoClient, ObjectId } from "mongodb";

// type RequestStatus = "received" | "onGoing" | "completed" | "cancelled";

export const formsRouter = createTRPCRouter({
  newMaintainerRequest: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phoneNumber: z.string().optional(),
        description: z.string().optional(),
        coordinates: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const client = new MongoClient(env.MONGO_URL);

      const db = client.db("forms");
      const timestamp = new Date();
      const id = new ObjectId();

      const session = client.startSession();
      try {
        session.startTransaction();

        await db.collection("maintainerRequests").insertOne({
          _id: id,
          name: input.name,
          email: input.email,
          phoneNumber: input.phoneNumber,
          description: input.description,
          coordinates: input.coordinates,
          status: "received",
          timestamp,
        });

        await session.commitTransaction();
      } catch (err) {
        console.error("An error occurred in the transaction", err);
      } finally {
        await session.endSession();
      }

      return { message: "OK" };
    }),
  newOrganizationRequest: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phoneNumber: z.string().optional(),
        requestType: z
          .enum(["aid_request", "donation", "verification"])
          .default("verification"),
        description: z.string().optional(),
        coordinates: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const client = new MongoClient(env.MONGO_URL);

      const db = client.db("forms");
      const timestamp = new Date();
      const id = new ObjectId();

      const session = client.startSession();
      try {
        session.startTransaction();

        await db.collection("organizationRequests").insertOne({
          _id: id,
          name: input.name,
          email: input.email,
          phoneNumber: input.phoneNumber,
          requestType: input.requestType,
          description: input.description,
          coordinates: input.coordinates,
          status: "received",
          timestamp,
        });

        await session.commitTransaction();
      } catch (err) {
        console.error("An error occurred in the transaction", err);
      } finally {
        await session.endSession();
      }

      return { message: "OK" };
    }),
  newGeneralRequest: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        phoneNumber: z.string().optional(),
        requestType: z.enum(["aid_request", "donation"]).default("aid_request"),
        description: z.string().optional(),
        coordinates: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const client = new MongoClient(env.MONGO_URL);

      const db = client.db("forms");
      const timestamp = new Date();
      const id = new ObjectId();

      const session = client.startSession();
      try {
        session.startTransaction();

        await db.collection("generalRequests").insertOne({
          _id: id,
          name: input.name,
          email: input.email,
          phoneNumber: input.phoneNumber,
          requestType: input.requestType,
          description: input.description,
          coordinates: input.coordinates,
          status: "received",
          timestamp,
        });

        await session.commitTransaction();
      } catch (err) {
        console.error("An error occurred in the transaction", err);
      } finally {
        await session.endSession();
      }

      return { message: "OK" };
    }),
});
