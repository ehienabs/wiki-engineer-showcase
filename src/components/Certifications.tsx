
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional Certifications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="overflow-hidden transition-all hover:shadow-lg border border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800">AWS Certified Solutions Architect</h3>
                  <p className="text-sm text-blue-600">Amazon Web Services</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-blue-700">
                  Technical expertise in designing and deploying scalable systems on AWS.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-lg border border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a9 9 0 0 1 9 9"/>
                    <path d="M4 4a16 16 0 0 1 16 16"/>
                    <circle cx="5" cy="19" r="1"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800">Certified Kubernetes Administrator</h3>
                  <p className="text-sm text-blue-600">Cloud Native Computing Foundation</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-blue-700">
                  Demonstrates the skills, knowledge, and competency of a Kubernetes Administrator.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-lg border border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    <path d="M12 2v2"/>
                    <path d="M12 22v-2"/>
                    <path d="m17 20.66-1-1.73"/>
                    <path d="M11 10.27 7 3.34"/>
                    <path d="m20.66 17-1.73-1"/>
                    <path d="m3.34 7 1.73 1"/>
                    <path d="M14 12h8"/>
                    <path d="M2 12h2"/>
                    <path d="m20.66 7-1.73 1"/>
                    <path d="m3.34 17 1.73-1"/>
                    <path d="m17 3.34-1 1.73"/>
                    <path d="m7 20.66-1-1.73"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800">Associate Cloud Engineer</h3>
                  <p className="text-sm text-blue-600">Google Cloud Platform</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-blue-700">
                  Technical expertise in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
