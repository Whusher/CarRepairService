import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Components/AuthContext";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";
import PublicationCard from "../../Components/PublicationCard";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pyValue = windowWidth > 768 ? "2%" : "8%";
  const mtValue = windowWidth < 768 && "12%";

  return (
    <div className="flex flex-col h-screen relative">
      {/* SideNav */}
      {windowWidth < 768 ? (
        isSidebarOpen && (
          <div className="fixed z-20 h-screen overflow-auto m-[2%]">
            <SideBar />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="bg-red-500 text-white px-2 py-1 rounded-xl"
            >
              Close
            </button>
          </div>
        )
      ) : (
        <div className="fixed z-10 h-screen overflow-auto m-[2%]">
          <SideBar />
        </div>
      )}

      {/* Contenido */}
      <div className="flex-1 md:ml-[18%] overflow-auto">
        <div className="pt-[2%] sticky top-0 bg-white">
          <div className="flex justify-center text-white">
            {windowWidth < 768 && (
              <button onClick={() => setIsSidebarOpen(true)} className="bg-red-500 text-white px-2 h-10 rounded-xl mt-3 mr-1"
              >
                |||
              </button>
            )}
            <h1 className="text-2xl mb-6 bg-[#0D0D0D] py-4 px-[18%] rounded-2xl text-3xl font-sans font-semibold">
              PUBLICATIONS
            </h1>
          </div>
        </div>
        <div className="mx-[12%]">
          <PublicationCard />
          <PublicationCard />
        </div>
      </div>

      {/* Footer */}
      <Footer className="w-full fixed bottom-0 z-10" />
    </div>
  );
};

export default Home;
