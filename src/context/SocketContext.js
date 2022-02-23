import { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';
import commonConfig from '../utils/commonConfig';

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socektStatus, setSocektStatus] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    let socketURL = commonConfig.socketURL;
    let socket = io(socketURL, { path: '/skt', timeout: 2000, transports: ['websocket'] });
    console.log('mhere to make new connection', socket);
    if (!socket) {
      console.log('CONNECTION ALREADY ESTABLISHED');
    } else {
      socket.on('connect', function () {
        console.log('CONNECTION ESTABLISHED');
        setSocektStatus(true);
        socket.emit('allCoins', '{"action":"subscribe"}');
        socket.on('allCoins', (coins) => {
          setData(JSON.parse(coins).data);
        });
      });
      socket.on('disconnect', function () {
        console.log('CONNECTION LOST');
      });
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socektStatus, setSocektStatus, data, setData }}>
      {children}
    </SocketContext.Provider>
  );
};
