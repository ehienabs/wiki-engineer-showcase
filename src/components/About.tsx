
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Committed and exemplary performer in managing high-volume APIs and maintaining Cloud and Kubernetes Native applications
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div className="order-2 md:order-1 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                As a Software Engineer at Wikimedia, I architect and deploy scalable applications for delivering large volumes 
                of data through APIs, optimizing performance and reliability to effectively meet the demands of our user base.
              </p>
              <p>
                Previously at Calyptia, I worked as a Technical Support Engineer troubleshooting issues related to
                Fluent Bit software and providing technical consultation on observability pipelines for Telemetry data 
                in distributed environments.
              </p>
              <p>
                I have experience as a DevOps Intern at Stakater, where I collaborated with an agile team to design, build 
                and manage Kubernetes native applications, delivering highly available and scalable cloud-native solutions for enterprise customers.
              </p>
              <p>
                I'm passionate about open source and knowledge sharing, and I'm proud to serve as the Captain for Africa at SloConf, 
                a conference focused on Service Level Objectives.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://enterprise.wikimedia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full" style={{animationDelay: "0.1s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold">Wikimedia</h3>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                    <Badge variant="outline" className="mt-2">
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
                href="https://www.cncf.io/certification/cka/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full" style={{animationDelay: "0.2s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <h3 className="font-bold">Certified Kubernetes Administrator</h3>
                    <p className="text-sm text-muted-foreground">CNCF</p>
                    <Badge variant="outline" className="mt-2">
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
                href="https://aws.amazon.com/developer/community/community-builders/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full" style={{animationDelay: "0.3s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">AWS</h3>
                    <p className="text-sm text-muted-foreground">Community Builder</p>
                    <Badge variant="outline" className="mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      Join community
                    </Badge>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="https://www.sloconf.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-transform hover:scale-105"
              >
                <Card className="p-4 animate-fade-in h-full" style={{animationDelay: "0.4s"}}>
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">SloConf</h3>
                    <p className="text-sm text-muted-foreground">Conference Speaking</p>
                    <Badge variant="outline" className="mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      View talks
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
