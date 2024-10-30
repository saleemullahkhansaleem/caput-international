import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  { name: "PHA Foundation", image: "/clients/logo1.webp" },
  { name: "MOL Group", image: "/clients/logo2.webp" },
  { name: "SME Bank", image: "/clients/logo3.webp" },
  { name: "PIMS", image: "/clients/logo4.webp" },
  { name: "PMCHS", image: "/clients/logo5.webp" },
  { name: "Pakistan Senate", image: "/clients/logo6.webp" },
  { name: "MOL & Justice PAK", image: "/clients/logo7.webp" },
  { name: "PAK Eng Council", image: "/clients/logo8.webp" },
  { name: "PAK Red Crescent", image: "/clients/logo9.webp" },
  { name: "NAB PAK", image: "/clients/logo10.webp" },
  { name: "MI Hospital", image: "/clients/logo11.webp" },
  { name: "USA Embassy", image: "/clients/logo12.webp" },
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
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
    ],
  };

  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>
        <Slider {...settings}>
          {clients.map((logo, index) => (
            <div>
              <div
                key={index}
                className="rounded-lg mx-auto bg-white shadow max-w-60 overflow-hidden"
              >
                <img
                  src={logo.image}
                  alt={`logo-${index}`}
                  className="object-contain p-4 w-full aspect-square mx-auto overflow-hidden"
                />
                <hr />
                <p className="p-4 text-center font-bold text-lg">{logo.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoCarousel;
