import React from "react";

export default function ButtonOutline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-white-500 hover:text-white-500 hover:shadow-orange rounded-l-full rounded-r-full border border-orange-500 px-5 py-2 font-medium capitalize tracking-wide text-orange-500 outline-none transition-all hover:bg-orange-500 sm:px-8 ">
      {children}
    </button>
  );
}
