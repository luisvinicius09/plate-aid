import {
  HomeIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sticky top-0 h-screen">
      <aside className="bg-brand-white hidden h-full w-64 flex-col space-y-2 border-r-2 p-2 py-4 md:flex">
        <div className="flex items-center justify-center">
          <a href="/">
            <Image
              src={"/plate-aid-black.png"}
              width="115"
              height="60"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </a>
        </div>

        <hr />

        <Link
          href="/dashboard"
          className="hover:text-brand-green flex space-x-1 rounded-md px-2 py-3 hover:bg-gray-100"
        >
          <span className="text-2xl">
            <ListBulletIcon className="h-6 w-6" />
          </span>

          <span>Dashboard</span>
        </Link>

        <Link
          href="/dashboard/aid-requests"
          className="hover:text-brand-green flex space-x-1 rounded-md px-2 py-3 hover:bg-gray-100"
        >
          <span className="text-2xl">
            <ListBulletIcon className="h-6 w-6" />
          </span>

          <span>Aid Requests</span>
        </Link>

        <Link
          href="/dashboard/donations-requests"
          className="hover:text-brand-green flex space-x-1 rounded-md px-2 py-3 hover:bg-gray-100"
        >
          <span className="text-2xl">
            <ListBulletIcon className="h-6 w-6" />
          </span>

          <span>Donation Requests</span>
        </Link>

        <Link
          href="/dashboard/org-requests"
          className="hover:text-brand-green flex space-x-1 rounded-md px-2 py-3 hover:bg-gray-100"
        >
          <span className="text-2xl">
            <ListBulletIcon className="h-6 w-6" />
          </span>

          <span>Org. Requests</span>
        </Link>

        <Link
          href="/dashboard/maintainers-requests"
          className="hover:text-brand-green flex space-x-1 rounded-md px-2 py-3 hover:bg-gray-100"
        >
          <span className="text-2xl">
            <ListBulletIcon className="h-6 w-6" />
          </span>

          <span>Maintainers Requests</span>
        </Link>

        <Link
          href="/dashboard/users"
          className="hover:text-brand-green flex space-x-1 rounded-md px-2 py-3 hover:bg-gray-100"
        >
          <span className="text-2xl">
            <ListBulletIcon className="h-6 w-6" />
          </span>

          <span>Users</span>
        </Link>

        <div className="flex h-full flex-col items-center justify-end">
          <p className="text-sm text-gray-400">
            ©{new Date().getFullYear()} - PlateAid
          </p>
        </div>
      </aside>
    </div>
  );
}
