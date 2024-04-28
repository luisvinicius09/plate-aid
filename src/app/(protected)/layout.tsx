import React from "react";
import Sidebar from "../_components/Sidebar";
import Image from "next/image";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-manrope flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="w-full">
        <div className="fixed right-24 top-96 z-20">
          <Image
            alt=""
            src="/globe-black.svg"
            width={1000}
            height={1000}
            className="greyscale select-none object-cover opacity-10"
          />
        </div>

        <div className="container relative z-30 mx-2 mb-16 mt-16 rounded-lg bg-white py-8 shadow-lg xl:mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
