import logo from "../../../public/images/more/logo1.png";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-[url('https://i.ibb.co/ZSP7XV0/15.jpg')]">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img className="w-[75px] h-[90px]" src={logo} alt="" />
            <h2 className="text-white text-4xl">Espresso Emporium</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
