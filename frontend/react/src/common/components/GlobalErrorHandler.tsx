import { Button } from 'antd';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useEvent } from 'react-use';

type Props = {
  children: ReactNode;
};

export function GlobalErrorHandler({ children }: Props) {
  // eslint-disable-next-line
  const [currentError, setCurrentError] = useState<string | null>(null);
  const clearError = useRef(() => setCurrentError(null)).current;
  const navigate = useNavigate();

  const processError = useCallback((error: unknown, info?: unknown) => {
    // eslint-disable-next-line no-console
    console.error(`Error caught in TCError handler`, error);

    if (info) {
      // eslint-disable-next-line no-console
      console.error(`Error info:`, info);
    }
    setCurrentError(`${error}`);
  }, []);

  const handleRejection = useCallback(
    (event: PromiseRejectionEvent) => {
      event.preventDefault();
      processError(event.reason);
    },
    [processError],
  );

  const tryAgain = () => {
    clearError();
    navigate(0);
  };

  useEvent('unhandledrejection', handleRejection);

  return (
    <ErrorBoundary
      onError={processError}
      FallbackComponent={() => (
        <main className="p-6 text-center">
          <h5>Please contact support if this problem occurs repeatedly.</h5>
          <Button className="mt-4" color="primary" onClick={tryAgain}>
            Try again
          </Button>
        </main>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
