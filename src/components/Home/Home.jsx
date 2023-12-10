import { Link, useLoaderData } from "react-router-dom";
import Icon from "../Icon/Icon";

import { BsCup } from "react-icons/bs";
import Banner from "../Header/Banner/Banner";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Banner></Banner>
      <Icon></Icon>
      <div className=" w-[1100px] mx-auto bg-[url('https://i.ibb.co/23VQ47r/1.png')]">
        <div className="text-center mt-6">
          <p>--Slip & Savor--</p>
          <h2 className="text-2xl font-bold">Our Popular Products</h2>
          <Link to={"/addCoffee"}>
            <button className="btn btn-secondary text-xl">
              Add Coffee{" "}
              <span className="text-xl">
                <BsCup></BsCup>
              </span>
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
