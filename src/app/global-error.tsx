'use client';

interface IGlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: React.FC<IGlobalErrorProps> = (props) => {
  const { error, reset } = props;
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
