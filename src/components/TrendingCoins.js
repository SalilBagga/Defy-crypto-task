import React from 'react';

//componenets
import Coin from './Coin';
export default function TrendingCoins({ object }) {
  return (
    <div className="min-h-[50vh]">
      {' '}
      <div className="pb-4 text-left  md:pt-2">
        <h1 className="pl-6">Trending Coins</h1>
      </div>
      <div>
        <div className="px-10 ">
          {object &&
            object.map((data, index) => (
              <Coin
                key={index}
                Svg={data.coin}
                coinname={data.coin}
                based={data.coin}
                price={data.price}
                volume={data.volume}
                pricePercentChange={data.pricePercentChange}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
