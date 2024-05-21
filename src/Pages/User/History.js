import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Components/AuthContext";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import PublicationCard from "../../Components/PublicationCard";

const History = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSidebarToggle = (toggle) => {
    setToggle(toggle);
  };

  return (
    <div className="w-full h-screen flex">
      <SideBar onToggle={handleSidebarToggle} />
      <div className="flex-1 overflow-auto">
        <div className="pt-[2%] sticky top-0 bg-white">
          <div className="flex justify-center text-white">
            <h1 className="text-2xl mb-6 bg-[#0D0D0D] py-4 px-[18%] rounded-2xl text-3xl font-sans font-semibold">
              HISTORY
            </h1>
          </div>
        </div>
        <div className={`${toggle ? "mx-[2%] mb-[5%]" : "mx-[12%]"} px-[2%] flex flex-wrap`}>
          Hola
        </div>
      </div>

      <div className="w-full absolute bottom-0 z-30 ">
        <Footer />
      </div>
    </div>
  );
};

export default History;
