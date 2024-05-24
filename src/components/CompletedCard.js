import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CompletedCard({ toggle }) {
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
    <div className={`transition-all duration-500 flex flex-col md:flex-row bg-[#0D0D0D] rounded-3xl shadow-xl mt-[2%] overflow-hidden mb-5 ${toggle ? "w-[45%] mx-[2%]" : "w-full mx-0"}`}>
      <div className={`${toggle ? "w-[55%] p-4" : "w-250 p-6"}`}>
        <img
          src={require("../Images/accidente1.png")}
          alt="Publication"
          className="w-200 rounded-3xl"
          style={ toggle ? { height: 160 } : { height: 200}}
        />
      </div>
      <div className={`w-full pl-2 pr-[3%] bg-[#0D0D0D]`}>
        <div className="flex flex-col justify-between h-full ">
          <div>
            <h2 className="text-2xl font-semibold text-white font-sans flex justify-center py-2 pt-6">
              CHEVROLET SPARK 2010
            </h2>
            <div className="w-full h-1 bg-[#E6961D] mb-2" />
            <div className={`text-white ${toggle ? "text-sm" :"text-lg"}`}>
              <p className="mb-[1%]">
                <span className="font-semibold">Owner: </span>{" "}
                <span className="text-base">Aaron</span>{" "}
              </p>
              <p className="mb-[1%]">
                <span className="font-semibold">Location: </span>{" "}
                <span className="text-base"> Los Angeles, CA.</span>{" "}
              </p>
              <p className="mb-[1%]">
                <span className="font-semibold">Charged: </span>{" "}
                <span className="text-base text-orange-400"> $2700 </span>{" "}
              </p>
              <div className="flex justify-end bottom-1">
                <p className="mb-[1%]">
                  <span className="text-base"> 05/22/2024 </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedCard;
