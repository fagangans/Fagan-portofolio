"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-6 text-center">
      <span className="font-serif text-5xl font-bold tracking-widest text-gold-gradient">
        FFA
      </span>
      <p className="max-w-md text-silver">
        Something went wrong while loading this experience.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-gold-gradient px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
}
