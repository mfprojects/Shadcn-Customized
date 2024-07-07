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
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-light leading-tight tracking-wide text-indigo-100 text-center bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent mb-6 lg:mb-8">
        Create your account
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 lg:space-y-8"
        >
          <FormField
            control={form.control}
            name="displayname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-indigo-100">
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
                <FormLabel className="font-bold text-indigo-100">
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
            <Button
              type="submit"
              size="lg"
              className="justify-center shadow-md shadow-color10/30 bg-color10"
            >
              Create Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
