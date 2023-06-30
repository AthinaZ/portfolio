"use client";
import React from "react";
import { Link } from "react-scroll/modules";

const Main = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
      <div className="md:w-3/4">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hello, I&#39;m Athina!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a {" "}
            <span className="font-semibold text-blue-600">
              Web and Mobile Developer{" "}
            </span>
            who&#39;s always on the move. Deeply passionate about crafting exceptional user experiences; believing that attention to detail is paramount in creating frontend solutions that users will love.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-600 rounded shadow hover:bg-blue-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
        </Link>
      </div>
    </section>
  );
};

export default Main;

