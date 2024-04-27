"use client";

import { Form } from "@/app/_components/ui/form";
import { useForm } from "react-hook-form";

export default function GeneralForm() {
  const form = useForm();

  return (
    <div className="container mx-auto my-32 px-16 ">
      <div className="text-center">
        <h1 className="text-3xl">Help others, by helping us out</h1>

        <p>
          Are you starving or do you know someone that is? Send us your request
          and information
        </p>
      </div>

      <div className="">
        <Form {...form}>
          <form></form>
        </Form>
      </div>
    </div>
  );
}
