import React from 'react';

//svg
import { ReactComponent as RightArrow } from '../assets/RightArrow.svg';

export default function UserInfo() {
  return (
    <div className=" min-h-[50vh] text-left px-10 pt-20 md:border-b-1 border-black md:rounded-bl-3xl ">
      <div>
        <h1 className="drop-shadow-lg">Hi Jhon,</h1>
      </div>
      <div className="py-10">
        <h1 className="py-2">
          <strong>Complete your KYC</strong>
        </h1>
        <h1>
          and experience the world <br></br> class bitcoin app defi
        </h1>
      </div>
      <div>
        <h6 className="flex items-center text-sm cursor-pointer">
          <strong> START KYC</strong>
          <span className="ml-2">
            <RightArrow />
          </span>
        </h6>
      </div>
    </div>
  );
}
