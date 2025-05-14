
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 lg:mb-8">
            Ehi Enabulele
            <br /> <span className="text-wikimedia">Software Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 lg:mb-10">
            Software Engineer, passionate about open data and engineering systems that support data products at scale
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-wikimedia hover:bg-wikimedia-dark text-white px-8 py-6" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="px-8 py-6" asChild>
              <a href="#publications">Read My Articles</a>
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24">
            <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <p>Learn more about me</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce mt-2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
