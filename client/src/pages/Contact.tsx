import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { contactFormSchema } from "@/lib/validationSchemas";
import { toast } from "react-toastify";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
      privacy: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast.success(
        "Message sent successfully\nWe're reviewing your request and will get back to you.",
      );

      form.reset();
    },
    onError: (error) => {
      toast.error("Failed to send message\nPlease try again later.");
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sifabora Digital Reputation Protection</title>
        <meta
          name="description"
          content="Get in touch with Sifabora's digital reputation protection experts for a free consultation about your online reputation concerns."
        />
        <meta
          property="og:title"
          content="Contact Sifabora | Digital Reputation Protection"
        />
        <meta
          property="og:description"
          content="Connect with Sifabora's team for expert help with your digital reputation protection needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sifabora.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Reach out for a confidential consultation about your digital
              reputation concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <h2 className="font-bold text-2xl text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-dark-gray mb-8">
                  Our team is ready to answer your questions and discuss how we
                  can help protect and restore your digital reputation.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                      <i className="fas fa-phone-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Phone</h4>
                      <p className="text-dark-gray">
                        +254 780 000 002 / +254 780 000 004 / +254 704 000 004 /
                        +254 704 000 002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Email</h4>
                      <p className="text-dark-gray">info@sifabora.africa</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">Hours</h4>
                      <p className="text-dark-gray">24 / 7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-bold text-2xl text-primary mb-6">
                    Send Us a Message
                  </h3>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-medium text-dark-gray">
                                Full Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  {...field}
                                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                              <FormLabel className="font-medium text-dark-gray">
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="your.email@example.com"
                                  type="email"
                                  {...field}
                                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-dark-gray">
                              Service of Interest
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-dark-gray">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your situation..."
                                {...field}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px] resize-none"
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
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-dark-gray">
                                I agree to the{" "}
                                <a
                                  href="/privacy-policy"
                                  className="text-secondary hover:underline"
                                >
                                  Privacy Policy
                                </a>{" "}
                                and understand my data will be kept
                                confidential.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
                      >
                        {contactMutation.isPending
                          ? "Sending..."
                          : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-3xl text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  What happens after I submit my contact form?
                </h3>
                <p className="text-dark-gray">
                  One of our specialists will review your inquiry and reach out
                  to you within 24 hours (during business days). We'll typically
                  contact you via email first to schedule a detailed phone
                  consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  Is my consultation really free?
                </h3>
                <p className="text-dark-gray">
                  Yes, your initial consultation is completely free and comes
                  with no obligation. We want to understand your situation fully
                  before recommending any services or solutions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  How private is the information I share with you?
                </h3>
                <p className="text-dark-gray">
                  All information shared with us is kept strictly confidential.
                  We use secure communication channels and have strict data
                  protection policies in place. We never share your information
                  with third parties without your explicit consent.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  Do you work with clients outside of the United States?
                </h3>
                <p className="text-dark-gray">
                  Yes, we work with clients globally. Digital reputation issues
                  transcend borders, and our team has experience addressing
                  content hosted in multiple countries and languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
