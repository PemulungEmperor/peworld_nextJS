import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#5E50A1" }}>
      <div className="container mt-5 p-5 ">
        <div className="row ">
          <div className="col-md-6">
            <Image alt="" src="/asset/logo/logo1.png" width={110} height={30} />
            <p className="mt-3 text-white">
              Peworld represents a cost-effective and efficient solution, saving valuable time and resources for businesses and offering talented individuals unparalleled opportunities for career growth and success.
            </p>
          </div>
        </div>
        <div className="row w-100  mt-5">
          <hr style={{ border: "1.5px solid white" }} />
        </div>
        <div className="row w-100 mt-3">
          <div className="col-md-auto me-auto text-white">2020 Pewworld. All right reserved</div>
          <div data-testid="phone" className="col-md-auto text-white">
            Telephone
          </div>
          <div data-testid="email" className="col-md-auto text-white">
            Email
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
