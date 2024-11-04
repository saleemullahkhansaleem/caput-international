import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaPlay, FaYoutube } from "react-icons/fa";

const videos = [
  {
    id: "1",
    title: "Quran Recitation",
    thumbnail: "/edge-mall/v1.webp",
    videoUrl: "https://www.youtube.com/embed/diD3RL6iG6w?si=stT7_nT5AR-rDMtI",
  },
  {
    id: "2",
    title: "Tasneem Sabri",
    thumbnail: "/edge-mall/v2.webp",
    videoUrl: "https://www.youtube.com/embed/1qojKO7ohHA?si=zxCOonj71yEdxiaA",
  },
  {
    id: "3",
    title: "COO Go Petroleum",
    thumbnail: "/edge-mall/v3.webp",
    videoUrl: "https://www.youtube.com/embed/Q04VLVV4w3g?si=EtOnYk2Z82Jc0OD_",
  },
  {
    id: "4",
    title: "Jamshed Khan",
    thumbnail: "/edge-mall/v4.webp",
    videoUrl: "https://www.youtube.com/embed/_IVCPgzvSRo?si=dEbP4lmPbuv-946O",
  },
  {
    id: "5",
    title: "Zameen.Com",
    thumbnail: "/edge-mall/v5.webp",
    videoUrl: "https://www.youtube.com/embed/n-o1q2QHBwM?si=qkIDkV1PW0Yiuy-Y",
  },
  {
    id: "6",
    title: "Mazhar Abbas",
    thumbnail: "/edge-mall/v6.webp",
    videoUrl: "https://www.youtube.com/embed/kihcuYNGVwE?si=sIM3Aq1bk084znak",
  },
  {
    id: "7",
    title: "Unveiling of Project",
    thumbnail: "/edge-mall/v7.webp",
    videoUrl: "https://www.youtube.com/embed/3KT2jXIBO5k?si=-e_4FE7rQfaxl_M4",
  },
  {
    id: "8",
    title: "Performance of Sher Ali & Mehr Ali Qawal",
    thumbnail: "/edge-mall/v8.webp",
    videoUrl: "https://www.youtube.com/embed/hT8yMYsix64?si=p9vCt81M5dSKIfYB",
  },
  {
    id: "9",
    title: "Performance of Nadeem Abbas",
    thumbnail: "/edge-mall/v9.webp",
    videoUrl: "https://www.youtube.com/embed/auA4EjIgpys?si=T1dkDxfarpbiKNrX",
  },
  {
    id: "10",
    title: "Performance of Ali Abbas & Minahail",
    thumbnail: "/edge-mall/v10.webp",
    videoUrl: "https://www.youtube.com/embed/HvjfpY19iYE?si=aQX7uVEAdNaWGtpk",
  },
  {
    id: "11",
    title: "Performance of Salman Amin",
    thumbnail: "/edge-mall/v11.webp",
    videoUrl: "https://www.youtube.com/embed/SpkYUn_5saA?si=s0gc1oRLSd2QPubx",
  },
];

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-[70vh] py-10">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Edge Mall - Video Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full container px-4">
        {videos.map((video) => (
          <Dialog key={video.id}>
            <DialogTrigger asChild>
              <div>
                <div className="relative group cursor-pointer ">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-lg shadow-lg w-full h-72 object-cover"
                  />
                  <div className="rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <FaPlay
                      size={60}
                      className="text-destructive"
                      onClick={() => setCurrentVideo(video.videoUrl)}
                    />
                  </div>
                </div>
                <h3 className="lg:text-lg text-center font-bold text-secondary-foreground p-2">
                  {video.title}
                </h3>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-white p-4 rounded-lg shadow-lg max-w-7xl mx-auto">
              {currentVideo && (
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src={currentVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
