"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Header() {
  const [activeLink, setActiveLink] = useState<unknown>(null);

  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 z-30 w-full bg-white transition-all " +
          (scrollActive ? " pt-0 shadow-md" : " pt-4")
        }
      >
        <nav className="mx-auto grid max-w-screen-xl grid-flow-col px-6 py-3 sm:px-8 sm:py-4 lg:px-16">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <Image
                alt="Plate Aid"
                src="/plate-aid-black.png"
                width={154}
                height={160}
              />
            </Link>
          </div>

          <ul className="text-black-500 col-start-4 col-end-8 hidden items-center  lg:flex">
            <LinkScroll
              activeClass="active"
              to="standard"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onSetActive={() => {
                setActiveLink("standard");
              }}
              className={
                "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                (activeLink === "standard"
                  ? " animation-active text-slate-500 "
                  : " text-black-500 a hover:text-slate-500")
              }
            >
              Anyone
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="organization"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onSetActive={() => {
                setActiveLink("organization");
              }}
              className={
                "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                (activeLink === "organization"
                  ? " animation-active text-slate-500 "
                  : " text-black-500 hover:text-slate-500 ")
              }
            >
              For Organization
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="maintainers"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onSetActive={() => {
                setActiveLink("maintainers");
              }}
              className={
                "animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2" +
                (activeLink === "maintainers"
                  ? " animation-active text-slate-500 "
                  : " text-black-500 hover:text-slate-500 ")
              }
            >
              For Maintainers
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 flex items-center justify-end font-medium">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
