"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/helpers/getScrollAnimation";
import { Button } from "./ui/button";
import Link from "next/link";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-16"
      id="maintainers"
    >
      <div className="p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="ml-auto flex w-full flex-col justify-center lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-black-600 text-3xl font-medium leading-relaxed lg:text-4xl">
              We need maintainers
            </h3>

            <p className="text-black-500 my-2">
              Maintainers come from all walks of life: volunteers, activists,
              community leaders, and compassionate individuals eager to make a
              tangible difference.
            </p>

            <p>
              Whether you aree a seasoned advocate or someone new to the cause,
              if you have a heart for helping others, you can be a maintainer.
            </p>
          </motion.div>

          <motion.div variants={scrollAnimation} className="flex justify-end">
            <Link href="/forms/maintainers">
              <Button>Send us your information</Button>
            </Link>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
