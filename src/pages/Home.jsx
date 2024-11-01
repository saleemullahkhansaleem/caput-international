import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { LogoCarousel, VideoSection } from "@/components";
import { Link } from "react-router-dom";

export const services = [
  {
    title: "Event Management",
    image: "/services/service1.webp",
    path: "/",
    description:
      "Provides out-of-the-box solutions, focusing on uniqueness for every client and event.",
  },
  {
    title: "Vendor Services",
    image: "/services/service2.webp",
    path: "/",
    description:
      "Offers quality and affordable delivery through direct sourcing and special relationships.",
  },
  {
    title: "Presence in Oil & Gas Sector",
    image: "/services/service3.webp",
    path: "/",
    description:
      "Strategic operations and consulting in the oil and gas industry.",
  },
  {
    title: "Branding & Advertising",
    image: "/services/service4.webp",
    path: "/",
    description:
      "Aims for client growth through strategy, consulting, development, and management.",
  },
  {
    title: "Facility Management Services",
    image: "/services/service5.webp",
    path: "/",
    description:
      "Delivers quality service with trained staff for organizational image building.",
  },
  {
    title: "Construction",
    image: "/services/service6.webp",
    path: "/",
    description: "Professional construction services for diverse projects.",
  },
  {
    title: "Property Advisors",
    image: "/services/service7.webp",
    path: "/",
    description:
      "Provides real estate services, including transactions, advisory, and investment options.",
  },
  {
    title: "Mines & Minerals",
    image: "/services/service8.webp",
    path: "/",
    description: "Expert consulting and management in the mining sector.",
  },
];

export default function Home() {
  const galleryItems = [
    {
      title: "Recently delivered items",
      image: "/gallery/gallery3.webp",
    },
    { title: "Pur azam award ceremony", image: "/gallery/gallery1.webp" },
    {
      title: "Advance training workshop",
      image: "/gallery/gallery2.webp",
    },
    { title: "Venture Delta", image: "/gallery/gallery4.webp" },
    {
      title: "Enterprise Epsilon",
      image: "/gallery/gallery5.webp",
    },
    { title: "Taskforce Zeta", image: "/gallery/gallery6.webp" },
    { title: "Mission Eta", image: "/gallery/gallery7.webp" },
    { title: "Campaign Theta", image: "/gallery/gallery8.webp" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <VideoSection />

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to={service.path}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden rounded-none">
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Call Us", content: "+1 (123) 456-7890" },
              { icon: Mail, title: "Mail Us", content: "info@example.com" },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Business St, City, Country",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <item.icon className="mx-auto mb-4 h-12 w-12" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
