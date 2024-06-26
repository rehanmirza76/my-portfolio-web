import React from "react";

const Footer = () => {
  return (
    <div className="footer space-y-7 md:mt-0 mt-[35%] w-[100%] md:space-y-0 text-sm bg-gray-300 flex flex-col md:flex-row md:justify-between md:px-20 md:py-16 p-5 ">
      {/* LEFT */}
      <div className="left space-y-1" data-aos="zoom-in-right">
        <div className="line1 flex items-center text-black space-x-2 md:space-y-0 space-y-2">
          <i className='bx bxs-home md:text-3xl text-xl'></i>
          <p className="text-base">Karachi, Pakistan</p>
        </div>
        <div className="line2 flex items-center text-black space-x-2 md:space-y-0 space-y-2">
          <i className='bx bxs-phone md:text-3xl text-xl'></i>
          <p className="text-base">+92 317 2343 773</p>
        </div>
        <div className="line3 flex items-center text-black space-x-2 md:space-y-0 space-y-2">
          <i className='bx bx-mail-send md:text-3xl text-xl'></i>
          <p className="text-base">abdulrehan0317@gmail.com</p>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="right md:w-[40vw] space-y-3 text-black " data-aos="zoom-in-left">
        <h1 className="md:text-xl  font-bold">About The Company</h1>
        <p className="md:text-base">A Dedicated  and profecient developer with a strong commitment to quality and effeciency.</p>
        <div className="social space-x-2">
                <a
                  href="https://www.linkedin.com/in/abdul-rehan/"
                  target="_blank"
                >
                  <i className="bx transitions text-xl  bxl-linkedin text-black hover:bg-black hover:text-white cursor-pointer border-[1px] border-black p-2 rounded-full"></i>
                </a>
                <a
                  href="https://www.instagram.com/mirza_rehan76/"
                  target="_blank"
                >
                  <i className="bx transitions text-xl bxl-instagram text-black hover:bg-black hover:text-white cursor-pointer border-[1px] border-black p-2 rounded-full"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100055767942968"
                  target="_blank"
                >
                  <i className="bx transitions text-xl bxl-facebook text-black hover:bg-black hover:text-white cursor-pointer border-[1px] border-black p-2 rounded-full"></i>
                </a>
              </div>
      </div>
    </div>
  );
};

export default Footer;
