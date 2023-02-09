import React from "react";
import type { Observation } from "./LineChart";

interface Props {
  forecastData: Observation;
}

const ForecastTable = ({ forecastData }: Props) => {
  const headers: React.ReactNode[] = [];
  const flows: React.ReactNode[] = [];
  const height: React.ReactNode[] = [];

  const fe = forecastData.forEach((data) => {
    headers.push(<td key={data.date}>{data.date.split(" ")[0]}</td>);
    flows.push(<td key={data.date}>{data.cfs}</td>);
    height.push(<td key={data.date}>{data.ft}</td>);
  });

  return (
    <div>
      <div className="flex justify-center">
        <h2 className="font-robotoSlab text-3xl font-bold">
          Daily Forecast Levels
        </h2>
      </div>
      <div className="scrollbar-corner-full scrollbar-thin scrollbar-track-base-200 scrollbar-thumb-slate-400 scrollbar-thumb-rounded-md mt-3 overflow-scroll overflow-x-auto pb-1">
        <table className="mb-1 table w-full">
          <thead>
            <tr>
              <th></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Cubic Feet / Second </th>
              {flows}
            </tr>
            <tr>
              <th>Height (Feet)</th>
              {height}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastTable;
