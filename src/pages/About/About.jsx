import React, { useEffect } from "react";
import about from "../../assets/about.png";
import { RxTriangleRight } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Restful API",
    "MLOps",
    "Python",
    "Java",
    "C++",
    "HTML/CSS",
    " Linux",
    "GitHub",
    "Jupyter",
    "GCP",
  ];
  return (
    <section className="text-white mb-8" id="about" data-aos="fade-up">
      <p className="mt-8 ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit">
        ⚪ About
      </p>
      <div className="flex md:flex-row flex-col justify-around items-center mt-4  ">
        <div className="">
          <img
            src={about}
            alt="harshit jain"
            className=" rounded-lg shadow-md shadow-slate-200/10 mb-6 "
          />
        </div>
        <div className="md:w-1/2 w-4/5 ">
          <h1 className="font-normal text-6xl font-poppins p-4 text-center">
            Harshit Jain
          </h1>
          <p className="text-justify font-inconsolata-condensed  text-wrap ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            repellendus, illo perspiciatis asperiores iusto deleniti molestias
            officia aperiam aliquam placeat? Nihil dolorum a accusamus cumque
            quae vero nostrum reiciendis perspiciatis officiis cum ut,
            voluptatibus quisquam molestias excepturi sapiente ullam est,
            adipisci necessitatibus assumenda placeat similique. Vero dolor
            illum quisquam aliquid. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Earum asperiores possimus cumque similique
            molestiae recusandae quia alias qui incidunt. Provident similique
            optio numquam hic assumenda quis laboriosam, maxime, obcaecati dicta
            suscipit vel id odio amet cupiditate consequatur incidunt a
            perferendis. Minima assumenda sequi odio id nisi laudantium labore
            vel quos.
          </p>{" "}
          <br />
          <p className="text-justify font-inconsolata-condensed  text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quae aperiam sed fugit illo maiores sit eveniet inventore vel minima
            ea cum, eos illum expedita iure voluptate fuga tempora eius rerum
            amet hic ad corporis. Exercitationem alias delectus autem itaque
            placeat, dignissimos natus ipsum ut sequi minima facilis.
            Repudiandae, itaque!
          </p>
          <br />
          <h3 className=" font-light font-poppins text-xl ">Skills:</h3>
          <ul className="md:mx-10 text-justify text-nowrap grid md:grid-rows-3 grid-rows-7 md:grid-cols-4 grid-cols-3 md:w-2/2 md:gap-2 md:gap-x-2 gap-x-36">
            {skills &&
              skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex flex-row items-center font-inconsolata "
                >
                  {" "}
                  <RxTriangleRight />
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
