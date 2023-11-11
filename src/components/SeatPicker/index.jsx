import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

const renderRows = (rows, selectedSeat, onSeatSelected) => {
  return rows.map((row, index) => {
    return (
      <SeatRow
        row={row}
        key={index}
        rowSelectedSeat={selectedSeat}
        onSeatSelected={onSeatSelected}
      />
    );
  });
};

export const SeatPicker = ({ seats, selectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {renderRows(seats, selectedSeat, onSeatSelected)}
      </div>
    </div>
  );
};
