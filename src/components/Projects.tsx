
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const projects = [
    {
      title: "Eftychia",
      description: "Eftychia provisions the cloud infrastructure for bootstraping a Kubernetes cluster on Azure. Provisioning only the compute resources —VMs, Load Balancer, Disks etc.",
      image: "/kubernetes.png",
      tags: ["Azure", "Infrastructure-as-code", "Kubernetes", "Terraform"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/eftychia"
      }
    },
    {
      title: "Eutuxia",
      description: "Eutuxia defines the application resources, management, infrastructure and deployment of a video sharing platform as declarative code.",
      image: "/ArgoCD.png",
      tags: ["ArgoCD", "Continuous Deployment", "Kubernetes", "Developer Experience"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/eutuxia"
      }
    },
    {
      title: "Zemata",
      description: "Zemata discusses the cloud architecture for an online news platform to be deployed on Google Cloud Platform.",
      image: "/GCP.png",
      tags: [" GCP", "Cloud Architecture", "Software delivery", "Ptython"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/zemata"
      }
    },
    {
      title: "Databots GCP",
      description: "Databotsgcp describes the deployment of a simple app. The app is to be deployed on Google’s Kubernetes Engine using Cloud Build for continuous integration & delivery, and terraform to codify the provisioning of infrastructure.",
      image: "/terrafrom.png",
      tags: ["GCP", "Infrastructure-as-code", "Terraform", "Kubernetes", "Continuous Integration"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/databotsgcp"
      }
    },
    {
      title: "Locust Load Testing",
      description: "A performance testing framework using Locust for simulating thousands of users to test the scalability and performance of an API.",
      image: "/locust.jpeg",
      tags: ["Locust", "Load testing ", "Scalability", "API stress testing"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/locust-load-testing"
      }
    },
    {
      title: "Spartapp",
      description: "Application designed and managed with helm charts for reuseability, scalability and simplicity, to be deployed on Kubernetes.",
      image: "/helm.png",
      tags: ["Kubernetes", "Helm Charts", "Application templates", "Resource Optimisation"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/spartapp"
      }
    },
    {
      title: "Garden Project",
      description: "DevOps automation strategy for the deployment and management of multiple environments and pipelines in Kubernetes for a smoother developer experience",
      image: "/garden.png",
      tags: ["Garden", "Kubernetes", "Continuous Integration", "Remocal Development"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/gardenproj"
      }
    },
    {
      title: "Get Description",
      description: "A simple API for retrieve article descriptions from Wikipedia API",
      image: "/wikipedia.jpeg",
      tags: ["Wikipedia", "API", "Open Data", "Organization"],
      links: {
        demo: "#",
        github: "https://github.com/ehienabs/getdescription"
      }
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container bg-gray-100">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Projects showcasing my technical expertise and contributions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-1 ">
          {projects.map((project, index) => (
            <Card key={index} className="project-card h-full border-2 hover:border-wikimedia hover:shadow-md transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
              <a href={project.links.github} target="_blank" rel="noreferrer" className="block">
                <div className="h-48 bg-muted overflow-hidden">
                  <AspectRatio ratio={16/9} className="h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`object-cover w-full h-full transition-all hover:scale-105 ${
                        project.image.includes("placeholder") ? "w-16 h-16 object-contain m-auto opacity-50" : ""
                      }`}
                    />
                  </AspectRatio>
                </div>
              </a>
              <CardContent className="pt-6 pb-4">
                <a href={project.links.github} target="_blank" rel="noreferrer" className="block  hover:text-wikimedia transition-colors">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </a>
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
                    View on GitHub
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
