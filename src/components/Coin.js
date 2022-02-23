import React from 'react';
import { ReactComponent as BTC } from '../assets/BTC.svg';

export default function Coin({ Svg, coinname, based, pricePercentChange, price, volume }) {
  return (
    <div className="last:border-b-0 border-b-1 border-defy-grey w-[100%] md:w-[70%] flex items-center py-4 pr-4">
      <BTC className="mr-4" />
      <h1 className="flex flex-col text-left w-[15%]">
        {coinname}
        <span className="text-defy-light text-sm">{based}</span>
      </h1>
      <h1 className="flex flex-col text-left ml-6">
        Price:
        <span className={`${pricePercentChange > 0 ? 'text-green-500' : 'text-red-500'} `}>
            ₹ {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </h1>
    </div>
  );
}
