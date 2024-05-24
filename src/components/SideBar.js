import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function SideBar({ onToggle }) {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggle(!toggle);
    if (onToggle) {
      onToggle(!toggle);
    }
    saveToggleState(!toggle);
  };
  
  const saveToggleState = (toggleState) => {
    localStorage.setItem("toggle", JSON.stringify(toggleState));
  };

  const handleLogout = () => {
    logout();
  };

  const loadToggleState = () => {
    const storedToggleState = localStorage.getItem("toggle");
    return storedToggleState ? JSON.parse(storedToggleState) : false;
  };

  useEffect(() => {
    setToggle(loadToggleState());
  }, []);

  return (
    <div
      className={`${
        toggle ? "last: w-[7rem]" : "last: w-[18rem]"
      } bg-[#0D0D0D] h-[85%] rounded-3xl ml-8 p-4 border transition-all duration-500 border-solid relative bottom-6 top-[4%]`}
    >
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-black rounded-full cursor-pointer"
        onClick={handleToggle}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="white"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
          className={`${
            toggle ? "rotate-180" : ""
          } transition-all duration-300`}
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </div>
      <div className="flex justify-center pt-[5%] text-xl px-5 text-white">
        <p>
          Hello, <span className="text-orange-500">{user.name}!</span>
        </p>
      </div>
      <div className="flex justify-center pt-8 text-white">
        {!toggle ? (
          <div className="w-[90%] h-1 bg-[#E6961D]" />
        ) : (
          <div className="w-full h-1 bg-[#E6961D]" />
        )}
      </div>
      <div className="mt-[12%] mx-[8%]">
        <Link aria-current="page" className="active" to={"/home"}>
          <button
            className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 rounded-lg text-white hover:bg-white/10 
            hover:bg-gradient-to-tr hover:from-orange-600 to-orange-400
            hover:shadow-lg hover:shadow-orange-500/40 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize ${toggle && "my-[15%]"}`}
            type="button"
          >
            {!toggle ? (
              <>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  PUBLICATIONS
                </p>
              </>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={toggle ? "25" : "20"}
              height={toggle ? "25" : "20"}
              fill="currentColor"
              class="bi bi-shop"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
            </svg>
          </button>
        </Link>
        <Link className="" to="/history">
          <button
            className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 rounded-lg text-white hover:bg-white/10 
                  hover:bg-gradient-to-tr hover:from-orange-600 to-orange-400
                  hover:shadow-lg hover:shadow-orange-500/40 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize ${toggle && "my-[15%]"}`}
            type="button"
          >
            {!toggle ? (
              <>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  HISTORY
                </p>
              </>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={toggle ? "25" : "20"}
              height={toggle ? "25" : "20"}
              fill="currentColor"
              class="bi bi-clock-history"
              viewBox="0 0 16 16"
            >
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
        </Link>
        <Link className="" to="/acepted">
          <button
            className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 rounded-lg text-white hover:bg-white/10 
                  hover:bg-gradient-to-tr hover:from-orange-600 to-orange-400
                  hover:shadow-lg hover:shadow-orange-500/40 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize ${toggle && "my-[15%]"}`}
            type="button"
          >
            {!toggle ? (
              <>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  CURRENT ACEPTED
                </p>
              </>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={toggle ? "25" : "20"}
              height={toggle ? "25" : "20"}
              fill="currentColor"
              class="bi bi-ui-checks"
              viewBox="0 0 16 16"
            >
              <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        </Link>
        <Link className="" to="/profile">
          <button
            className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 rounded-lg text-white hover:bg-white/10 
                  hover:bg-gradient-to-tr hover:from-orange-600 to-orange-400
                  hover:shadow-lg hover:shadow-orange-500/40 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize ${toggle && "my-[15%]"}`}
            type="button"
          >
            {!toggle ? (
              <>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  MY ACCOUNT
                </p>
              </>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={toggle ? "25" : "20"}
              height={toggle ? "25" : "20"}
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </button>
        </Link>
        <button
          className={`bg-[#0D0D0D] absolute bottom-8 none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 rounded-lg text-white hover:bg-white/10 
                  hover:bg-gradient-to-tr hover:from-red-600 to-red-400
                  hover:shadow-lg hover:shadow-red-500/40 active:bg-white/30 z-30 ${
                    toggle ? "w-[60%]" : "w-[75%]"
                  } flex items-center gap-4 px-4 capitalize`}
          type="button"
          onClick={handleLogout}
        >
          {!toggle ? (
            <>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                LOGOUT
              </p>
            </>
          ) : (
            ""
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={toggle ? "25" : "20"}
            height={toggle ? "25" : "20"}
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
