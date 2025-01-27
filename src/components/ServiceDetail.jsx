import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { CorporateGifts } from ".";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Array of service data, each object representing a service
  const servicesData = [
    {
      id: "event-management",
      title: "Event Management",
      description:
        "CAPUT International (Pvt.) Ltd. has come a long way by steadily increasing its satisfied clientele base through providing out-of-the-box solutions. Our creative team, being well-versed with the market pulse, ensures that dreams come true for every client. As the premier event planning and management company in Pakistan, we consider every client and event 'UNIQUE'.",
      imageUrl: "/services/service1.webp",
      deliveredProjects: [
        {
          title: "Launching Ceremony of the Edge Mall - Faisalabad",
          description:
            "CAPUT International (Pvt.) Ltd. organized the launching ceremony of the Edge Mall in Faisalabad, a prestigious event attended by industry leaders and dignitaries. The event showcased the mall’s unique features and offerings, creating a memorable experience for all attendees.",
          href: "/edge-mall-ceremony",
        },
      ],
      subTopics: [
        {
          id: "sales-event",
          title: "Sales Event",
          description:
            "Our sales events are designed to create impactful brand engagements and maximize customer interaction. From product promotions to exclusive deals, we ensure a successful and result-driven event.",
          href: "/contact",
        },
        {
          id: "expos-exhibition",
          title: "Expos & Exhibition",
          description:
            "We specialize in organizing high-profile expos and exhibitions that connect businesses with their target audience. Our team handles logistics, booth designs, and audience engagement strategies.",
          href: "/contact",
        },
        {
          id: "launch-events",
          title: "Launch Events",
          description:
            "From product launches to grand openings, we create memorable launch events that leave a lasting impact. Our experts manage the event flow, branding, and media coverage to ensure success.",
          href: "/contact",
        },
        {
          id: "corporate-events",
          title: "Corporate Events",
          description:
            "Our corporate events team delivers professional and high-impact experiences, including conferences, team-building activities, and networking sessions, ensuring seamless execution aligned with your brand’s values.",
          href: "/contact",
        },
        {
          id: "tech-events",
          title: "Tech Events",
          description:
            "We organize cutting-edge tech events that bring together industry innovators, startups, and tech enthusiasts. Our services include speaker coordination, exhibition setups, and immersive tech experiences.",
          href: "/contact",
        },
        {
          id: "conferences",
          title: "Conferences",
          description:
            "We plan and execute conferences that bring together thought leaders, professionals, and industry experts. From logistics to speaker arrangements, we ensure a seamless experience.",
          href: "/contact",
        },
      ],
    },
    {
      id: "vendor-services",
      title: "Vendor Services",
      description:
        "With diversified experience in this field, we offer tailor-made solutions for each client. CAPUT International (Pvt.) Ltd. focuses on quality and affordability, ensuring doorstep delivery within an affordable range. This is achieved through special relationships with vendors, directly sourcing quality products, and passing the savings onto our valuable clients.",
      imageUrl: "/services/service2.webp",
      // deliveredProjects: [
      //   {
      //     title: "Corporate Branding for MOLGroup",
      //     description:
      //       "CAPUT International (Pvt.) Ltd. successfully executed corporate branding for MOLGroup, including printed vinyl signage, promotional brochures, and customized stationery. The project helped enhance brand visibility and market presence.",
      //     href: "/corporate-gifts",
      //   },
      // ],
      subTopics: [
        {
          id: "printing-solutions",
          title: "Printing Solutions",
          description:
            "We offer high-quality digital and offset printing services, including Pena Flex, vinyl prints, brochures, and invitation cards, ensuring vibrant and durable results.",
          href: "/contact",
        },
        {
          id: "corporate-branding",
          title: "Corporate Branding",
          description:
            "Enhance your brand’s visibility with customized promotional items such as printed pens, cups, tea coasters, and envelopes tailored to your needs.",
          href: "/contact",
        },
        {
          id: "premium-packaging",
          title: "Premium Packaging",
          description:
            "We specialize in elegant packaging solutions, including velvet boxes, lacquer-coated finishes, and crystal plaques for gifts, awards, and corporate events.",
          href: "/contact",
        },
      ],
    },

    {
      id: "oil-gas-sector",
      title: "Presence in Oil & Gas Sector",
      description:
        "CAPUT International (Pvt.) Ltd. is actively engaged in the Oil & Gas sector, offering expertise and solutions tailored for industry demands. We focus on operational efficiency, safety, and quality, ensuring our services support the sector’s rigorous standards. Our presence in this sector underscores our commitment to serve critical industries with precision and excellence.",
      imageUrl: "/services/service3.webp",
    },
    {
      id: "branding-advertising",
      title: "Branding & Advertising",
      description:
        "CAPUT International (Pvt.) Ltd. strives to grow together with client(s), focusing on success through brand and company transformation. We leverage strategy, consulting, development, management, and research to create impactful digital and real-world experiences. By combining our unique process and community, we build strong partnerships that drive growth.",
      imageUrl: "/services/service4.webp",
      subTopics: [
        {
          id: "outdoor-advertising",
          title: "Outdoor Advertising",
          description:
            "We specialize in impactful outdoor advertising solutions, including billboards, transit ads, and other outdoor placements to enhance brand visibility.",
          btnText: "Billboards Locations & details",
          href: "/billboards",
        },
        {
          id: "marketing-campaigns",
          title: "Marketing Campaigns",
          description:
            "Our expert team creates data-driven marketing campaigns tailored to maximize reach and engagement across multiple channels.",
          href: "/contact",
        },
      ],
    },
    {
      id: "facility-management",
      title: "Facility Management Services",
      description:
        "CAPUT International (Pvt.) Ltd. provides effective, professional, and courteous service management. Our mission is to deliver the highest level of service in a cost-effective manner, minimizing risks factor. Our trained and courteous workforce enhances the image of your organization, embodying our principle of 'Growing Together.'",
      imageUrl: "/services/service5.webp",
    },
    {
      id: "construction",
      title: "Construction",
      description:
        "CAPUT International (Pvt.) Ltd. offers comprehensive construction services, from planning to execution, tailored to meet client(s) needs and industry standards. We focus on quality, safety, and efficiency in every project, ensuring timely completion without compromising on excellence. Our commitment is to deliver infrastructure that stands the test of time.",
      imageUrl: "/services/service6.webp",
    },
    {
      id: "property-advisors",
      title: "Property Advisors",
      description:
        "As a pioneer in the real estate sector, CAPUT International (Pvt.) Ltd. has vast experience meeting the diverse needs of our client(s). Based in Blue Area, Islamabad, we handle all real estate transactions and advisory services for profitable investments. Our network of investors enables us to offer the best and most cost-effective options.",
      imageUrl: "/services/service7.webp",
    },
    {
      id: "mines-minerals",
      title: "Mines & Minerals",
      description:
        "CAPUT International (Pvt.) Ltd. provides specialized services in the mining sector, offering solutions that encompass exploration, extraction, and processing. With a focus on sustainable practices, we ensure the responsible use of resources while maximizing client(s) value. Our dedicated team is committed to innovation and efficiency within the mining industry.",
      imageUrl: "/services/service8.webp",
      subTopics: [
        {
          id: "construction-industrial-minerals",
          title: "Construction And Industrial Minerals",
          description:
            "Our team provides expertise in the construction and industrial minerals sector, ensuring the sustainable sourcing and processing of essential minerals for construction and industrial use.",
          href: "/contact",
        },
        {
          id: "dimension-stone",
          title: "Dimension Stone",
          description:
            "We specialize in the extraction and supply of high-quality dimension stones, meeting the standards for various architectural and decorative purposes.",
          href: "/contact",
        },
        {
          id: "fuel-minerals",
          title: "Fuel Minerals",
          description:
            "CAPUT International (Pvt.) Ltd. offers services in the exploration and development of fuel minerals, ensuring a stable and sustainable supply for energy needs.",
          href: "/contact",
        },
        {
          id: "gemstones",
          title: "Gemstones",
          description:
            "Our gemstone division focuses on sourcing and processing precious and semi-precious stones, ensuring authenticity and quality for our client(s).",
          href: "/contact",
        },
        {
          id: "base-metallic-minerals",
          title: "Base/ Metallic Minerals",
          description:
            "With a focus on base and metallic minerals, we offer extraction and processing solutions that meet industry standards for a wide range of applications.",
          href: "/contact",
        },
      ],
    },
  ];

  const serviceData = servicesData.find((service) => service.id === serviceId);

  return serviceData ? (
    <section className="container mx-auto py-16 px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Main Service Content without Card */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {serviceData.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {serviceData.description}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={serviceData.imageUrl}
            alt={serviceData.title}
            className="rounded-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Render Delivered Projects if available, each within a Card */}
      {serviceData.deliveredProjects && (
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Our Delivered Projects
          </h3>
          <div className="grid gap-8">
            {serviceData.deliveredProjects.map((item) => (
              <Card key={item.title} className="bg-primary/10">
                <CardHeader>
                  <CardTitle className="font-semibold text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {item.description}
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to={item.href || "/contact"}>
                      {item.btnText || "View Highlights"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Render subtopics if available, each within a Card */}
      {serviceData.subTopics && (
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            {serviceData.title} Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.subTopics.map((subTopic) => (
              <Card key={subTopic.id} className="bg-muted border-none shadow-none">
                <CardHeader>
                  <CardTitle className="font-semibold text-lg">
                    {subTopic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {subTopic.description}
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to={subTopic.href || "/contact"}>
                      {subTopic.btnText || "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {serviceId === "vendor-services" && <CorporateGifts />}
    </section>
  ) : (
    <section className="container mx-auto py-16 px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-red-600">Service not found</h2>
      <p className="mt-4 text-muted-foreground">
        The service you're looking for does not exist.
      </p>
    </section>
  );
}
