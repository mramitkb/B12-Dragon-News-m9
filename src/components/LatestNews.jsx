import React from "react";
import titleLogo from "../assets/logo.png";
import { format } from "date-fns";

const LatestNews = () => {
  return (
    <div>
      <div className="text-center space-y-2 text-accent">
        <img className="h-10 w-fit mx-auto" src={titleLogo} alt="" />
        <p>Journalism without Fear or Favour</p>
        <p className="font-semibold">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
      </div>
      {/* Latest News */}
      <div className="flex items-center gap-3 bg-base-200 p-3 rounded-sm mt-5">
        <p className="bg-secondary w-fit px-4 py-2 rounded-sm text-white">
          Latest
        </p>
        <p className="font-semibold">Match Highlights: Germany vs Spain - as it happened! Argentina vs France - as it happened! Brazil
        vs England -- as it happened!</p>
        {/* <Marquee>
        </Marquee> */}
      </div>
    </div>
  );
};

export default LatestNews;
