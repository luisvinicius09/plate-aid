"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/helpers/getScrollAnimation";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-16"
      id="feature"
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
            className="ml-auto flex w-full flex-col items-end justify-center lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-black-600 text-3xl font-medium leading-relaxed lg:text-4xl">
              We Provide Many Features You Can Use
            </h3>
            <p className="text-black-500 my-2">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="text-black-500 ml-8 list-inside self-start">
              {features.map((feature, index) => (
                <motion.li
                  className="circle-check custom-list relative"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
