import { Seat } from '../Seat';

const renderSeats = (row, rowSelectedSeat, onSeatSelected) => {
  return row.map((seat) => {
    return (
      <Seat
        number={seat.number}
        isOccupied={seat.isOccupied}
        isSelected={seat.number === rowSelectedSeat}
        key={seat.number}
        onSelect={onSeatSelected}
      />
    );
  });
};

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {renderSeats(row, rowSelectedSeat, onSeatSelected)}
    </div>
  );
};
