import { Button } from "@/app/_components/ui/button";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const EventStatusLegend = {
  received: {
    label: "Received",
    color: "text-blue-500",
  },
  onGoing: {
    label: "On Going",
    color: "text-yellow-500",
  },
  completed: {
    label: "Completed",
    color: "text-green-500",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-500",
  },
} as const;

const EventTypeLegend = {
  maintainer: {
    label: "A New Maintainer ",
  },
  organization: {
    label: "An Organization entered in contact",
  },
  request: {
    label: "A Request for aid or donation",
  },
} as const;

function Event({
  eventStatus,
  eventType,
  date,
}: {
  eventStatus: "received" | "onGoing" | "completed" | "cancelled";
  eventType: "maintainer" | "organization" | "request";
  date: string;
}) {
  return (
    <div className="w-full rounded-lg border p-6">
      <p>{EventTypeLegend[eventType].label}</p>

      <div className="flex items-center gap-2">
        <p className="text-sm">Status:</p>
        <p className={"font-bold " + `${EventStatusLegend[eventStatus].color}`}>
          {EventStatusLegend[eventStatus].label}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-sm">Date:</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

const RequestTypeLegend = {
  maintainer: {
    label: "Maintainer Request",
  },
  organization: {
    label: "Organization Verification Request",
  },
  request: {
    label: "Aid or Donation Request",
  },
} as const;

function Request({
  requestId,
  eventStatus,
  eventType,
  date,
}: {
  requestId: string;
  eventStatus: "received" | "onGoing" | "completed" | "cancelled";
  eventType: "maintainer" | "organization" | "request";
  date: string;
}) {
  return (
    <div className="w-full rounded-lg border p-6">
      <div className="flex items-center justify-between">
        <div>
          <p>
            {RequestTypeLegend[eventType].label} - #{requestId}
          </p>

          <div className="flex items-center gap-2">
            <p className="text-sm">Status:</p>
            <p
              className={
                "font-bold " + `${EventStatusLegend[eventStatus].color}`
              }
            >
              {EventStatusLegend[eventStatus].label}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-sm">Date:</p>
            <p>{date}</p>
          </div>
        </div>

        <div>
          <Button variant="outline" disabled>
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}

export default async function Dashboard() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <p>Dashboard</p>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <p className="mb-4 text-2xl">Your recent requests</p>

          <div className="flex flex-col gap-4">
            {/* <p className="text-center font-bold text-lg py-6">No Recent Requests</p> */}

            {new Array(5).fill(undefined).map((item, idx) => {
              return (
                <Request
                  key={idx}
                  requestId={idx.toString()}
                  eventStatus="onGoing"
                  eventType={"organization"}
                  date={new Date().toISOString()}
                />
              );
            })}
          </div>
        </div>

        <div className="col-span-2">
          <p className="mb-4 text-2xl">Recent Events</p>

          <div className="flex flex-col gap-4">
            {new Array(10).fill(undefined).map((item, idx) => {
              return (
                <Event
                  key={idx}
                  eventStatus={"received"}
                  eventType="request"
                  date={new Date().toISOString()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
