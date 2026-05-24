"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="mb-4 text-5xl text-red-500">⚠️</div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-2 text-sm text-white/70">
          An unexpected error occurred. Please try again.
        </p>

        {/* Dev Error */}
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-4 max-h-40 overflow-auto rounded-lg bg-white/5 p-3 text-left text-xs text-red-400">
            {error.message}
          </pre>
        )}

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-red-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-lg border border-white/30 px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
