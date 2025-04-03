'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="">
      ErrorBoundary
      <p>{error.message}</p>
    </div>
  );
}
