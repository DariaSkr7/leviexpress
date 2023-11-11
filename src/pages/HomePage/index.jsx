import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJournay] = useState(null);
  const handleJourneyChange = (journey) => {
    setJournay(journey);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <div>Nalezeno spojení s id {journey.journeyId}</div> : <></>}
    </main>
  );
};
