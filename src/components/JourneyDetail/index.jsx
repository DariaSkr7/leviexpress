import { BusStop } from '../BusStop';
import { SeatPicker } from '../SeatPicker';
import { SelectedSeat } from '../SelectedSeat';
import './style.css';

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
  console.log(journey.stops);
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">{renderBusStops(journey.stops)}</div>
      <SeatPicker seats={journey.seats} selectedSeat={journey.autoSeat} />
    </div>
  );
};
