
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "MediaData Pipeline",
      description: "A high-throughput data processing pipeline that extracts, transforms, and loads terabytes of Wikimedia content daily. Enables efficient content delivery to enterprise partners.",
      image: "/placeholder.svg",
      tags: ["Apache Spark", "Airflow", "Kubernetes", "Python"],
      links: {
        demo: "https://enterprise.wikimedia.com/solutions",
        github: "https://github.com/wikimedia"
      }
    },
    {
      title: "Knowledge Graph API",
      description: "RESTful and GraphQL APIs for accessing structured knowledge from Wikimedia projects. Features caching, rate limiting, and comprehensive documentation.",
      image: "/placeholder.svg",
      tags: ["GraphQL", "Node.js", "Redis", "TypeScript", "Elasticsearch"],
      links: {
        demo: "https://enterprise.wikimedia.com/solutions",
        github: "https://github.com/wikimedia"
      }
    },
    {
      title: "Content Change Streaming",
      description: "Real-time content change notification system utilizing Kafka streams. Enables partners to receive immediate updates when content changes across Wikimedia projects.",
      image: "/placeholder.svg",
      tags: ["Kafka", "Java", "AWS", "Event-driven"],
      links: {
        demo: "https://enterprise.wikimedia.com/solutions",
        github: "https://github.com/wikimedia"
      }
    },
    {
      title: "Enterprise Dashboard",
      description: "Analytics dashboard for enterprise customers to monitor API usage, data freshness, and system performance. Features customizable visualizations and alerts.",
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "TypeScript", "REST API"],
      links: {
        demo: "https://enterprise.wikimedia.com/solutions",
        github: "https://github.com/wikimedia"
      }
    },
    {
      title: "Content Quality Metrics",
      description: "Machine learning pipeline for assessing and scoring content quality across articles. Enables filtering and prioritization of high-quality content.",
      image: "/placeholder.svg",
      tags: ["Python", "scikit-learn", "NLP", "TensorFlow"],
      links: {
        demo: "https://enterprise.wikimedia.com/solutions",
        github: "https://github.com/wikimedia"
      }
    },
    {
      title: "Wikimedia Commons Indexer",
      description: "Scalable system for indexing and making searchable millions of media files in Wikimedia Commons, including images, PDFs, and audio files.",
      image: "/placeholder.svg",
      tags: ["Elasticsearch", "Python", "Go", "AWS S3"],
      links: {
        demo: "https://enterprise.wikimedia.com/solutions",
        github: "https://github.com/wikimedia"
      }
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Selected projects showcasing my technical expertise and contributions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="project-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-16 h-16 opacity-50"
                />
              </div>
              <CardContent className="pt-6 pb-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-0">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Demo
                  </a>
                </Button>
                <Button variant="secondary" size="sm" className="flex-1" asChild>
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Code
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

export default Projects;
