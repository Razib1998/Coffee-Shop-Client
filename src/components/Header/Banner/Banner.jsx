const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/fS2vfCV/3.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content ml-72 text-right text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
