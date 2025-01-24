import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const billboards = [
  {
    id: 1,
    image: "/billboards/billboard1.webp",
    location: "F-7 Main Double Road Near Safa Gold Mall",
    size: "45x15Ft.",
  },
  {
    id: 2,
    image: "/billboards/billboard2.webp",
    location: "F-7 Markaz Round Market",
    size: "28x30Ft.",
  },
  {
    id: 3,
    image: "/billboards/billboard3.webp",
    location: "F-10 Markaz",
    size: "20x30Ft.",
  },
  {
    id: 4,
    image: "/billboards/billboard4.webp",
    location: "F-10 Round Market",
    size: "20x35Ft.",
  },
  {
    id: 5,
    image: "/billboards/billboard5.webp",
    location: "Blue Area",
    size: "60x20Ft.",
  },
  {
    id: 6,
    image: "/billboards/billboard6.webp",
    location: "E-11 Main Double Road",
    size: "40x20Ft.",
  },
  {
    id: 7,
    image: "/billboards/billboard7.webp",
    location: "Kashmir Highway FTGT Airport Road, LHR and Peshawar",
    size: "40x60Ft.",
  },
  {
    id: 8,
    image: "/billboards/billboard8.webp",
    location: "Islamabad Peshawar Toll Plaza FTGT Peshawar and Fateh Jang",
    size: "40x60Ft.",
  },
  {
    id: 9,
    image: "/billboards/billboard9.webp",
    location: "Islamabad Peshawar Toll Plaza FTGT Peshawar and Fateh Jang",
    size: "60x50Ft.",
  },
  {
    id: 10,
    image: "/billboards/billboard10.webp",
    location: "Bara Khau (Atthal Chowk) FTGT Islamabad",
    size: "90x30Ft.",
  },
  {
    id: 11,
    image: "/billboards/billboard11.webp",
    location: "Bara Khau",
    size: "60x30Ft.",
  },
  {
    id: 12,
    image: "/billboards/billboard12.webp",
    location: "Bara Khau",
    size: "50x30Ft.",
  },
];

export default function Billboards() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Billboards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {billboards.map((billboard) => (
          <Card
            key={billboard.id}
            className="shadow-lg hover:shadow-xl transition-all"
          >
            <CardHeader>
              <CardTitle>{billboard.location}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={billboard.image}
                alt={billboard.location}
                className="w-full h-60 object-cover rounded-md"
              />
              <p className="mt-4 text-gray-600">Size: {billboard.size}</p>
              <Button className="mt-4 w-full" asChild> 
                <Link to="/contact">Contact Us for Booking</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
