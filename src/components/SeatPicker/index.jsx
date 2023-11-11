import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

const renderRows = (rows, selectedSeat) => {
  return rows.map((row, index) => {
    return <SeatRow row={row} key={index} rowSelectedSeat={selectedSeat} />;
  });
};

export const SeatPicker = ({ seats, selectedSeat }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">{renderRows(seats, selectedSeat)}</div>
    </div>
  );
};
