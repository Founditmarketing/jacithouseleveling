import LocationTemplate from '../../components/LocationTemplate';
import { getLocation } from '../../data/locations';

const location = getLocation('palestine-tx')!;

export default function PalestineLocation({ isLoading }: { isLoading?: boolean }) {
  return <LocationTemplate location={location} isLoading={isLoading} />;
}
