import React from "react";
import Slider from "react-slick";
import Linkedin from "../assets/portfolio/Linkedin.png";
import Xpenser from "../assets/portfolio/Xpenser.png";
import Zomato from "../assets/portfolio/Zomato.png";
import NextArrow from "./carousel/NextArrow";
import PrevArrow from "./carousel/PrevArrow";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title:"Zomato-clone",
      demo:"https://comforting-banoffee-cd4771.netlify.app/",
      src: Zomato,
    },
    {
      id: 2,
      title:"Xpenser-clone",
      demo:"https://chimerical-mousse-474ef5.netlify.app/",
      src: Xpenser,
    },
    {
      id: 3,
      title:"Linkedin-clone",
      demo:"https://lnkd.in/ef-ccQg",
      src: Linkedin,
    },
  
  ];

  const settings = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-4 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <Slider {...settings}> </Slider>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          
          {portfolios.map(({ id, src, title, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex justify- items-center py-2 px-4">
              {title}
              </div>
              <div className="flex justify- items-center">
                <button className="w-1 mx-6 py-3 m-1 duration-200 hover:scale-105">
                <a target="_blank" href={demo} rel="noreferrer">Demo</a>
                </button>
                {/* <button className="w-1/2 mx-6 py-3 m-1 duration-200 hover:scale-105">
                <a target="_blank" href={demo} rel="noreferrer">Code</a>
                </button> */}
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Portfolio;
