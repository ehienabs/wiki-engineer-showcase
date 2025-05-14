
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-wikimedia">About Me</h2>
        <p className="section-subtitle">
          Committed to managing high-volume APIs and maintaining Cloud and Kubernetes Native applications.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div className="order-2 md:order-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-wikimedia mb-4">Here's Me!</h3>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                I am passionate about architecting and deploying scalable applications for delivering large volumes 
                of data through APIs. My primary focus is ensuring the longevity of software through resilient design,
                a comprehensive monitoring strategy and smooth developer experience.
              </p>
              <p>
                My work transverse both enterprise and small scale users, having provided support for software with over a billion downloads,
                building developer friendly software delivery platform and authoring comprehensive technical documentation.
              </p>
              <p>
                I have collaborated with agile globally remote teams to design, build and manage Cloud and Kubernetes native applications.
              </p>
              <p>
                I'm passionate about open source and knowledge sharing.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/ehienabs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" style={{animationDelay: "0.1s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold">Career</h3>
                    <p className="text-sm text-muted-foreground">Professional Experience</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      Visit
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#certifications" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.2s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <h3 className="font-bold">Certifications</h3>
                    <p className="text-sm text-muted-foreground">Technical Credentials</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      Learn more
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#community" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.3s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Community Service</h3>
                    <p className="text-sm text-muted-foreground">Community Engagements</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      View communities
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="#speaking" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full border-2 hover:border-wikimedia hover:shadow-md" style={{animationDelay: "0.4s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2"
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Public Appearances</h3>
                    <p className="text-sm text-muted-foreground">Media</p>
                    <Badge variant="outline" className="mt-2 border-2 hover:border-wikimedia hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      See More
                    </Badge>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;