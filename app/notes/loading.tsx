export default function LoadingNotes() {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="skeleton mb-3 h-10 w-48" />
        <div className="skeleton mb-8 h-5 w-72 max-w-full" />
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-100 shadow-sm">
              <div className="card-body gap-3">
                <div className="skeleton h-6 w-2/5" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-base-content/60">Loading your notes...</p>
      </div>
    </main>
  );
}
