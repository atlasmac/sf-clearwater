import React, { useState } from "react";
import { BiMap } from "react-icons/bi";

interface props {
  level: {
    date: string;
    cfs: number;
    ft: number;
  };
  spot: string;
}

const CurrentReport = ({ level, spot }: props) => {
  const currentLevel = level?.cfs;
  const currentFeet = level?.ft;
  const time = level?.date;
  return (
    <div className="hero mt-8 min-h-fit bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* <Image
          src={}
          unoptimized={true}
          alt="surfing gif"
          width={1000}
          height={1000}
          className="max-w-xs rounded-lg shadow-2xl md:max-w-sm"
        /> */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className=" font-robotoSlab py-3 text-center text-5xl font-bold sm:text-left">
            Steel Report
          </h1>
          <h2 className=" font-robotoSlab py-3 text-center text-5xl font-bold sm:text-left">
            {spot}
          </h2>

          <p className="max-w-80 py-3 text-3xl">
            <a
              href={"/"}
              target={"_blank"}
              rel="noreferrer"
              className="flex items-center gap-x-2 hover:text-slate-200"
            >
              <BiMap /> Gage Location
            </a>
          </p>
          <p className="max-w-80 font-robotoSlab pt-5 pb-3 text-4xl">
            The Report for {time}
          </p>
          <p className="max-w-80 py-3 text-2xl">
            Flows are currently at{" "}
            <span className="font-bold">
              {" "}
              {currentLevel} cubic feet per second (cfs)
            </span>{" "}
            and <span className="font-bold">{currentFeet} feet high</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentReport;
