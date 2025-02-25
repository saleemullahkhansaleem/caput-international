import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center text-foreground">
      <Helmet>
        <title>
          404 Not Found - CAPUT International (Pvt.) Ltd. | Global Leader in
          Premium Solutions
        </title>
        <meta
          name="description"
          content="We are a leading company providing innovative solutions across various industries. Our commitment to excellence and customer satisfaction sets us apart."
        />
        <meta
          name="keywords"
          content="minerals, mining, extraction, supply, high-quality, sustainable, global, leader, solutions, premium, reliability, excellence, service, logo, CAPUT International (Pvt.) Ltd., event management, branding, advertising, facility management, vendor services, property advisors, oil and gas sector, construction"
        />
      </Helmet>
      <div className="text-center mb-6">
        <h1 className="text-9xl font-extrabold text-primary animate-pulse">
          <span className="text-primary">404</span>
        </h1>
        <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>

      <Button
        size="lg"
        className="bg-primary hover:bg-primary-dark text-white"
        asChild
      >
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
}
