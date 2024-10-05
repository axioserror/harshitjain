import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Acvm = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
    });
  }, []);
  return (
    <section
      id="achievements"
      className="text-white mb-24  h-screen"
      data-aos="fade-up"
    >
      <p className="mt-8 ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">
        ⚪ Achievements
      </p>
      <div className="">
        <h1 className="py-8 px-24 font-poppins text-3xl ">
          Achievements & Recognitions
        </h1>
        <ul className="mt-4 md:px-24 px-14 ">
          <li className="border-y-2 border-white py-3 md:px-6 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2 text-nowrap rounded-md">
                time time time time
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mt-2">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
          <li className="border-y-2 border-white py-3 md:px-6 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2 text-nowrap rounded-md">
                time time time time
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mt-2">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
          <li className="border-y-2 border-white py-3 md:px-6 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2 text-nowrap rounded-md">
                time time time time
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mt-2">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
          <li className="border-y-2 border-white py-3 md:px-6 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2 text-nowrap rounded-md">
                time time time time
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mt-2">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Acvm;
