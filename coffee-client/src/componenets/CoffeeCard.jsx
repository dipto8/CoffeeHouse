import React from "react";
import { FaEye } from "react-icons/fa";
import { PiGearBold } from "react-icons/pi";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function CoffeeCard({ coffee }) {
  const { _id, name, price, supplier, taste, category, details, photourl } =
    coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee${_id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });

        console.log("delete Confirm");
      }
    });
    console.log(_id);
  };
  return (
    <div className="md:p-4  p-5">
      <div className="card card-side bg-[#bb9f8c] shadow-xl  ">
        <div className="md:p-4">
          <figure>
            <img className="" src={photourl} alt="Movie" />
          </figure>
        </div>
        <div className="card-body text-black  ">
          <h2 className="card-title text-xl mb-2 underline">{name}</h2>

          <div className="flex">
            <div className="font-semibold md:w-full space-y-1 md:text-lg font-mono ">
              <p>Taste:{taste}</p>
              <p>Details:{details}</p>
              <p>Supplier:{supplier}</p>
              <p>Category:{category}</p>
              <p>Details:{details}</p>
            </div>
            <div className="card-actions justify-end md:w-full p-4 ">
              <div className="flex flex-col gap-2 items-en md:p-2">
                <button className="btn btn-active">
                  <FaEye />
                </button>
                {/* Edite */}
            <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-">
                  <PiGearBold />
                </button>
            </Link>
                {/* delete */}
                <button className="btn" onClick={() => handleDelete(_id)}>
                  <ImBin />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
