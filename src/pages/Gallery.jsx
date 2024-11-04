import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState("");

  const openDialog = (image) => {
    setCurrentImage(image);
  };

  const closeDialog = () => {
    setCurrentImage("");
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-none group cursor-pointer"
              onClick={() => openDialog(image)}
            >
              <img
                src={image.image}
                alt={image.title}
                width={400}
                height={300}
                className="w-full aspect-square object-cover group-hover:scale-105"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog for Image Preview */}
        <Dialog open={!!currentImage} onOpenChange={closeDialog}>
          <DialogTrigger asChild>
            <button style={{ display: "none" }} />
          </DialogTrigger>
          <DialogContent className="flex flex-col justify-center items-center max-w-5xl">
            <DialogTitle>{currentImage.title}</DialogTitle>
            <DialogDescription></DialogDescription>
            {currentImage && (
              <img
                src={currentImage.image}
                alt="Current"
                className="max-w-full max-h-full"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
