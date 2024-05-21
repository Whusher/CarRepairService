import React, { useState } from "react";

export default function WorkDetails() {
  const [expanded, setExpanded] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
    setExpanded(true);
  };

  const handleCloseModal = () => {
    setModalImage(null);
    setExpanded(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[40%] h-full bg-[#0D0D0D] p-8 flex flex-col justify-between">
        <div className="px-[15%]">
          <h1 className=" text-white text-2xl text-center py-[5%] rounded-2xl text-3xl font-sans font-semibold">
            OFFERT FIX CHEVROLET SPARK 2020
          </h1>
          <div className="mt-8 space-y-4 rounded">
            <div className="flex items-center pb-[4%]">
              <label htmlFor="input1" className="text-white pr-5">
                Fix offer <span className="text-orange-400">(USD)</span>
              </label>
              <input
                type="text"
                id="input1"
                className="flex-grow bg-white text-[#0D0D0D] rounded-xl p-2 h-8 focus:outline-none pl-2 pb-2.5"
              />
            </div>
            <div className="flex items-center pb-[4%]">
              <label htmlFor="input2" className="text-white pr-5">
                You will get
              </label>
              <input
                type="text"
                id="input2"
                disabled={true}
                className="flex-grow bg-[#A1A1A1] text-[#0D0D0D] rounded-xl p-2 h-8 focus:outline-none ml-5 pl-2 pb-2.5"
              />
            </div>
            <div className="flex items-center pb-[4%]">
              <label htmlFor="duration" className="text-white pr-5">
                Duration <span className="text-orange-400">(Max 5 days)</span>
              </label>
              <input
                type="text"
                id="duration"
                className="flex-grow bg-white text-[#0D0D0D] rounded-xl p-2 h-8 focus:outline-none pl-2 pb-2.5"
              />
            </div>
            <div className="">
              <label htmlFor="input4" className="text-white w-1/4 pr-5">
                Fix Description:{" "}
                <h1 className="text-sm">
                  (Includes results that you will give to the customer after
                  accept the offer).
                </h1>
                <textarea
                  id="description"
                  className="flex-grow bg-white text-[#0D0D0D] rounded-xl h-24 w-full mt-3 resize-none focus:outline-none p-2"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <button className="text-black w-40 bg-orange-500 py-2 px-4 rounded-2xl font-semibold">
              SEND OFFER
            </button>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full bg-white flex flex-col overflow-auto">
        {/* Contenedor superior */}
        <div className="h-[50%] bg-[#16181A] my-8 mx-[10.5%] rounded-3xl">
          <h1 className=" text-white text-center py-5 px-8 text-2xl font-sans font-semibold">
            Operation's info
          </h1>
          <div className="flex flex-col space-y-4 px-[6%] pr-[15%] mt-3">
            <div className="flex items-center">
              <label htmlFor="input1" className="text-white pr-5 text-lg">
                Client's name
              </label>
              <input
                type="text"
                id="input1"
                className="flex-grow bg-white text-[#0D0D0D] rounded-xl p-2 h-8 focus:outline-none pl-2 pb-2.5"
              />
            </div>
            <div className="flex items-start pt-4">
              <label htmlFor="input1" className="text-white pr-[6.5%] text-lg">
                Description
              </label>
              <textarea
                type="text"
                id="input1"
                className="flex-grow bg-white text-[#0D0D0D] rounded-xl p-2 h-24 focus:outline-none pl-2 pb-2.5"
              />
            </div>
            {/* Otros campos del formulario */}
          </div>
        </div>
        {/* Contenedor inferior */}
        <div className="h-[50%] bg-white flex flex-wrap justify-center">
          {/* Imágenes */}
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={require(`../../Images/accidente1.png`)}
              alt={`Publication ${index}`}
              className="w-[45%] cursor-pointer m-[2%] rounded-2xl"
              style={{
                height: 230,
                width: 340,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => handleImageClick("../../Images/accidente1.png")}
            />
          ))}
          {/* Modal */}
          {expanded && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative">
                <button
                  className="absolute top-0 right-0 text-white text-2xl m-2"
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <img
                  src={require(`../../Images/accidente1.png`)}
                  alt="Expanded Image"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          )}
          {/* Fin del modal */}
        </div>
      </div>
    </div>
  );
}
