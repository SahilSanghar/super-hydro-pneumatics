import React from "react";
import { values } from "@/data/value";

const Values = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <div
          key={value.id}
          className="h-[85vh] p-6 flex flex-col justify-between"
          style={{ backgroundColor: value.bgColor }}
        >
            <div className="">
          <div className="text-5xl font-bold text-white max-w-xs mx-auto">{value.number}</div>
          <div className="mt-4 text-5xl font-semibold text-white max-w-xs mx-auto">{value.title}</div>
          <div className="mt-4 text-white max-w-xs mx-auto">{value.description}</div>
            </div>
            <div className="">
            <div className="mt-6 text-white max-w-20 mx-auto text-7xl">{value.icon}</div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
