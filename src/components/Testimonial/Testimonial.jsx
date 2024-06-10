import React from "react";
import Slider from "react-slick";
import nanhe from "../../assets/website/nanhe.jpg";
import nuba from "../../assets/website/nuba.jpg";
import brownie from "../../assets/website/brownie.jpg";
import nandita from "../../assets/website/nandita.jpg";
import kakfa from "../../assets/website/kakfa.jpg";
import caz from "../../assets/website/caz.jpg";
import peppo from "../../assets/website/peppo.jpg";




const testimonialData = [
  {
    id: 1,
    name: "Nuba Pandit",
    text: "This app makes finding and organizing my next read incredibly easy and enjoyable!",
    img: nuba,
  },
  {
    id: 1,
    name: "Nanhe Nankani",
    text: "This app makes finding and organizing my next read super easy and fun!",
    img: nanhe,
  },
  {
    id: 1,
    name: "Brownie Quresi",
    text: "A fantastic tool for finding your next sultry and addictive book!",
    img: brownie,
  },
  {
    id: 1,
    name: "Caz Shukla",
    text: "Seamless interface and comprehensive features make this the ultimate app for book lovers.",
    img: caz,
  },
  {
    id: 1,
    name: "kakfa tiwari",
    text: "This app is perfect for discovering Ana Huang's steamy and captivating novels!",
    img: kakfa,
  },
  {
    id: 1,
    name: "Nandita Sharma",
    text: "This app is perfect for discovering Ana Huang's steamy and captivating novels!",
    img: nandita,
  },
  {
    id: 1,
    name: "Peppo shukla",
    text: "This app makes finding and organizing my next read incredibly easy and enjoyable!",
    img: peppo,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonials</h1>
            <p className="text-xs text-gray-400">
            A riveting page-turner that keeps you guessing until the very end
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
