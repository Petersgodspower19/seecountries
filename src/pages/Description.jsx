import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data';

function Description({ darkMode }) {
  const { country } = useParams();
  const countryData = data.find((item) => item.name.toLowerCase() === country.toLowerCase());

  if (!countryData) {
    return <div>Country not found</div>;
  }
  
  const navigate = useNavigate();

  function goBack() {
    navigate(-1); 
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      <div className="bg-secondaryWhite dark:bg-DarkBlue px-[15px] py-[20px] h-full">
        <button 
          onClick={goBack}
          className="bg-White text-VeryDarkBlue dark:bg-LightBlue dark:text-White w-[120px] btn"
        >
          &#8592; Go Back
        </button>

        <div className="mt-[35px] px-[30px] flex flex-col md:flex-row gap-8 items-center justify-center h-full">
          <img src={countryData.flag} alt="" className="w-[300px] md:w-[500px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[25px] text-VeryDarkBlue dark:text-White">{country}</h1>
            <ul>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Native Name: <span className="font-normal">{countryData.nativeName}</span>
              </li>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Population: <span className="font-normal">{countryData.population}</span>
              </li>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Sub Regions: <span className="font-normal">{countryData.subregion}</span>
              </li>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Capital: <span className="font-normal">{countryData.capital}</span>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Top Level Domain: <span className="font-normal">{countryData.topLevelDomain.join(', ')}</span>
              </li>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Currencies:{' '}
                <span className="font-normal">
                  {countryData.currencies.map((currency, index) => (
                    <span key={index}>
                      {currency.name} ({currency.symbol})
                      {index < countryData.currencies.length - 1 && ', '}
                    </span>
                  ))}
                </span>
              </li>
              <li className="font-bold text-[18px] text-VeryDarkBlue dark:text-White">
                Languages:{' '}
                <span className="font-normal">
                  {countryData.languages.map((lang, index) => (
                    <span key={index}>
                      {lang.name}
                      {index < countryData.languages.length - 1 && ', '}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
