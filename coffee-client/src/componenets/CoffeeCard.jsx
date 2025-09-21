import React from "react";
import { FaEye } from "react-icons/fa";
import { PiGearBold } from "react-icons/pi";
import { ImBin } from "react-icons/im";


export default function CoffeeCard({ coffee }) {
  const { name, price, supplier, taste, category, details, photourl } = coffee;
  return (
    <div className="p-4 ">
      <div className="card card-side bg-[#bb9f8c] shadow-xl  ">
        <div className="p-4">
          <figure>
            <img className="" src={photourl} alt="Movie" />
          </figure>
        </div>
        <div className="card-body text-black  ">
          <h2 className="card-title text-xl mb-2 underline">{name}</h2>

          <div className="flex">
            <div className="font-semibold md:w-full space-y-1 text-lg font-mono ">
              <p>Taste:{taste}</p>
              <p>Details:{details}</p>
              <p>Supplier:{supplier}</p>
              <p>Category:{category}</p>
              <p>Details:{details}</p>
            </div>
            <div className="card-actions justify-end md:w-full p-4 ">
              <div className="flex flex-col gap-2 items-en p-2">
                <button className="btn btn-active"><FaEye /></button>
                <button className="btn btn-"><PiGearBold /></button>
                <button className="btn"><ImBin/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
