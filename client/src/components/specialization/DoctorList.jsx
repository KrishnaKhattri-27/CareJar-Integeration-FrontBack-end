import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";

const DoctorList = ({ data }) => {
  return (
    <div className="flex h-screen items-center">
      <div className="lg:w-[75%]  my-5 lg:my-0 mx-auto bg-white overflow-y-scroll md:px-4 h-[450px] ">
        <ul>
          {data.map((e) => (
            <li className="list-none flex md:flex-row flex-col border-b border-slate-400 my-2">
              <div className="md:w-[25%] h-[200px] md:h-[] w-[100%]">
              <img src={e.image} alt="" className=" h-full md:h-full mx-auto rounded-full"/>

               </div>
              <div className="md:w-[75%] h-[75%] flex md:flex-row flex-col md:py-10 gap-x-2 justify-between">
                <div className="ms-5 md:mb-0 mb-5">
                  <h1 className="text-2xl font-semibold mb-1 text-blue-600">
                    {"Dr. " + e.name}
                  </h1>
                  <h5 className="text-slate-400 font-medium">Dentits</h5>
                  <p className="mb-2 text-slate-400 font-medium">
                    {e.experience + " years experience overall"}
                  </p>
                  <p>{e.address}</p>
                  <h5 className="text-slate-400 font-medium">
                    {"Rp" + e.fees + " Consultation fee at clinic"}
                  </h5>
                  <div className="mt-3 flex items-center gap-x-2 border-t pt-3 border-slate-400">
                    <div className="bg-green-400 flex items-center px-2 py-1 rounded-md">
                      <FaThumbsUp />
                      <span className="ms-1">{e.feedback}%</span>
                    </div>
                    <div>
                      <h3 className=" underline">
                        {e.patient + " Patient Stories"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex mt-2 md:mt-0 mb-5 md:mb-0 flex-col items-center  justify-end px-5">
                  <h3 className="flex items-center gap-x-1 text-green-600 font-medium mb-2">
                    <MdEventAvailable /> Availabel Today
                  </h3>
                  <div className="text-center bg-blue-500 text-white px-6 py-2 rounded-md leading-4">
                    <h5 className="mb-0">Book Appointment</h5>
                    <h5>No Booking Fee</h5>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorList;
