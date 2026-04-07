import React from "react";
import titleLogo from "../assets/logo.png";
import { format } from "date-fns";
import Marquee from 'react-fast-marquee';

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
        
        {/* Wrapper added here to constrain the Marquee width */}
        <div className="flex-1 overflow-hidden min-w-0">
            <Marquee.default pauseOnHover={true}>
                <p className="font-semibold">
                  Match Highlights: <span className="text-red-700">Germany</span> vs <span className="text-yellow-500">Spain</span> - as it happened! || <span className="text-[#4DC0F3]">Argentina</span> vs <span className="text-[#1026a5]">France</span> - as it happened! || <span className="text-green-600">Brazil</span> vs <span className="text-red-400">England</span> -- as it happened!
                </p>
            </Marquee.default>
        </div>
        
      </div>
    </div>
  );
};

export default LatestNews;