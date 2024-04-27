"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { useToast } from '@/app/_components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email(),
});

export default function SignInPage() {
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn("email", {
      email: values.email,
      redirect: false,
    })
      .then((res) => {
        if (res?.ok && res?.url && !res?.error) {
          router.push(`/login/verify-code/?email=${values.email}`);
          return;
        }

        if (res?.error) {
          toast({
            title: "Uh oh! Algo de errado ocorreu.",
            description: "Tente novamente mais tarde ou contate o suporte.",
            variant: "destructive",
            duration: 6000,
          });

          return;
        }
      })
      .catch(() => {
        toast({
         title: "Uh oh! Algo de errado ocorreu.",
         description: "Tente novamente mais tarde ou contate o suporte.",
         variant: "destructive",
         duration: 6000,
        });
      });
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>Plate Aid</CardTitle>
          <CardDescription>Log In</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full mt-6"
              >
                {form.formState.isSubmitting ? <p>Wait</p> : <p>Log In</p>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
