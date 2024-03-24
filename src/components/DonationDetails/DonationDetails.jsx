import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { setDonateToDB } from "../../utils/localDB";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);

  const donation = donations.find((donation) => donation.id === intId);
  const { image, description, price } = donation;

  const handleDonate = () => {
    setDonateToDB(id);
  };
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />

      <div className="relative">
        <img className="w-full" src={image} alt="" />
        <div className="absolute py-5 w-full bottom-0 bg-[#0B0B0B80]">
          <button
            onClick={handleDonate}
            className="btn bg-[#FF444A] border-0 text-white ms-5"
          >
            {" "}
            Donate ${price}
          </button>
        </div>
      </div>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default DonationDetails;
