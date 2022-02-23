import React, { useEffect, useState, useContext } from 'react';

//componenets
import UserInfo from '../components/UserInfo';
import IdeaCoins from '../components/IdeaCoins';
import TrendingCoins from '../components/TrendingCoins';
import NonTrendingCoins from '../components/NonTrendingCoins';

//  SocketContext';
import { SocketContext } from '../context/SocketContext';

export default function Home() {
  const [object1, setObject1] = useState(null);
  const context = useContext(SocketContext);

  useEffect(() => {
    setObject1(context.data);
    if (object1) {
      console.log(object1);
    }
  }, [context.data, object1]);

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 grad-bg  text-white ">
        <UserInfo />
        <IdeaCoins object={object1} />
        <TrendingCoins object={object1} />
        <NonTrendingCoins object={object1} />
      </div>
    </div>
  );
}
