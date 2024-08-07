'use client';
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  displayname: z.string().min(5, {
    message: 'Display Name must be at least 5 characters.',
  }),
  email: z
    .string()
    .min(5, {
      message: 'Email must be at least 5 characters long',
    })
    .email('This is not a valid email'),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center w-full max-w-3xl mx-auto">
      <h2 className="flex-auto text-2xl font-light leading-tight tracking-wide text-textDark text-center mb-6 lg:mb-8">
        Create your account
      </h2>
      <div className="flex-auto justify-center content-center items">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col px-2 lg:px-0 space-y-6 lg:space-y-8"
          >
            <FormField
              control={form.control}
              name="displayname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-textDark">
                    Display Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Display Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-textDark">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center mt-4 lg:mt-6">
              <Button type="submit" size="lg" className="submitButton">
                Create Account
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
