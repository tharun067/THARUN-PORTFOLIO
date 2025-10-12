import React from "react";

// Use static images instead of many Canvas instances to avoid WebGL context limits
// Keep BallCanvas available for future use if you want a featured item.
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-16 h-16 object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
