
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-secondary/50 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about open knowledge and building technology that democratizes access to information
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <div className="order-2 md:order-1 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                As a Software Engineer at Wikimedia Enterprise, I work at the intersection of 
                open knowledge and technology. My focus is on developing and maintaining the data 
                pipelines and APIs that make Wikimedia content more accessible to organizations worldwide.
              </p>
              <p>
                With a background in distributed systems and cloud architecture, I'm passionate 
                about building scalable solutions that can handle the massive data requirements of 
                Wikimedia projects while maintaining high availability and performance.
              </p>
              <p>
                I believe in the power of open source and knowledge sharing. When I'm not optimizing 
                our data processing pipelines, you'll find me contributing to open-source 
                projects or mentoring new developers.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">3+ Years</h3>
                  <p className="text-sm text-muted-foreground">At Wikimedia</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
                      <path d="M12 2v2"/>
                      <path d="M12 22v-2"/>
                      <path d="m17 20.66-1-1.73"/>
                      <path d="M11 10.27 7 7"/>
                      <path d="m20.66 17-1.73-1"/>
                      <path d="m3.34 7 1.73 1"/>
                      <path d="M14 12h8"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">15+ Projects</h3>
                  <p className="text-sm text-muted-foreground">Delivered</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 17 2 2 4-4"/>
                      <path d="m3 7 2 2 4-4"/>
                      <path d="M13 6h8"/>
                      <path d="M13 12h8"/>
                      <path d="M13 18h8"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">50+ Contributions</h3>
                  <p className="text-sm text-muted-foreground">Open Source</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="18" r="3"/>
                      <path d="M3 9a3 3 0 0 1 4 0 3 3 0 0 0 4 0 3 3 0 0 1 4 0 3 3 0 0 0 4 0 3 3 0 0 1 4 0"/>
                      <path d="M3 6a3 3 0 0 1 4 0 3 3 0 0 0 4 0 3 3 0 0 1 4 0 3 3 0 0 0 4 0 3 3 0 0 1 4 0"/>
                      <path d="M3 3a3 3 0 0 1 4 0 3 3 0 0 0 4 0 3 3 0 0 1 4 0 3 3 0 0 0 4 0 3 3 0 0 1 4 0"/>
                    </svg>
                  </div>
                  <h3 className="font-bold">40+ TB</h3>
                  <p className="text-sm text-muted-foreground">Data Processed</p>
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
