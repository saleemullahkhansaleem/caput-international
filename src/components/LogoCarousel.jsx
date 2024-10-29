import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  "/clients/client1.webp",
  "/clients/client2.webp",
  "/clients/client3.webp",
  "/clients/client4.webp",
  "/clients/client5.webp",
  "/clients/client3.webp",
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
            <div key={index} className="p-2">
              <img
                src={logo}
                alt={`logo-${index}`}
                className="object-contain h-24 mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoCarousel;
