import React from "react";
import Sidebar from '../_components/Sidebar';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-grey font-manrope flex min-h-screen">
      <Sidebar />

      <div className="w-full py-8 pt-16">{children}</div>
    </div>
  );
}
