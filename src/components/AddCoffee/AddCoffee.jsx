import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const AddCoffee = () => {

    const handleAddCoffee = (event)=>{
      event.preventDefault()
      
    }
  return (
    <div className="w-[1100px] mx-auto">
      <div className="mt-12  mb-6">
        <NavLink to={"/"}>
          <button className="flex items-center gap-2">
            <span>
              <FaArrowLeft></FaArrowLeft>
            </span>
            <span>Back to Home</span>
          </button>

        </NavLink>
      </div>
      <div className=" p-8 mt-18  min-h-fit bg-[#F4F3F0] border">
        <div className="text-center mb-6">
          <h1 className="text-2xl mb-4 font-extrabold">Add New Coffee</h1>
          <p className="text-xl">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="flex gap-6 justify-around ">
            <div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
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
                    placeholder="Enter Coffee Supplier"
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
                    placeholder="Enter Category Name"
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
                    placeholder="Enter Coffee Chef"
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
                    placeholder="Enter Coffee taste"
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
                    placeholder="Enter Details"
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
                placeholder="Photo Url"
                className="input ml-12 input-bordered w-11/12"
              />
            </label>
          </div>
          <input
            className="w-11/12 mt-8 ml-12 btn btn-success"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
