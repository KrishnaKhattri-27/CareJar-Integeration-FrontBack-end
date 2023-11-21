import React, { useEffect, useState } from "react";

import axios from "axios";
import { useLocation } from "react-router-dom";
import DoctorList from "../components/specialization/DoctorList";
const Doctors = () => {
  const location = useLocation();

  const [data, setData] = useState([]);

  const fetchdata = async () => {
    await axios
      .get(location.pathname)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data);

  return (
    <div>
      {data === undefined ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-black font-bold text-3xl">loading...</h1>
        </div>
      ) : (
        <DoctorList data={data} />
      )}
    </div>
  );
};

export default Doctors;
