'use client';
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormDescription,
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
    <div className="flex flex-row justify-center min-w-max h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 flex flex-col justify-between space-y-8 p-8 rounded-lg"
        >
          <FormField
            control={form.control}
            name="displayname"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="font-bold">Display Name</FormLabel>
                <FormControl className="">
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
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex-1 flex justify-center gap-4 pb-8">
            <Button
              size="lg"
              className="shadow-blue-400/50 bg-gradient-to-r from-sky-400 to-blue-500"
            >
              Create Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

/*
<div className="flex justify-center gap-4">
                        <Button variant={'secondary'}>Learn more</Button>
                        <Button className="bg-gradient-to-r from-sky-400 to-blue-500">
                          Enroll Now
                        </Button>
                      </div>
*/
