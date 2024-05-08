import React, { useContext } from "react";
import { AuthContext } from "../../Components/AuthContext";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row flex-1 m-8">
        {/* SideNav */}
        <SideBar />

        {/* Contenido */}
        <div className="bg-white flex-1 p-4 mx-16">
          <div className="flex justify-center text-white">
            <h1 className="text-2xl mb-4 bg-[#0D0D0D] py-4 px-48 rounded-2xl text-2x1 font-sans font-semibold">
              PUBLICATIONS
            </h1>
          </div>
          <div>Content</div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
