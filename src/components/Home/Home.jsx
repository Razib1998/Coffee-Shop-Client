import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";

import { BsCup } from "react-icons/bs";
import Banner from "../Header/Banner/Banner";


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Icon></Icon>
        <div className="bg-[url('https://i.ibb.co/23VQ47r/1.png')]">
          <div className="text-center mt-6">
            <p>--Slip & Savor--</p>
            <h2 className="text-2xl font-bold">Our Popular Products</h2>
            <NavLink to={"/addCoffee"}>
              <button className="btn btn-secondary text-xl">
                Add Coffee{" "}
                <span className="text-xl">
                  <BsCup></BsCup>
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Home;