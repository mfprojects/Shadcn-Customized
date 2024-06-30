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
    <div className="flex flex-col h-full w-full">
      <div className="relative h-32 sm:h-32 md:h-44 lg:h-24 mx-8 ">
        <h2 className="absolute inset-x-0 text-2xl font-light text-wrap text-center px-4 pb-8 pt-8 sm:pb-0 bg-gradient-to-r from-indigo-50 to-blue-100 bg-clip-text text-transparent">
          Create your account
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-grow justify-between space-y-8 pb-8 pt-0 mx-3 rounded-lg"
        >
          <div className="flex-auto flex flex-col space-y-8 px-8 mb-8 lg:mb-0 rounded-lg justify-center items-center lg:gap-2">
            <div className="w-full max-w-md">
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
            </div>
            <div className="w-full max-w-md">
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
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="justify-center shadow-md shadow-slate-300/25 bg-gradient-to-tr from-textColor to-slate-500"
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
