'use client';

import './globals.css';
import { useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({ message = 'An error occurred' }: { message?: string }) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <div className="">
      <button onClick={() => setError(true)}>Simulate Error</button>
    </div>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <ErrorSimulator message="Simulated Error in root layout" />
      {children}
    </div>
  );
};
