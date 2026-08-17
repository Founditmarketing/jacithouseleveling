import LocationTemplate from '../../components/LocationTemplate';
import { getLocation } from '../../data/locations';

const location = getLocation('nacogdoches-tx')!;

export default function NacogdochesLocation({ isLoading }: { isLoading?: boolean }) {
  return <LocationTemplate location={location} isLoading={isLoading} />;
}
