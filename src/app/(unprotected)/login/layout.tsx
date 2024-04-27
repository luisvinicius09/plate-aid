import Image from "next/image";
import React from "react";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-manrope grid h-screen grid-cols-3 grid-rows-1">
      <div className="col-span-1 hidden flex-col items-center justify-around bg-gray-200 bg-gradient-to-b py-4 lg:flex">
        <a href="/">
          <Image
            alt="Plate Aid"
            src="/plate-aid-black.png"
            width={154}
            height={160}
          />
        </a>

        <div className="relative flex w-full items-center justify-center px-16">
          <Image
            alt=""
            src="/images/login_image.png"
            objectFit="cover"
            width={335}
            height={356}
            loading="eager"
          />
        </div>

        <div className="flex flex-col gap-4 px-2 text-center font-medium">
          <h2 className="text-3xl">
            We help food be <br /> distributed everywhere
          </h2>

          <p className="px-8">
            Bridging the Gap Between Hunger and Hope, One Nourishing Meal, One
            Heartfelt Connection at a Time
          </p>
        </div>
      </div>

      <div className="col-span-3 flex flex-col items-center justify-center gap-8 lg:col-span-2">
        {children}
      </div>
    </div>
  );
}
