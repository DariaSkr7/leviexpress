import { useState } from 'react';
import { BusStop } from '../BusStop';
import { SeatPicker } from '../SeatPicker';
import { SelectedSeat } from '../SelectedSeat';
import './style.css';
import { useNavigate } from 'react-router-dom';

const renderBusStops = (stops) => {
  return stops.map((stop) => {
    return (
      <BusStop
        name={stop.name}
        station={stop.station}
        time={stop.time}
        key={stop.code}
      />
    );
  });
};

export const JourneyDetail = ({ journey }) => {
  const navigate = useNavigate();
  const [userSeat, setUserSeat] = useState(journey.autoSeat);
  console.log(journey.stops);
  const handleJourneyChange = (newUserSeat) => {
    setUserSeat(newUserSeat);
  };

  const handleBuy = async () => {
    console.log('jhfghjk');
    const response = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      },
    );
    const data = await response.json();
    const reservationId = data.results.reservationId;
    navigate(`/reservation/${reservationId}`);
  };

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">{renderBusStops(journey.stops)}</div>
      <SeatPicker
        seats={journey.seats}
        selectedSeat={userSeat}
        onSeatSelected={handleJourneyChange}
      />
      <div className="controls container">
        <button onClick={handleBuy} className="btn btn--big" type="button">
          Rezervovat
        </button>
      </div>
    </div>
  );
};
