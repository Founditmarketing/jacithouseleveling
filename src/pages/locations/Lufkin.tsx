import LocationTemplate from '../../components/LocationTemplate';
import { getLocation } from '../../data/locations';

const location = getLocation('lufkin-tx')!;

export default function LufkinLocation({ isLoading }: { isLoading?: boolean }) {
  return <LocationTemplate location={location} isLoading={isLoading} />;
}
