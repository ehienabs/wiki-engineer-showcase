
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
        "An exploration of SDK development with Go, covering the “hows” and “whys” that every developer should know when building an SDK for their APIs. ",
      link: "https://speakerdeck.com/ehienabs/sdk-secrets-unlocking-api-magic",
      tags: ["GO", "API Development", "SDK Design"]
    },
    {
      title: "KNOWLEDGE IS A HUMAN RIGHT: EMBRACING THE MOVEMENT STRATEGY",
      event: "WikiCon Nigeria",
      description:
        "Speaking about the essential role of Wiki editors and volunteers in maintaining unbiased, representative, and accurate data, addressing AI-generated content's challenges, such as biases and hallucinations.",
      link: "https://speakerdeck.com/ehienabs/knowledge-is-a-human-right-embracing-the-movement-strategy",
      tags: ["Wikimedia", "Knowledge Equity", "Open Knowledge"]
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
      title: "Skills Gap: Nigeria Needs More Cloud Engineers",
      event: "Arise News",
      description:
        "Speaking to Arise News Africa about the dearth of cloud engineers in Nigeria and what can be done to address it.",
      link: "https://youtu.be/VbgMqwF5S1I?si=OlxR6ZhSpJgEyVwr",
      tags: ["Cloud Engineering", "Data Centers", "News"]
    }
  ];

  return (
    <section id="speaking" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Media Appearances</h2>
        <p className="section-subtitle">
          Conference speaking and other media appearances.
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
                    See more
                    <ExternalLink size={10} />
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
