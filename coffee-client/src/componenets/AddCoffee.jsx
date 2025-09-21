import React from "react";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddCoffee() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const newCoffee = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photourl,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added!",
            text: "Do you want to continue",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="">
      <div className="text-3xl text-center font-bold text-red-600 m-8">
        <h1>AddCoffee</h1>
      </div>
    <Link to='/'> 
     <div className="ml-8 underline text-xl text-green-500">
      <h1>Home</h1>
     </div>
    </Link>
      <form onSubmit={handleSubmit} className="p-8">
        {/* name and price */}
        <div className="flex gap-2">
          <div className="form-control md:w-1/2">
            <label className="label ">
              <span className="label-text">Name </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label ">
              <span className="label-text">Price </span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Enter price"
                className="input input-bordered w-full"
                name="price"
              />
            </label>
          </div>
        </div>

        {/* supplier and taste */}
        <div className="flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label ">
              <span className="label-text">supplier </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter supplier"
                className="input input-bordered w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label ">
              <span className="label-text">Taste </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter price"
                className="input input-bordered w-full"
                name="taste"
              />
            </label>
          </div>
        </div>

        {/* Category and details */}
        <div className="flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label ">
              <span className="label-text">Category </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Category"
                className="input input-bordered w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label ">
              <span className="label-text">Details </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Details"
                className="input input-bordered w-full"
                name="details"
              />
            </label>
          </div>
        </div>

        {/* PhotoUrL*/}
        <div className=" gap-4 ">
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Photo </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter PhotoUrL"
                className="input input-bordered w-full"
                name="photourl"
              />
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-block btn-success mt-4">
          Add Coffee
        </button>
      </form>
    </div>
  );
}
