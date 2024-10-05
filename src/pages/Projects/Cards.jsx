import React from "react";

const Cards = () => {
  const techStack = ["React", "Node", "Express", "MongoDB"];

  return (
    <div className="border-2 text-white bg-black  border-white rounded-lg max-w-md p-5 ">
      <div className="border-b-2 py-4 flex flex-col justify-start ">
        <div className="font-poppins text-2xl font-light">project name</div>
        <div>
          <ul className="  text-black  flex gap-2 flex-row text-justify mt-2 justify-start ">
            {techStack &&
              techStack.map((techStack, i) => (
                <li key={i} className="bg-white rounded-md p-1 text-sm ">
                  {techStack}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full ">
        <p className="border-2 border-white rounded-lg p-2 mt-2 ">
          {" "}
          Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Iure assumenda aut laboriosam sint temporibus
          molestias necessitatibus rerum voluptate, natus velit nisi at tempore
          repellat, aliquam sit quaerat sapiente quas! Hic nesciunt at,
          voluptate officia ullam nobis ad voluptatibus porro minus in eaque.
          Iure, esse explicabo{" "}
        </p>
      </div>
    </div>
  );
};

export default Cards;
