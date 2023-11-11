import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

const renderRows = (rows) => {
  return rows.map((row, index) => {
    return <SeatRow row={row} key={index} />;
  });
};

export const SeatPicker = ({ seats }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">{renderRows(seats)}</div>
    </div>
  );
};
