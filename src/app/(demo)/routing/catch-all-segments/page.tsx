import { ROUTE_DEMO_ROUTING_CATCH_ALL_SEGMENTS } from '@routes/pathes';
import Link from 'next/link';

interface ICatchAllSegmentsHomeProps {}

const CatchAllSegmentsHome: React.FC<ICatchAllSegmentsHomeProps> = ({}) => {
  const dynamicSlugTxt = 'dynamicSlugTxt';
  return (
    <div>
      <Link href={`${ROUTE_DEMO_ROUTING_CATCH_ALL_SEGMENTS}/${dynamicSlugTxt}`}>
        Catch All Segments
      </Link>
    </div>
  );
};

export default CatchAllSegmentsHome;
