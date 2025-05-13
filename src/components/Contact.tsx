
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Send me a message!
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <Card className="p-6 animate-fade-in">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-xl font-bold">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Adekunle Ciroma" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="adekunle@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Let me know how I can help..."
                    className="min-h-32"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-wikimedia hover:bg-wikimedia-dark">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="space-y-4">
              <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="flex p-4">
                  <div className="w-10 h-10 bg-wikimedia/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wikimedia">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Email</h4>
                    <p className="text-muted-foreground">enabs.ehi@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="flex p-4">
                  <div className="w-10 h-10 bg-wikimedia/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wikimedia">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">GitHub</h4>
                    <p className="text-muted-foreground">https://github.com/ehienabs</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <CardContent className="flex p-4">
                  <div className="w-10 h-10 bg-wikimedia/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wikimedia">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">LinkedIn</h4>
                    <p className="text-muted-foreground">www.linkedin.com/in/ehienabs</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
