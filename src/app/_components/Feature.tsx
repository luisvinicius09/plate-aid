"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/helpers/getScrollAnimation";
import { Button } from "./ui/button";
import Link from "next/link";

type FeatureProps = {
  textSide?: "right" | "left";
  imageSrc: string;
  title: string;
  description: string;
  moreDescription?: string;
  buttonText: string;
  buttonHref: string;
};

const Feature = ({
  textSide = "right",
  imageSrc,
  title,
  description,
  moreDescription,
  buttonText,
  buttonHref,
}: FeatureProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mx-auto mb-6 mt-8 max-w-screen-xl px-6 sm:mb-14 sm:mt-14 sm:px-8 lg:px-16">
      <div className="p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8  sm:grid-flow-col sm:grid-cols-2">
        {textSide === "right" ? (
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <Image
                src={imageSrc}
                alt="Image"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        ) : null}

        <ScrollAnimationWrapper>
          <motion.div
            className={
              "flex w-full flex-col justify-center lg:w-9/12 " + textSide ===
              "right"
                ? "ml-auto"
                : "mr-auto"
            }
            variants={scrollAnimation}
          >
            <h3 className="text-black-600 text-3xl font-medium leading-relaxed lg:text-4xl">
              {title}
            </h3>

            <p className="text-black-500 my-2">{description}</p>

            <p>{moreDescription}</p>
          </motion.div>

          <motion.div
            variants={scrollAnimation}
            className={
               textSide === "right"
                ? "mt-6 flex justify-end"
                : "mt-6 flex justify-start"
            }
          >
            <Link href={buttonHref}>
              <Button>{buttonText}</Button>
            </Link>
          </motion.div>
        </ScrollAnimationWrapper>

        {textSide === "left" ? (
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <Image
                src={imageSrc}
                alt="Image"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        ) : null}
      </div>
    </div>
  );
};

export default Feature;
