import React, { useState } from 'react';
import data from '../data';
import CountryCard from '../components/CountryCard';

function Home({ darkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  
  const filteredCountries = data.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-VeryLightGray dark:bg-DarkBlue px-[15px] py-[20px] text-VeryDarkBlue dark:text-White">
        <div className="flex items-center flex-col md:flex-row gap-3 justify-between mb-10">
          <input
            className="text w-[250px] p-[5px] input bg-White text-DarkGray dark:dark-input dark:bg-LightBlue dark:text-White"
            type="text"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <select
            name="region"
            id=""
            className="bg-White dark:bg-LightBlue text-VeryDarkBlue dark:text-White w-[250px] p-[5px] px-[7px]"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)} 
          >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className="flex items-center justify-center gap-5 flex-wrap">
          {filteredCountries.map((country) => (
            <CountryCard
              darkMode={darkMode}
              src={country.flag}
              name={country.name}
              population={country.population}
              capital={country.capital}
              key={country.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
