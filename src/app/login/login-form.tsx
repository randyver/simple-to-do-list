'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "~/components/ui/form";

// Define zod schema
const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();

  async function onSubmit(data: LoginFormValues) {
 

    // Destructure form data
    const { email, password } = data;

    // Create form data
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // Make API request
    const res = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });


    router.push("/");
    router.refresh();
  }


  return (
    <Card className="mx-6 w-full md:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12">
      <CardHeader><CardTitle className="text-center lg:text-2xl text-bold xl:text-4xl">Login</CardTitle></CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 mx-auto max-w-md"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border border-black text-black"
                      type="text"
                      placeholder="Username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border border-black text-black"
                      type="password"
                      placeholder="Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormDescription>
              <Link href="/forgot-password" className="text-blue-400">Lupa Password?</Link>
            </FormDescription>
            <Button type="submit" className="mt-12 bg-blue-400">Login</Button>
          </form>
        </Form>
        <p className="text-center mt-4">
          Belum memiliki akun? <Link href="/sign-up" className="text-blue-400">Sign Up</Link>
        </p>
      </CardContent>
    </Card>
  );
}
