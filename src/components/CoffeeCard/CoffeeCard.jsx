/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, supplier, category, chef, details, taste, photo } = coffee;

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
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCounted > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex gap-36 items-center ">
          <div>
            <h2 className="card-title mb-2">
              Name: <span className="font-light">{name}</span>
            </h2>
            <h2 className="card-title mb-2">
              Chef: <span className="font-light">{chef}</span>
            </h2>
            <h2 className="card-title mb-2">
              Taste: <span className="font-light">{taste}</span>
            </h2>
          </div>
          <div>
            <div>
              <button className="text-xl rounded-md mb-2 p-2 bg-[#D2B48C]">
                <IoMdEye></IoMdEye>
              </button>
            </div>
            <div>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="text-xl rounded-md mb-2 p-2 bg-gray-400 ">
                  <IoPencil></IoPencil>
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="text-xl rounded-md p-2 bg-[#EA4744]"
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
