
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  return (
    <section id="community" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container bg-gray-100">
        <h2 className="section-title">Community Service</h2>
        <p className="section-subtitle">
          Actively contributing to and supporting the growth of technical communities
        </p>
        
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">AWS Community Builder</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AWS Community Builder passionate about sharing AWS knowledge and connecting with the AWS community.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline ">Cloud Computing</Badge>
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">AWS</Badge>
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">Technical Writing</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-wikimedia text-white hover:bg-wikimedia-dark" asChild>
                <a href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=Ehi%2BEnabulele&cb-cards.q_operator=AND" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">SLOConf Captain Africa</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Serving as the Africa regional captain for SLOConf, a conference focused on Service Level Objectives and reliability engineering practices.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">SRE</Badge>
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">SLIs</Badge>
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">SLOs</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-wikimedia text-white hover:bg-wikimedia-dark"  asChild>
                <a href="https://www.nobl9.com/resources/sloconf-captains" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-wikimedia rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="m2 12 5 3-2 4.5"/>
                  <path d="M17 3.34a10 10 0 0 1 0 17.32"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fluent Bit Community</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Active contributor to the Fluent Bit community, sharing knowledge and helping others with observability and logging pipelines.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">Open Source</Badge>
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">Observability</Badge>
                <Badge className="overflow-hidden h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" variant="outline">Knowledge Sharing</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-wikimedia text-white hover:bg-wikimedia-dark " >
                Community Member
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;
