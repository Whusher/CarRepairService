import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PublicationCard = ({ toggle }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`transition-all duration-500 flex flex-col md:flex-row bg-gray-100 rounded-3xl shadow-xl mt-[2%] overflow-hidden mb-10 ${toggle ? "w-[45%] mx-[2%]" : "w-full mx-0"}`}>
      {/* Parte izquierda */}
      <div className="w-full md:w-[55%]">
        <img
          src={require("../Images/accidente1.png")}
          alt="Publication"
          className="w-full"
          style={{ height: `${toggle ? "335px" : windowWidth >= 768 ? "420px" : "280px"}` }}
        />
      </div>
      {/* Parte derecha */}
      <div className={`w-full md:w-[45%] px-[3%] bg-[#0D0D0D]`}>
        <div className="flex flex-col justify-between h-full p-[4%]">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white font-sans flex justify-center py-2">
              CHEVROLET SPARK 2010
            </h2>
            <div className="w-full h-1 bg-[#E6961D] mb-[5%]" />
            <div className={`mx-[4%] mt-[4%] ${toggle ? "text-sm" :"text-xl" } text-white`}>
              <p className="mb-[4%]">
                <span className="font-semibold ">Owner: </span>{" "}
                <span className="text-base">Aaron</span>{" "}
              </p>
              <p className="mb-[4%]">
                <span className="font-semibold ">Location: </span>{" "}
                <span className="text-base">Av. Zapato #13</span>
              </p>
              <p className="mb-[4%]">
                <span className="font-semibold ">Incident: </span>{" "}
                <span className="text-base">Me chocaron bien gacho</span>
              </p>
            </div>
          </div>
          <div className={`flex justify-center`}>
            <Link
              to="/details"
              className={`bg-[#E6961D] hover:bg-orange-500 font-bold py-[2%] rounded-3xl w-1/3 shadow-button mb-[8%] text-center`}
            >
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
