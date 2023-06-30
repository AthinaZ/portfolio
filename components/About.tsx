import React from "react";

const skills = [
  { skill: "JavaScript", category: "Frontend" },
  { skill: "TypeScript", category: "Frontend" },
  { skill: "React", category: "Frontend" },
  { skill: "React-Native", category: "Frontend" },
  { skill: "NodeJS", category: "Backend" },
  { skill: "NestJS", category: "Backend" },
  { skill: "Docker", category: "DevOps" },
  { skill: "Kubernetes", category: "DevOps" },
  { skill: "Firebase", category: "Database" },
  { skill: "PostgreSQL", category: "Database" },
];

const About = () => {
  const categories = Array.from(new Set(skills.map((item) => item.category)));

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-20 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              What I love
            </h1>
            <p>
            I&#39;m a passionate web and mobile developer driven by the challenge of solving complex problems. I stay up-to-date with the latest trends and technologies to deliver cutting-edge solutions. Whether it&#39;s building scalable web applications or developing sleek mobile experiences, I&#39;m dedicated to exceeding expectations. With attention to detail, I create high-quality, robust solutions that leave a lasting impact. I thrive on continuous learning and am committed to honing my skills to create exceptional user experiences. Let&#39;s push the boundaries together&#33;
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">Stack / Technologies</h1>
            <div className="grid grid-cols-2 gap-4 justify-center">
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 px-4 py-2 rounded font-semibold text-center"
                >
                  <h2 className="text-lg font-bold mb-2 text-black dark:text-gray-900">{category}</h2>
                  {skills
                    .filter((item) => item.category === category)
                    .map((item, skillIdx) => (
                      <p key={skillIdx} className="text-gray-500 mb-1">
                        {item.skill}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
