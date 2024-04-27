import React from "react";

export default function ButtonPrimary({
  children,
  addClass,
}: {
  children: React.ReactNode;
  addClass?: string;
}) {
  return (
    <button
      className={
        "text-white-500 hover:shadow-orange-md rounded-lg bg-orange-500 px-12 py-3 font-semibold outline-none transition-all lg:px-16 lg:py-4 " +
        addClass
      }
    >
      {children}
    </button>
  );
}
