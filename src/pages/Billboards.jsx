import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Expand, Fullscreen, ZoomIn } from "lucide-react";
import { Helmet } from "react-helmet-async";

const billboards = [
  {
    id: 1,
    images: ["/images/billboards/billboard1.webp"],
    location: "F-7 Main Double Road Near Safa Gold Mall",
    size: "45x15Ft.",
  },
  {
    id: 2,
    images: ["/images/billboards/billboard2.webp"],
    location: "F-7 Markaz Round Market",
    size: "28x30Ft.",
  },
  {
    id: 3,
    images: ["/images/billboards/billboard3.webp"],
    location: "F-10 Markaz",
    size: "20x30Ft.",
  },
  {
    id: 4,
    images: [
      "/images/billboards/billboard4.webp",
      "/images/billboards/billboard4a.webp",
    ],
    location: "F-10 Round Market",
    size: "20x35Ft.",
  },
  {
    id: 5,
    images: ["/images/billboards/billboard5.webp"],
    location: "Blue Area",
    size: "60x20Ft.",
  },
  {
    id: 6,
    images: ["/images/billboards/billboard6.webp"],
    location: "E-11 Main Double Road",
    size: "40x20Ft.",
  },
  {
    id: 7,
    images: [
      "/images/billboards/billboard7.webp",
      "/images/billboards/billboard7a.webp",
    ],
    location: "Kashmir Highway FTGT Airport Road, LHR and Peshawar",
    size: "40x60Ft.",
  },
  {
    id: 8,
    images: [
      "/images/billboards/billboard8.webp",
      "/images/billboards/billboard8a.webp",
    ],
    location: "Islamabad Peshawar Toll Plaza FTGT Peshawar and Fateh Jang",
    size: "40x60Ft.",
  },
  {
    id: 9,
    images: ["/images/billboards/billboard9.webp"],
    location: "Islamabad Peshawar Toll Plaza FTGT Peshawar and Fateh Jang",
    size: "60x50Ft.",
  },
  {
    id: 10,
    images: ["/images/billboards/billboard10.webp"],
    location: "Bara Khau (Atthal Chowk) FTGT Islamabad",
    size: "90x30Ft.",
  },
  {
    id: 11,
    images: ["/images/billboards/billboard11.webp"],
    location: "Bara Khau",
    size: "60x30Ft.",
  },
  {
    id: 12,
    images: ["/images/billboards/billboard12.webp"],
    location: "Bara Khau",
    size: "50x30Ft.",
  },
];

export default function Billboards() {
  const [currentGallery, setCurrentGallery] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const openDialog = (gallery) => {
    setCurrentGallery(gallery);
    setCurrentSlide(0);
  };

  const closeDialog = () => {
    setCurrentGallery(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    afterChange: (index) => setCurrentSlide(index), // Track the current slide index
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide =
    currentGallery && currentSlide === currentGallery.images.length - 1;
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>
          Billboards - CAPUT International (Pvt.) Ltd. | Global Leader in
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
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Our Billboards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {billboards.map((billboard) => (
          <Card
            key={billboard.id}
            className="shadow-none border-none bg-primary/10"
          >
            <CardHeader>
              <CardTitle>{billboard.location}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-60 relative group cursor-pointer rounded-lg group-hover:scale-[1.03] group-hover:shadow-lg overflow-hidden"
                onClick={() => openDialog(billboard)}
              >
                <img
                  src={billboard.images[0]}
                  alt={billboard.location}
                  className=" w-full h-full object-cover"
                />
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <Expand size={28} className="text-white" />
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Size: {billboard.size}
              </p>
              <Button className="mt-4 w-full" asChild>
                <Link to="/contact">Contact Us for Booking</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Dialog for Image Slider */}
      <Dialog open={!!currentGallery} onOpenChange={closeDialog}>
        <DialogTrigger asChild>
          <button style={{ display: "none" }} />
        </DialogTrigger>
        <DialogContent className="flex flex-col justify-center items-center max-w-5xl bg-background">
          {currentGallery && (
            <>
              <DialogTitle>
                {currentGallery.location} ({currentGallery.size})
              </DialogTitle>
              <div className="w-full mt-6 relative">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {currentGallery.images.map((image, idx) => (
                    <div key={idx} className="flex justify-center">
                      <img
                        src={image}
                        alt={`Slide ${idx + 1}`}
                        className="w-full max-h-[80vh] object-contain m-auto"
                      />
                    </div>
                  ))}
                </Slider>

                {/* Custom Arrows with hover effects and conditional rendering */}
                {!isFirstSlide && (
                  <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <FaChevronLeft size={24} />
                  </button>
                )}
                {!isLastSlide && (
                  <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <FaChevronRight size={24} />
                  </button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
