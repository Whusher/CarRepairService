import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import AlertIcon from "../../Components/AlertIcon";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Obtiene la función de login del contexto de autenticación
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validaciones aquí
    if ((!email || email === "") && (!password || password === "")) {
      setEmailError(true);
      setPasswordError(true);
      return;
    } else if (!email || email === "") {
      setEmailError(true);
      return;
    } else if (!password || password === "") {
      setPasswordError(true);
      return;
    }
    
    setEmailError(false);
    setPasswordError(false);

    // Llamar a la función de login del contexto de autenticación
    login(email);
    // Redirigir al usuario a la página Home después de iniciar sesión
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-950">
      {/* Left: Image - Solo visible en pantallas grandes */}
      <div className="w-1/2 bg-white h-full overflow-hidden lg:block hidden">
        <h3 className="text-center text-2xl font-bold font-sans italic mt-24 p-3">
          The car of your dreams deserves a great garage with low prices
        </h3>
        <div className="w-full h-full">
          {/* Contenido del lado izquierdo */}
          <div className="relative h-full">
            <img
              src={require("../../Images/Car.png")}
              alt=""
              className="absolute inset-x-0 top-[-20%] w-350 h-1/2 mx-auto z-10"
            />
            <div className="h-1/2 w-full transform skew-y-12 bg-orange-400 mt-80">
              {/**First structure by AA triangle */}
              <div className="absolute inset-x-0 top-60 w-full h-full bg-orange-500 transform skew-y-6">
                {/**Second Structure by AA */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-1/2 bg-neutral-950 overflow-auto max-h-screen">
      <div className="flex justify-end text-right mr-4">
          <Link className="font-semibold font-sans text-orange-400 shadow-lg hover:shadow-orange-500/50 rounded-lg p-2">
            About Us
            <svg
              className="icon icon-tabler icon-tabler-battery-automotive inline mb-2 "
              width="44"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#E6961D"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M6 6v-2" />
              <path d="M19 4l0 2" />
              <path d="M6.5 13l3 0" />
              <path d="M14.5 13l3 0" />
              <path d="M16 11.5l0 3" />
            </svg>
          </Link>
        </div>
        {/* Contenido del lado derecho */}
        <div className="flex justify-center items-center h-full">
          <div className="p-5 w-full max-w-md">
            <img
              src={require("../../Images/Logo.png")}
              alt="Logo"
              className="mx-auto mb-2 w-3/4 sm:w-2/4 md:w-1/4 lg:w-1/2 mt-8"
            />
            <p className="inset-x-0 bottom-0 text-center text-xl text-white font-semibold italic mt-1">
              "Car Repair Service"
            </p>

            {/* Formulario */}
            <form action="#" method="POST" className="p-5 m-3 mt-4">
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-4">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                    emailError ? "border-red-500" : ""
                  }`}
                  autoComplete="off"
                />
                {emailError && (
                  <p
                    className="text-red-500 text-sm mt-1"
                    style={{ display: "inline-flex" }}
                  >
                    <AlertIcon/>
                    This field is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-white mb-4">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                    passwordError ? "border-red-500" : ""
                  }`}
                  autoComplete="off"
                />
                {passwordError && (
                  <p
                    className="text-red-500 text-sm mt-1"
                    style={{ display: "inline-flex" }}
                  >
                    <AlertIcon/>
                    This field is required
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="mb-6 text-blue-500">
                <a
                  href="mailto:syncro_cargo@gmail.com"
                  className="hover:underline text-orange-400"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-orange-400 hover:bg-blue-600 text-black font-bold p-8 rounded-md py-2 px-5 w-1/2"
                >
                  SIGN IN
                </button>
              </div>

              {/* Sign up Link */}
              <div className="mt-6 text-blue-500 text-center mb-4">
                <p className="text-white">
                  Have you a mechanical workshop?{" "}
                  <Link
                    to="/signup"
                    className="hover:underline text-orange-400"
                  >
                    Register now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
