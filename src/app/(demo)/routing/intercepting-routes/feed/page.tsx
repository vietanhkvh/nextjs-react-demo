'use client';

import Link from 'next/link';
import photos from '@constants/photo-example';
import { ROUTE_DEMO_INTERCEPTING_ROUTES_FEED_PHOTOS } from '@routes/pathes';
import styles from './feed.module.scss';
import ImageFrame from '@component/image-frame/image-frame';

const FeedPage = () => {
  return (
    <div className={styles.container}>
      {photos.map((item) => (
        <Link
          key={`feed-item-${item.id}`}
          className={styles.item}
          href={`${ROUTE_DEMO_INTERCEPTING_ROUTES_FEED_PHOTOS}/${item.id}`}
        >
          <ImageFrame photo={item} />
        </Link>
      ))}
    </div>
  );
};

export default FeedPage;
