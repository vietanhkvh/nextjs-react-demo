import { ROUTE_DEMO_INTERCEPTING_ROUTES_FEED } from '@routes/pathes';
import Link from 'next/link';

const Feed = () => {
  return (
    <div className='feed-page'>
      Intercepting route:
      <Link href={ROUTE_DEMO_INTERCEPTING_ROUTES_FEED}>Feed demo</Link>
    </div>
  );
};

export default Feed;
