import LoadingInDemo from '@app/(demo)/routing/loading';
import Post from '@component/post';
import { Suspense } from 'react';

const Posts = () => {
  return (
    <div>
      <Suspense fallback={<LoadingInDemo />}>
        <Post />
      </Suspense>
    </div>
  );
};

export default Posts;
