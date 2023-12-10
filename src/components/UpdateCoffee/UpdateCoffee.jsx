/* eslint-disable no-undef */
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const  { _id, name, supplier, category, chef, details, taste, photo } =
  coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const details = form.details.value;
    const taste = form.taste.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      details,
      taste,
      photo,
    };

    //   Send data to server

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="w-[1100px] mx-auto mt-12">
      <div className="mt-12  mb-6">
        <Link to={"/"}>
          <button className="flex items-center gap-2">
            <span>
              <FaArrowLeft></FaArrowLeft>
            </span>
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
      <div className=" p-8 mt-18  min-h-fit bg-[#F4F3F0] border">
        <div className="text-center mb-6">
          <h1 className="text-2xl mb-4 font-extrabold">
            Update Coffee: {name}
          </h1>
          <p className="text-xl">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="flex gap-6 justify-around ">
            <div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="name"
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Supplier</span>
                  </div>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Enter Coffee Supplier"
                    defaultValue={supplier}
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter Category Name"
                    defaultValue={category}
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Chef</span>
                  </div>
                  <input
                    type="text"
                    name="chef"
                    placeholder="Enter Coffee Chef"
                    defaultValue={chef}
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Taste</span>
                  </div>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Enter Coffee taste"
                    defaultValue={taste}
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Details</span>
                  </div>
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter Details"
                    defaultValue={details}
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="form-control ">
              <div className="label">
                <span className="label-text ml-12">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                defaultValue={photo}
                className="input ml-12 input-bordered w-11/12"
              />
            </label>
          </div>
          <input
            className="w-11/12 mt-8 ml-12 btn btn-success"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
