import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertIcon from "../../Components/AlertIcon";

export default function Signin() {
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [workshopName, setWorkshopName] = useState("");
  const [location, setAddress] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [workshopNameError, setWorkshopNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [businessPhoneError, setBusinessPhoneError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [personalPhoneError, setPersonalPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !workshopName ||
      !location ||
      !businessEmail ||
      !businessPhone ||
      !firstName ||
      !lastName ||
      !personalPhone ||
      !password ||
      !confirmPassword
    ) {
      // Si alguno de los campos está vacío, mostrar la alerta correspondiente
      setWorkshopNameError(!workshopName);
      setAddressError(!location);
      setEmailError(!businessEmail);
      setBusinessPhoneError(!businessPhone);
      setFirstNameError(!firstName);
      setLastNameError(!lastName);
      setPersonalPhoneError(!personalPhone);
      setPasswordError(!password);
      setConfirmPasswordError(!confirmPassword);
      return;
    }

    return alert("Todo chido");
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
          Your dream car deserves a top-tier workshop with unbeatable rates.
        </h3>
        <div className="w-full h-full">
          <div className="relative h-full">
            <img
              src={require("../../Images/Car2.png")}
              alt=""
              className="absolute inset-x-0 top-[-20%] w-350 h-1/2 mx-auto z-10"
            />
            <div className="h-1/2 w-full transform skew-y-10 bg-blue-500 mt-52">
              {/**First structure by AA triangle */}
              <div className="absolute inset-x-0 top-60 w-full h-full bg-blue-700 transform skew-y-6">
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
              "General"
            </p>

            <form onSubmit={handleSubmit} className="p-5 m-3 mt-4">
              {/* Se muestra la primera parte del formulario (informacion del taller) al cargar la página*/}

              {!showSecondPart && (
                <>
                  <p className="inset-x-0 bottom-0 text-right text-xl text-white font-semibold italic mt-1">
                    Business info
                  </p>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        htmlFor="workshopName"
                        className="block text-white mb-4"
                      >
                        Workshop name
                      </label>
                      <input
                        onChange={(e) => {
                          setWorkshopName(e.target.value);
                          setWorkshopNameError(false);
                        }}
                        type="text"
                        id="workshopName"
                        name="workshopName"
                        value={workshopName}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          workshopNameError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {workshopNameError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="location"
                        className="block text-white mb-4"
                      >
                        Location
                      </label>
                      <input
                        onChange={(e) => {
                          setAddress(e.target.value);
                          setAddressError(false);
                        }}
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          addressError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {addressError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="businessEmail"
                        className="block text-white mb-4"
                      >
                        Email
                      </label>
                      <input
                        onChange={(e) => {
                          setBusinessEmail(e.target.value);
                          setEmailError(false);
                        }}
                        type="text"
                        id="businessEmail"
                        name="businessEmail"
                        value={businessEmail}
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
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="businessPhone"
                        className="block text-white mb-4"
                      >
                        Business phone
                      </label>
                      <input
                        onChange={(e) => {
                          setBusinessPhone(e.target.value);
                          setBusinessPhoneError(false);
                        }}
                        type="text"
                        id="businessPhone"
                        name="businessPhone"
                        value={businessPhone}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          businessPhoneError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {businessPhoneError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
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

              {/* Cuando se preciona NEXT se muestra la segunda parte del formulario (informacion del dueño del taller)*/}
              {showSecondPart && (
                <>
                  <p className="inset-x-0 bottom-0 text-right text-xl text-white font-semibold italic mt-1">
                    Owner info
                  </p>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-white mb-4"
                      >
                        First name
                      </label>
                      <input
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          setFirstNameError(false);
                        }}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          firstNameError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {firstNameError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-white mb-4"
                      >
                        Last name
                      </label>
                      <input
                        onChange={(e) => {
                          setLastName(e.target.value);
                          setLastNameError(false);
                        }}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          lastNameError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {lastNameError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="personalPhone"
                        className="block text-white mb-4"
                      >
                        Phone
                      </label>
                      <input
                        onChange={(e) => {
                          setPersonalPhone(e.target.value);
                          setPersonalPhoneError(false);
                        }}
                        type="text"
                        id="personalPhone"
                        name="personalPhone"
                        value={personalPhone}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          personalPhoneError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {personalPhoneError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    {/* <div className="mb-4">
                      <label
                        htmlFor="personalEmail"
                        className="block text-white mb-4"
                      >
                        Email
                      </label>
                      <input
                        onChange={() => {}}
                        type="text"
                        id="personalEmail"
                        name="personalEmail"
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          personalEmailError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {personalEmailError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div> */}

                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-white mb-4"
                      >
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
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-white mb-4"
                      >
                        Password confirmation
                      </label>
                      <input
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          setConfirmPasswordError(false);
                        }}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        className={`w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500 ${
                          confirmPasswordError ? "border-red-500" : ""
                        }`}
                        autoComplete="off"
                      />

                      {confirmPasswordError && (
                        <p
                          className="text-red-500 text-sm mt-1"
                          style={{ display: "inline-flex" }}
                        >
                          <AlertIcon />
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="py-2 text-right">
                    {/* Rregresar a la primera parte del formulario */}
                    <button
                      type="button"
                      onClick={handleBackClick}
                      className="bg-orange-400 hover:bg-orange-600 text-black font-bold py-2 px-4 md:px-5 rounded-md ml-2"
                    >
                      BACK
                    </button>

                    {/* Enviar el formulario */}

                    <button
                      onClick={handleSubmit}
                      className="bg-orange-400 hover:bg-orange-600 text-black font-bold py-2 px-4 md:px-5 rounded-md ml-2"
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
