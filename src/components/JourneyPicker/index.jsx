import React, { useEffect, useState } from 'react';
import './style.css';

const CityOptions = ({ cities }) => {
  return cities.map((city) => {
    return (
      <option value={city.name} key={city.code}>
        {city.name}
      </option>
    );
  });
};

const DatesOptions = ({ dates }) => {
  return dates.map((date) => {
    return (
      <option value={date.dateBasic} key={date.dateBasic}>
        {date.dateCs}
      </option>
    );
  });
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([
    {
      dateBasic: '28.05.2021',
      dateCs: 'pá 28. květen 2021',
    },
    {
      dateBasic: '29.05.2021',
      dateCs: 'so 29. květen 2021',
    },
  ]);
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await response.json();
      console.log(data);
      setCities(data.results);
    };
    const fetchDates = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const data = await response.json();
      console.log(data);
      setDates(data.results);
    };
    fetchCities();
    fetchDates();
  }, []);

  const onSelectFromCity = (event) => {
    setFromCity(event.target.value);
  };

  const onSelectToCity = (event) => {
    setToCity(event.target.value);
  };

  const onSelectDate = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log(fromCity, toCity, date);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={onSelectFromCity}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={onSelectToCity}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={onSelectDate}>
              <option value="">Vyberte</option>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
