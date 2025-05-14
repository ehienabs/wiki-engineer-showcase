
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Golang", "Python", "Bash", "SQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"/>
          <path d="m6 8-4 4 4 4"/>
          <path d="m14.5 4-5 16"/>
        </svg>
      ),
    },
    {
      title: "Cloud & Container Orchestration",
      skills: ["Kubernetes", "Docker", "Podman", "AWS", "GCP", "Azure", "Binero"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12.5a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 0 17 7.5 2.5 2.5 0 0 0 14.5 5 2.5 2.5 0 0 0 12 2.5 2.5 2.5 0 0 0 9.5 5 2.5 2.5 0 0 0 7 7.5 2.5 2.5 0 0 0 4.5 10 2.5 2.5 0 0 0 2 12.5"/>
          <path d="M2 12.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 7 17.5 2.5 2.5 0 0 0 9.5 20 2.5 2.5 0 0 0 12 22.5 2.5 2.5 0 0 0 14.5 20 2.5 2.5 0 0 0 17 17.5a2.5 2.5 0 0 0 2.5-2.5"/>
          <path d="M7 15V9"/>
          <path d="M12 17v-8"/>
          <path d="M17 15V9"/>
        </svg>
      ),
    },
    {
      title: "DevOps & Infrastructure",
      skills: ["Crossplane", "Terraform", "CI/CD", "Tekton", "Jenkins", "GitHub Actions", "ArgoCD"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16h6"/>
          <path d="M19 13v6"/>
          <path d="M12 15c-.19-.83-1-1.5-2-1.5-1.38 0-2.5 1.12-2.5 2.5S8.62 18.5 10 18.5c.76 0 1.43-.34 1.88-.88"/>
          <path d="M5 10c.5 0 .94.2 1.25.52s.5.76.5 1.24a1.74 1.74 0 0 1-1.75 1.74A1.74 1.74 0 0 1 3.25 11.74c0-.92.75-1.67 1.67-1.74"/>
          <path d="M2 16.5h.01"/>
          <rect width="6" height="3" x="8" y="7" rx="1.5"/>
          <path d="M15 8h8.5V7a2 2 0 0 0-2-2h-17a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2H7"/>
        </svg>
      ),
    },
    {
      title: "Observability & Monitoring",
      skills: ["Prometheus", "Grafana", "Jaeger", "Open Telemetry", "Fluent Bit", "Logs", "Metrics", "Traces"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
    },
    {
      title: "Event-Driven Systems",
      skills: ["Apache Kafka", "KSQLDB", "Event Processing", "Messaging Systems", "Data Streaming"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      title: "Other Skills",
      skills: ["JIRA", "Phabricator", "Zendesk", "Technical Documentation", "Mentoring", "Leadership", "Communication"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A collection of technologies and methodologies I work with
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-wikimedia text-white p-4 flex items-center">
                <div className="mr-3">{category.icon}</div>
                <h3 className="font-bold">{category.title}</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
