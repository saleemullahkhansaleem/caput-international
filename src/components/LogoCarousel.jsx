import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  { name: "MI Hospital", image: "/images/clients/logo11.webp" },
  { name: "MOL Group", image: "/images/clients/logo2.webp" },
  { name: "MOL & Justice PAK", image: "/images/clients/logo7.webp" },
  { name: "NAB PAK", image: "/images/clients/logo10.webp" },
  { name: "PAK Eng Council", image: "/images/clients/logo8.webp" },
  { name: "Pakistan Senate", image: "/images/clients/logo6.webp" },
  { name: "PAK Red Crescent", image: "/images/clients/logo9.webp" },
  { name: "PHA Foundation", image: "/images/clients/logo1.webp" },
  { name: "PIMS", image: "/images/clients/logo4.webp" },
  { name: "PMCHS", image: "/images/clients/logo5.webp" },
  { name: "SME Bank", image: "/images/clients/logo3.webp" },
  { name: "USA Embassy", image: "/images/clients/logo12.webp" },
  {
    name: "Master Tiles & Ceramic",
    image: "/images/clients/master-tiles.webp",
  },
  {
    name: "Frontier Ceramics",
    image: "/images/clients/frontier-ceramics.webp",
  },
  {
    name: "Time Ceramics",
    image: "/images/clients/time-ceramics.webp",
  },
];

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440, // XXL
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280, // XL
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // LG
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // MD
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425, // SM
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>
        <Slider {...settings}>
          {clients.map((logo, index) => (
            <div key={index} className="p-2">
              <div className="rounded-lg mx-auto bg-background shadow max-w-60 overflow-hidden">
                <img
                  src={logo.image}
                  alt={`logo-${index}`}
                  className="object-contain p-4 w-full aspect-square mx-auto overflow-hidden rounded-t-lg bg-white"
                />
                <hr />
                <p className="p-4 text-center font-bold text-xs md:text-base">
                  {logo.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoCarousel;
