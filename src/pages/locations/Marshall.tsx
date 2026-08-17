import LocationTemplate from '../../components/LocationTemplate';
import { getLocation } from '../../data/locations';

const location = getLocation('marshall-tx')!;

export default function MarshallLocation({ isLoading }: { isLoading?: boolean }) {
  return <LocationTemplate location={location} isLoading={isLoading} />;
}
