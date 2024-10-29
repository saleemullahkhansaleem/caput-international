import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { LogoCarousel } from "@/components";

export const services = [
  {
    title: "Vendor Services",
    image: "/services/service1.webp",
    description:
      "Comprehensive vendor management solutions for your business needs.",
  },
  {
    title: "Event Management",
    image: "/services/service2.webp",
    description: "Professional event planning and execution services.",
  },
  {
    title: "Mines & Minerals",
    image: "/services/service3.webp",
    description: "Expert consulting and management in the mining sector.",
  },
  {
    title: "Presence in Oil and Gas Sector",
    image: "/services/service4.webp",
    description:
      "Strategic operations and consulting in the oil and gas industry.",
  },
];

export default function Home() {
  const galleryItems = [
    { title: "Project Alpha", image: "/gallery/gallery1.webp" },
    {
      title: "Initiative Beta",
      image: "/gallery/gallery2.webp",
    },
    {
      title: "Operation Gamma",
      image: "/gallery/gallery3.webp",
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
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-72px)] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Company</h1>
            <p className="text-xl mb-8">
              Innovative Solutions for a Better Future
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </section>

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
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
              <Card key={index} className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
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
