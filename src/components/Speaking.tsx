
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Speaking = () => {
  const speeches = [
    {
      title: "SDK Secrets: Unlocking API Magic",
      event: "GopherCon Africa",
      description: 
        "A technical deep-dive into designing and implementing effective SDKs for APIs, focusing on best practices for developer experience.",
      link: "https://speakerdeck.com/ehienabs/sdk-secrets-unlocking-api-magic",
      tags: ["API Development", "Go", "SDK Design"]
    },
    {
      title: "KNOWLEDGE IS A HUMAN RIGHT: EMBRACING THE MOVEMENT STRATEGY",
      event: "WikiCon Nigeria",
      description:
        "A passionate talk on the importance of knowledge accessibility and how the Wikimedia movement strategy addresses knowledge equity worldwide.",
      link: "https://speakerdeck.com/ehienabs/knowledge-is-a-human-right-embracing-the-movement-strategy",
      tags: ["Knowledge Equity", "Wikimedia", "Open Knowledge"]
    },
    {
      title: "Women in Tech Panel",
      event: "Moniepoint Women-in-Tech Mixer",
      description:
        "Participated in a panel discussion on the experiences and opportunities for women in the technology sector, sharing insights and advice for aspiring tech professionals.",
      link: "https://moniepoint.com/blog/moniepoint-wit-dream-ten",
      tags: ["Women in Tech", "Panel", "Career Development"]
    },
    {
      title: "Service Level Objectives and Indicators",
      event: "SLOConf",
      description:
        "As Captain for Africa at SLOConf, presented on setting effective SLOs and SLIs for large-scale distributed systems.",
      link: "https://www.sloconf.com/",
      tags: ["SRE", "Observability", "Performance"]
    }
  ];

  return (
    <section id="speaking" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Conference Speaking</h2>
        <p className="section-subtitle">
          Sharing knowledge and insights at tech conferences around the world
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {speeches.map((speech, index) => (
            <Card key={index} className="overflow-hidden border border-border transition-all duration-300 hover:shadow-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="bg-secondary/30">
                <CardTitle className="text-xl font-bold">{speech.title}</CardTitle>
                <CardDescription className="text-purple-600 font-medium">
                  {speech.event}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{speech.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {speech.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end pt-0">
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-100" asChild>
                  <a href={speech.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    View Presentation
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
