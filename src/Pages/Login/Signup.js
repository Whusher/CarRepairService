import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [showSecondPart, setShowSecondPart] = useState(false);

  const handleSubmit = (e) => {
  };

  const handleNextClick = () => {
    setShowSecondPart(true);
  };

  const handleBackClick = () => {
    setShowSecondPart(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-950">
      {/* Left: Image - Solo visible en pantallas grandes */}
      <div className="w-1/2 bg-white h-full overflow-hidden lg:block hidden">
        {/* Contenido de la primera parte del formulario */}
        <h3 className="text-center text-2xl font-bold font-sans italic mt-24 p-3">
          The car of your dreams deserves a great garage with low prices
        </h3>
        <div className="w-full h-full">
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
        <div className="flex justify-center items-center h-full">
          <div className="p-5 w-full max-w-md">
            <img
              src={require("../../Images/Logo.png")}
              alt="Logo"
              className="mx-auto mb-2 w-3/4 sm:w-2/4 md:w-1/4 lg:w-1/2 mt-8"
            />
            <p className="inset-x-0 bottom-0 text-center text-xl text-white font-semibold italic mt-1">
              Car Repair Service
            </p>

            <form onSubmit={handleSubmit} className="p-5 m-3 mt-4">
              {/* Se muestra la primera parte del formulario al cargar la página*/}

              {!showSecondPart && (
                <>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Workshop name
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Address
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Email
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Business phone
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  {/* Botón para cambiar a la segunda parte del formulario */}
                  <div className="py-2 text-right">
                    <button
                      type="button"
                      onClick={handleNextClick}
                      className="bg-orange-400 hover:bg-orange-600 text-black font-bold p-8 rounded-md py-2 px-5 w-1/2"
                    >
                      NEXT
                    </button>
                  </div>
                </>
              )}

              {/* Cuando se preciona NEXT se muestra la segunda parte del formulario */}
              {showSecondPart && (
                <>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        First name
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Last name
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Phone
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white mb-4"
                      >
                        Email
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-white mb-4"
                      >
                        Password
                      </label>
                      <input
                        onChange={() => {}}
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-white mb-4"
                      >
                        Password confirmation
                      </label>
                      <input
                        onChange={() => {}}
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="py-2 text-right">
                    {/* Rregresar a la primera parte del formulario */}
                    <button
                      type="button"
                      onClick={handleBackClick}
                      className="bg-orange-400 hover:bg-orange-600 text-black font-bold py-3 px-4 md:px-5 rounded-md ml-2"
                    >
                      BACK
                    </button>

                    {/* Enviar el formulario */}

                    <button
                      type="submit"
                      className="bg-orange-400 hover:bg-orange-600 text-black font-bold py-3 px-4 md:px-5 rounded-md ml-2"
                    >
                      SIGN UP
                    </button>
                  </div>
                </>
              )}

              <div className="mt-6 text-blue-500 text-center">
                <p className="text-white">
                  Already have an account?{" "}
                  <Link to="/" className="hover:underline text-orange-400">
                    Sign in
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
