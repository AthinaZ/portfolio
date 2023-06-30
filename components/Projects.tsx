import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Appointments",
    description: "Appointments is a frontend app built with React and TailwindCSS.",
    image: "/images/TinyTots.png",
    github: "https://github.com/AthinaZ/Appointments",
  },
  {
    name: "To-Do App",
    description:"Todo App is a React and NestJS application with authentication. Dockerized PostgreSQL for data storage. Core functionalities: user login/registration, create, edit, delete todos. Advanced features: drag and drop prioritization and category selection dropdown.",
    image: "/images/Frame.png",
    github: "https://github.com/AthinaZ/Todo-App",
  },
  {
    name: "Chatz",
    description: "Chatz is a mobile app that allows one-on-one and group chats. Powered by Expo, React Native, React Navigation, Firebase Authentication, and Firestore persistence.",
    image: "/images/Chatz.png",
    github: "https://github.com/AthinaZ/Chatz",
  },
  {
    name: "Sport Mates",
    description: "Sport Mates is an app that allows users to join the ultimate sports community, play sports and make new connections.",
    image: "/images/Sportmates.png",
    link: "https://sportmatesapp.webflow.io",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-12 md:pt-16 text-center font-bold text-4xl">
        Projects
        <hr className="w-20 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 bg-gray-200 dark:bg-neutral-200"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github ? (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : (
                        <Link href={project.link || ""} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
