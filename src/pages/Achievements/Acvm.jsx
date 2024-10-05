import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Acvm = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
    });
  }, []);
  return (
    
    <section id="achievements" className="text-white  h-screen" data-aos="fade-up">
      <p className="mt-8 ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">
        ⚪ Achievements
      </p>
      <div>
        <h1 className="py-8 px-24 font-poppins text-3xl ">
          Achievements & Recognitions
        </h1>
        <ul className="mt-2 px-24">
          <li className="border-y-2 border-white p-2 px-8 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2  rounded-md">time</div>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
          <li className="border-y-2 border-white p-2 px-8 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2  rounded-md">time</div>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
          <li className="border-y-2 border-white p-2 px-8 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2  rounded-md">time</div>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                National Service Scheme :
              </h1>
              <p className="text-sm">
                {" "}
                Achieved ’B’ and ’C’ Level Certificates. • Managed several
                events and Blood Donation Camps.
              </p>
            </div>
          </li>
          <li className="border-y-2 border-white p-2 px-8 font-inconsolata flex flex-col justify-around">
            <div className="flex flex-row gap-6">
              <div className="bg-white text-black rounded-md px-2">
                location
              </div>
              <div className="px-2 border-white border-2  rounded-md">time</div>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
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
