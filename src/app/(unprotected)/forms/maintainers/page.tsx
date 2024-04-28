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
import { Textarea } from "@/app/_components/ui/textarea";
import { useRouter } from 'next/navigation';
import { useToast } from '@/app/_components/ui/use-toast';
import { api } from '@/trpc/react';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  description: z.string().optional(),
  coordinates: z.string().optional(),
});

export default function MaintainersForm() {
  const router = useRouter();

  const { toast } = useToast();

  const Map = dynamic(() => import("../_components/GeneralRequestMap"), {
    ssr: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      coordinates: "",
    },
  });

  const newMaintainerMutation = api.forms.newMaintainerRequest.useMutation({
    onSuccess: () => {
      router.push("/forms/thank-you");
    },
    onError: () => {
      console.error("something went wrong creating the order");

      toast({
        title: "Uh oh! Something went wrong",
        description: "Try again later or contact the support team",
        variant: "destructive",
        duration: 6000,
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    return await newMaintainerMutation.mutateAsync(values);
  }

  function getCoordinatesFromMap(coords: string) {
    form.setValue("coordinates", coords);
  }

  return (
    <div className="container mx-auto my-32 px-16 ">
      <div className="text-center">
        <h1 className="text-3xl">We need volunteers</h1>

        <p>
          Join Our Community: Become an Essential Piece in the Puzzle of
          Compassion,
          <br /> Helping Us Share Nourishment and Support Where it is Needed
          Most.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-[32rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <p className="text-xl">
              Let start by sharing some personal information
            </p>

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
              <p className="text-2xl">Now tell us more about you</p>

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>

                    <p className="text-sm">
                      Tell us about your background, your experiences or
                      yourseft
                    </p>

                    <FormControl>
                      <Textarea
                        placeholder="A little description about you"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <p>Tell us where you are *</p>

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

              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
