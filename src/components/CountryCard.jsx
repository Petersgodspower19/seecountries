import React from 'react';
import { useNavigate } from 'react-router-dom';

function CountryCard({ darkMode, src, name, population, capital }) {
    const navigate = useNavigate();
    function handleClick(country) {
        navigate(`/countries/${country}`);
    }
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="w-[250px] h-[300px] bg-White cursor-pointer dark:bg-LightBlue 
       flex flex-col gap-3 shadow-lg rounded overflow-hidden transition-transform 
       transform hover:scale-105 hover:shadow-2xl" onClick={() => {handleClick(name)}}>
        <img
          src={src}
          alt={name}
          className="w-full h-[150px] object-cover"
        />
        <div className="bg-White dark:bg-LightBlue p-4 flex-1">
          <h1 className="text-VeryDarkBlue dark:text-White font-bold mb-2">{name}</h1>
          <h3 className="text-VeryDarkBlue dark:text-White text-sm mb-1">
            Population: <span className="text-DarkGray dark:text-VeryLightGray">{population}</span>
          </h3>
          <h3 className="text-VeryDarkBlue dark:text-White text-sm">
            Capital: <span className="text-DarkGray dark:text-VeryLightGray">{capital}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
