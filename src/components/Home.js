import React from "react";
import Profile from "../assets/profile.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-2xl font-bold text-white">
            HI THERE! I'm
          </h2>
          <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Sanjeevkumar Kukanur
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A Font-End Web Developer passionate about interactive applications
            and experience on web.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
