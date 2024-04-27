import Footer from "@/app/_components/Layout/Footer";
import Header from "@/app/_components/Layout/Header";
import React from "react";

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
