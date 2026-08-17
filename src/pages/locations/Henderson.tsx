import LocationTemplate from '../../components/LocationTemplate';
import { getLocation } from '../../data/locations';

const location = getLocation('henderson-tx')!;

export default function HendersonLocation({ isLoading }: { isLoading?: boolean }) {
  return <LocationTemplate location={location} isLoading={isLoading} />;
}
