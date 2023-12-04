import icon1 from "../../../public/images/icons/1.png";
import icon2 from "../../../public/images/icons/2.png";
import icon3 from "../../../public/images/icons/3.png";
import icon4 from "../../../public/images/icons/4.png";

const Icon = () => {
  return (
    <div>
      <div className="bg-[#ECEAE3] p-4 flex justify-around items-center">
        <div>
          <img src={icon1} alt="" />
          <h4 className="text-xl font-extrabold">Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h4 className="text-xl font-extrabold">High Quality</h4>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h4 className=" text-xl font-extrabold">Pure Grades</h4>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <h4 className="text-xl font-extrabold">Proper Roasting</h4>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Icon;
