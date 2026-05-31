import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
      privacy: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter font-medium text-dark-gray">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-mid-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...field}
                />
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
              <FormLabel className="font-inter font-medium text-dark-gray">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  type="email"
                  className="w-full px-4 py-2 border border-mid-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter font-medium text-dark-gray">
                Service of Interest
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full px-4 py-2 border border-mid-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="defamation-removal">
                      Online Defamation Removal
                    </SelectItem>
                    <SelectItem value="content-suppression">
                      Content Suppression & De-indexing
                    </SelectItem>
                    <SelectItem value="digital-protection">
                      Digital Footprint Protection
                    </SelectItem>
                    <SelectItem value="private-image-removal">
                      Private Image Removal
                    </SelectItem>
                    <SelectItem value="other">
                      Other (Please specify)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-inter font-medium text-dark-gray">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your situation..."
                  className="w-full px-4 py-2 border border-mid-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="w-4 h-4 text-primary"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm text-dark-gray">
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-secondary hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and understand my data will be kept confidential.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white font-inter font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
        >
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
