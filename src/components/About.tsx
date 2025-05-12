
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">Wikimedia</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"/>
                      <path d="M7 7h.01"/>
                      <path d="M17 7h.01"/>
                      <path d="M7 17h.01"/>
                      <path d="M17 17h.01"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">CKA</h3>
                  <p className="text-sm text-muted-foreground">Certified Kubernetes Administrator</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 17 2 2 4-4"/>
                      <path d="m3 7 2 2 4-4"/>
                      <path d="M13 6h8"/>
                      <path d="M13 12h8"/>
                      <path d="M13 18h8"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">AWS</h3>
                  <p className="text-sm text-muted-foreground">Community Builder</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">SloConf</h3>
                  <p className="text-sm text-muted-foreground">Captain for Africa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
