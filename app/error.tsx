
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="main">
      <h1>Something went wrong! 😕</h1>
      <p>We couldn't load this page.</p>
      <button onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
