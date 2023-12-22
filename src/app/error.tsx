'use client'; // Error components must be Client Components
import { useEffect } from 'react';

interface IRootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const RootError: React.FC<IRootErrorProps> = (props) => {
  const { error, reset } = props;
  useEffect(() => {
    //log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        // // Attempt to recover by trying to re-render the segment
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default RootError;
