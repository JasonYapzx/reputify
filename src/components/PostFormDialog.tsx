import { Button } from "@/components/ui/button";
// import {
//   FormProvider
// } from "react-hook-form";
// import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { CreateEventSchema } from "./validation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import React from "react";
import { Textarea } from "./ui/textarea";
// import { cn } from "@/utils/utils";
import { useRouter } from "next/navigation";

const PostFormDialog: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  // if (isDesktop) {
  //   return (
  //     <div className={className}>
  //       <Dialog open={open} onOpenChange={setOpen}>
  //         <DialogTrigger asChild>
  //           <Button
  //             type="button"
  //             variant="circleDefault"
  //             size="appnav"
  //             className="hover:rotate-180 transition duration-500 ease-in-out"
  //           >
  //             {icon}
  //           </Button>
  //         </DialogTrigger>
  //         <DialogContent className="sm:max-w-[425px]">
  //           <DialogHeader>
  //             <DialogTitle>Add Event</DialogTitle>
  //           </DialogHeader>
  //           <EventForm />
  //         </DialogContent>
  //       </Dialog>
  //     </div>
  //   );
  // }

  return (
    <div className="">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            type="button"
            // variant="circleDefault"
            // size="appnav"
            className="hover:rotate-180 transition duration-500 ease-in-out"
          >
            Add {/* TODO: add icon */}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="rounded-t-3xl h-content px-4">
          <DrawerHeader className="text-left">
            <DrawerTitle>Add Event</DrawerTitle>
          </DrawerHeader>
          <EventForm />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const formSchema = z.object({
  content: z.string(),
  timeframe: z.string(),
  token: z.string(),
  prediction_value: z.string(),
  prediction_sign: z.string()
})



function EventForm() {
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const [userId, setUserId] = useLocalStorage('userId', '')
    const userId = 1;

    const details = {
      ...values,
      timeframe: parseInt(values.timeframe),
      prediction_value: parseInt(values.prediction_value),
      prediction_sign: parseInt(values.prediction_sign),  
    }


    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, ...details}),
      });

      if (response.ok) {
        toast({
          description: (
            <p className="mt-2 w-[340px] rounded-md text-foreground bg-background p-4">
              <b>Post has been created!</b>
            </p>
          ),
        });

        // setFormData({ name: '', email: '' }); // Clear form after submission
      } else {
        const data = await response.json();
      }
    } catch (error) {
      console.log('An error occurred while submitting the form');
    }
  
    router.push(`/dashboard`);
    return;
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="pb-0">
            {/* <ScrollArea className="my-2 pt-2 pb-4"> */}
              <div className="flex flex-col space-y-2 px-4">
                <FormField
                  control={form.control}
                  name="token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="token"
                        className="flex-row flex font-bold text-lg"
                      >
                        Token
                      </FormLabel>
                      <div className="flex flex-col space-y-2">
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Add title"
                            id="token"
                            className="text-md"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      name="timeframe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            htmlFor="timeframe"
                            className="flex-row flex font-bold text-lg"
                          >
                            Duration
                          </FormLabel>
                          <div className="flex flex-col space-y-2">
                            <FormControl>
                              <Input {...field} id="" type="number" />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      name="prediction_value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            htmlFor="prediction_value"
                            className="flex-row flex font-bold text-lg"
                          >
                            Prediction Value
                          </FormLabel>
                          <div className="flex flex-col space-y-2">
                            <FormControl>
                              <Input {...field} id="" type="number" />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      name="prediction_sign"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            htmlFor="prediction_sign"
                            className="flex-row flex font-bold text-lg"
                          >
                            Prediction Sign
                          </FormLabel>
                          <div className="flex flex-col space-y-2">
                            <FormControl>
                              <Input {...field} id="" type="number" />
                            </FormControl>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="content"
                        className="flex-row flex font-bold text-lg"
                      >
                        Event Description
                      </FormLabel>
                      <div className="flex flex-col space-y-2">
                        <FormControl>
                          <Textarea {...field} id="content" />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            {/* </ScrollArea> */}
          </div>
          <DrawerFooter className="flex flex-row justify-between w-full">
            <DrawerClose>
              <Button
                type="button"
                variant="ghost"
                className="ml-auto font-semibold"
                onClick={() => console.log('test')}
              >
                Cancel
              </Button>
            </DrawerClose>
            <Button type="submit" className="ml-auto font-semibold">
              Create Event
            </Button>
          </DrawerFooter>
        </form>
      </Form>
  );
};

export default PostFormDialog;
