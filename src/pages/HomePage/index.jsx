import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [journey, setJournay] = useState(null);
  const handleJourneyChange = (journey) => {
    setJournay(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <JourneyDetail journey={journey} /> : <></>}
    </main>
  );
};
