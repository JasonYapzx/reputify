"use client"
import { NextPage } from 'next';


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const FormPage: NextPage = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create new post</CardTitle>
        <CardDescription>Make a prediction</CardDescription>
      </CardHeader>
      <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Text" {...field} />
              </FormControl>
              <FormDescription>
                Your messsage
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </CardContent>
      </Card>
          </div>
  );
};

export default FormPage;