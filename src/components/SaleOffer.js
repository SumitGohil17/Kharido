import React, { useState, useEffect } from 'react';
import { Button } from './ui/Buttons';
import { Badge } from './ui/Badge';

function SaleOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 15,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((current) => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 };
        } else if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 };
        } else if (current.hours > 0) {
          return { ...current, hours: current.hours - 1, minutes: 59, seconds: 59 };
        } else if (current.days > 0) {
          return { ...current, days: current.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return current;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full h-[80vh] overflow-hidden ">
      <img
        src="https://img.freepik.com/premium-photo/portrait-wom%E2%80%A6ding-against-blue-background_1048944-24117491.jpg"
        alt="Featured clothing item on sale"
        className="w-full h-full object-fill object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-3005" />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-6 lg:p-6">
        <Badge className="mb-4 text-lg md:text-xl bg-red-500 text-white px-3 py-1">
          SUMMER SALE
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Elegant Summer Dress
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl">
          Embrace the season with our stunning collection. Limited time offer!
        </p>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            $49.99
          </span>
          <span className="text-xl md:text-2xl text-gray-300 line-through">
            $89.99
          </span>
          <Badge className="text-lg md:text-xl bg-green-500 text-white px-3 py-1">
            Save 44%
          </Badge>
        </div>
        <Button className="text-lg md:text-xl bg-[#c8a165] rounded-lg text-black hover:bg-[#f2c98b] px-8 py-3 ">
          Shop Now
        </Button>
      </div>
      <div className="text-white p-8 absolute bottom-0 left-[30%]">
        <h2 className="text-3xl mb-8">Sale ends soon</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="bg-gray-300 opacity-55 p-4 rounded-lg">
                <div className="text-2xl text-black font-bold">{value}</div>
              </div>
              <div className="mt-2 text-sm capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default SaleOffer;