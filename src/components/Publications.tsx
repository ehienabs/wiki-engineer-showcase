
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  url: string;
  platform: string;
  category: string;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Image Processing with AWS Bedrock and Textract: Extracting Text from Newspaper Images",
      url: "https://dev.to/ehienabs/image-processing-with-aws-bedrock-and-textract-extracting-text-from-newspaper-images--19h4",
      platform: "DEV.to",
      category: "AWS"
    },
    {
      title: "Image Process with AWS Textract: Extracting Text from Newspaper Images",
      url: "https://dev.to/ehienabs/image-process-with-aws-textract-extracting-text-from-newspaper-images-i-3cd8",
      platform: "DEV.to",
      category: "AWS"
    },
    {
      title: "Deploying Amazon Managed Service for Apache Kafka (Amazon MSK) with CloudFormation",
      url: "https://dev.to/aws-builders/deploying-amazon-managed-service-for-apache-kafka-amazon-msk-with-cloudformation-463o",
      platform: "DEV.to",
      category: "AWS"
    },
    {
      title: "Amazon Managed Service for Prometheus (AMP) with CloudFormation",
      url: "https://dev.to/aws-builders/amazon-managed-service-for-prometheus-amp-with-cloudformation-d7h",
      platform: "DEV.to",
      category: "AWS"
    },
    {
      title: "Introduction to AWS App Config",
      url: "https://dev.to/aws-builders/introduction-to-aws-app-config-304j",
      platform: "DEV.to",
      category: "AWS"
    },
    {
      title: "Bootstrapping Kubernetes Cluster with CloudFormation",
      url: "https://dev.to/aws-builders/bootstrapping-kubernetes-cluster-with-cloudformation-19ho",
      platform: "DEV.to",
      category: "AWS"
    },
    {
      title: "Artificial General Intelligence & Hallucination",
      url: "https://techpoint.africa/insight/artificial-general-intelligence-hallucination/",
      platform: "Techpoint Africa",
      category: "AI"
    },
    {
      title: "Guide to Setting Service Level Objectives and Service Level Indicators",
      url: "https://dev.to/ehienabs/guide-to-setting-service-level-objectives-and-service-level-indicators-591h",
      platform: "DEV.to",
      category: "SRE"
    },
    {
      title: "Kubernetes Node Monitoring with Prometheus and Grafana",
      url: "https://www.civo.com/learn/kubernetes-node-monitoring-with-prometheus-and-grafana",
      platform: "Civo",
      category: "Kubernetes"
    },
    {
      title: "Implementing Multitenancy in Kubernetes with Virtual Clusters",
      url: "https://www.civo.com/learn/implementing-multitenancy-in-kubernetes-with-virtual-clusters",
      platform: "Civo",
      category: "Kubernetes"
    },
    {
      title: "Container Monitoring with Prometheus and Grafana on Kubernetes",
      url: "https://www.civo.com/learn/container-monitoring-with-prometheus-and-grafana-on-kubernetes",
      platform: "Civo",
      category: "Kubernetes"
    },
    {
      title: "Application Performance Monitoring with Prometheus and Grafana on Kubernetes",
      url: "https://www.civo.com/learn/application-performance-monitoring-with-prometheus-and-grafana-on-kubernetes",
      platform: "Civo",
      category: "Kubernetes"
    },
    {
      title: "Installing an Apache Kafka Cluster on Kubernetes using Strimzi and GitOps",
      url: "https://www.civo.com/learn/installing-an-apache-kafka-cluster-on-kubernetes-using-strimzi-and-gitops",
      platform: "Civo",
      category: "Kubernetes"
    }
  ];

  // Grouping publications by platform
  const platformGroups = publications.reduce((groups, pub) => {
    const group = groups[pub.platform] || [];
    group.push(pub);
    groups[pub.platform] = group;
    return groups;
  }, {} as Record<string, Publication[]>);

  return (
    <section id="publications" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Published Articles</h2>
        <p className="section-subtitle">
          Technical articles and guides I've authored across various platforms
        </p>

        <div className="space-y-8 mt-12">
          {Object.entries(platformGroups).map(([platform, items], groupIndex) => (
            <div key={platform} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-purple-600">
                <FileText className="h-5 w-5" />
                {platform}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((publication, index) => (
                  <a 
                    href={publication.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    key={index} 
                    className="block transition-all hover:scale-102 hover:-translate-y-1"
                  >
                    <Card className="h-full border-2 hover:border-purple-300 hover:shadow-md transition-all">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700">
                            {publication.category}
                          </Badge>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <h4 className="font-medium text-sm md:text-base line-clamp-3">
                          {publication.title}
                        </h4>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
