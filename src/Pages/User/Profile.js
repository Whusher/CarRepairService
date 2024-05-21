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
        <div className="mx-[16%] my-[3%] bg-[#0D0D0D] text-white px-8 py-6 rounded-3xl max-w-620 ">
          <div className="relative">
            <img
              src="https://placehold.co/600x200"
              alt="Workshop Image"
              className="w-full rounded-lg rounded-t-lg"
            />
            <button className="absolute top-1 right-1 bg-transparent text-white px-2 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16" >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
              </svg>
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Repair workshop</h2>
            <p className="flex items-center">
              <strong>Email:</strong> ejampleshop1@email.com{" "}
              <button className="bg-transparent text-white px-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16" >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                </svg>
              </button>
            </p>
            <p className="flex items-center">
              <strong>Phone:</strong> 552325521{" "}
              <button className="bg-transparent text-white px-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16" >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                </svg>
              </button>
            </p>
            <p className="flex items-center">
              <strong>Rating:</strong>
              <span className="text-yellow-400">★★★★☆</span>
              <span>(170 ratings)</span>
              <span className="text-sm">(4.3)</span>
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Outstanding works</h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative">
                  <img
                    src={`https://placehold.co/150x100?text=Car${item}`}
                    alt="Car Image"
                    className="w-full rounded-lg"
                  />
                  <button className="absolute top-1 right-1 bg-transparent text-white px-2 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16" >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[6%]"></div>
      </div>

      <div className="w-full absolute bottom-0 z-30">
        <Footer />
      </div>
    </div>
  );
};

export default History;
