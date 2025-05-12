
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "TypeScript", "Java", "Scala", "Go", "SQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"/>
          <path d="m6 8-4 4 4 4"/>
          <path d="m14.5 4-5 16"/>
        </svg>
      ),
    },
    {
      title: "Backend & Infrastructure",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Elasticsearch"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 19V8.7a3 3 0 0 1 .8-2.05l4.98-5.36a1 1 0 0 1 1.46.04l5.1 5.32a3 3 0 0 1 .84 2.08V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
          <path d="m9 21v-7.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V21"/>
        </svg>
      ),
    },
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "Airflow", "Hadoop", "ETL", "Data Warehousing", "Data Pipelines", "Pandas", "PySpark"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
          <path d="M3 12a9 3 0 0 0 18 0"/>
        </svg>
      ),
    },
    {
      title: "Frontend & API",
      skills: ["React", "RESTful APIs", "GraphQL", "Node.js", "Express", "HTML/CSS", "Tailwind CSS", "API Design"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 17c-1-1-4-1-4-4C6 7 13.5 5 16 2"/>
          <path d="M8.5 17c0 0 1.5 3 6 1"/>
          <path d="M8.5 9C6 9 4 11 4 13s2 4 3 4"/>
        </svg>
      ),
    },
    {
      title: "DevOps & Methodologies",
      skills: ["CI/CD", "Jenkins", "GitHub Actions", "GitLab CI", "Agile", "Scrum", "Test-Driven Development", "Microservices"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M7 7h.01"/>
          <path d="M17 7h.01"/>
          <path d="M7 17h.01"/>
          <path d="M17 17h.01"/>
        </svg>
      ),
    },
    {
      title: "Others",
      skills: ["System Design", "Technical Documentation", "Open Source Contribution", "Mentoring", "Security Best Practices", "Performance Optimization"],
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
