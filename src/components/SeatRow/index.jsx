import { Seat } from '../Seat';

const renderSeats = (row) => {
  return row.map((seat) => {
    return (
      <Seat
        number={seat.number}
        isOccupied={seat.isOccupied}
        key={seat.number}
      />
    );
  });
};

export const SeatRow = ({ row }) => {
  return <div className="seat-row">{renderSeats(row)}</div>;
};
