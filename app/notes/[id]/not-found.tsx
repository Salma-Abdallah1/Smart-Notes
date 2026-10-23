import Link from "next/link";

export default function NoteNotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-base-200 px-4">
      <section className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <p className="text-6xl font-black text-primary">404</p>
          <h1 className="card-title text-2xl">Note not found</h1>
          <p className="text-base-content/60">
            This note may have been deleted or the address may be incorrect.
          </p>
          <Link href="/notes" className="btn btn-primary mt-4">
            Back to notes
          </Link>
        </div>
      </section>
    </main>
  );
}
