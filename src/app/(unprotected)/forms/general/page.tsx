"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  requestType: z.enum(["aid_request", "donation"]).default("aid_request"),
  description: z.string().optional(),
  coordinates: z.string().optional(),
});

export default function GeneralForm() {
  const Map = dynamic(() => import("../_components/GeneralRequestMap"), {
    ssr: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      requestType: "aid_request",
      description: "",
      coordinates: "",
    },
  });

  function onSubmit() {
    console.log("works");
  }

  function getCoordinatesFromMap(coords: string) {
    form.setValue("coordinates", coords);
  }

  return (
    <div className="container mx-auto my-32 px-16 ">
      <div className="text-center">
        <h1 className="text-3xl">Help others, by helping us out</h1>

        <p>
          Are you starving or do you know someone that is? Send us your request
          and information
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-[32rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <p className="">Let start by sharing some personal information</p>

            <div className="flex flex-col gap-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>

                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>

                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>

                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <hr className="my-6" />

            <div className="flex flex-col gap-4">
              <p>Now tell us more about your request</p>

              <FormField
                name="requestType"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Request Type *</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Request Type" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="aid_request">
                          Aid Request (request for food)
                        </SelectItem>
                        <SelectItem value="donation">Donation</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="A little description about your request"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <p className="font-bold">Request Location *</p>
                <p className="text-md">
                  * If you requesting aid, tell us where you are. If are
                  donating tell us, where we can collect the aid.
                </p>
                <p className="font-bold">
                  There is no need to be precise on the map, we will contact you
                  later.
                </p>

                <Map passCoordinatesToForm={getCoordinatesFromMap} />

                <FormField
                  name="coordinates"
                  control={form.control}
                  disabled
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Coordinates</FormLabel>

                      <FormControl>
                        <Input placeholder="Coordinates" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <hr className="my-4" />

              <div>
                <p className="font-bold">Request Items *</p>
                <p>
                  Here you will choose what are your needs or what you are
                  donating.
                </p>

                <p>choose products to donate or request</p>
              </div>

              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
