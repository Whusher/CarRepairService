import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Components/AuthContext";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import AceptedCard from "../../Components/Acepted";

const CurrentAcepted = () => {
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
  

  const loadToggleState = () => {
    const storedToggleState = localStorage.getItem("toggle");
    return storedToggleState ? JSON.parse(storedToggleState) : false;
  };

  useEffect(() => {
    setToggle(loadToggleState());
  }, []);

  return (
    <div className="w-full h-screen flex">
      <SideBar onToggle={handleSidebarToggle} />
      <div className="flex-1 overflow-auto">
        <div className="pt-[2%] sticky top-0 bg-white">
          <div className="flex justify-center text-white">
            <h1 className="text-2xl mb-6 bg-[#0D0D0D] py-4 px-[18%] rounded-2xl text-3xl font-sans font-semibold">
              ACEPTED
            </h1>
          </div>
        </div>
        <div className={`transition-all duration-1000 ${toggle ? "flex flex-wrap mx-[2%] mb-[4%]" : "grid grid-cols-1 mx-[12%] mb-[2%]"} px-[2%]`}>
          <AceptedCard toggle={toggle} />
          <AceptedCard toggle={toggle} />
          <AceptedCard toggle={toggle} />
          <AceptedCard toggle={toggle} />
          <AceptedCard toggle={toggle} />
          <div className="py-8"></div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 z-30 ">
        <Footer />
      </div>
    </div>
  );
};

export default CurrentAcepted;