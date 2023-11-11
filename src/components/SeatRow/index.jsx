import { Seat } from '../Seat';

const renderSeats = (row, rowSelectedSeat) => {
  return row.map((seat) => {
    return (
      <Seat
        number={seat.number}
        isOccupied={seat.isOccupied}
        isSelected={seat.number === rowSelectedSeat}
        key={seat.number}
      />
    );
  });
};

export const SeatRow = ({ row, rowSelectedSeat }) => {
  return <div className="seat-row">{renderSeats(row, rowSelectedSeat)}</div>;
};
