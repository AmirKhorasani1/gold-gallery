export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <span className="h-14 w-14 animate-spin rounded-full border-4 border-white/30 border-t-white" />

        {/* Text */}
        <p className="text-sm font-medium tracking-wide text-white/80">
          Loading...
        </p>
      </div>
    </div>
  );
}
