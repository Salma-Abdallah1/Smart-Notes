import Link from "next/link";
import { deleteNote } from "./actions";

type Note = {
  id: string;
  title: string;
  body: string;
};

async function getNotes(): Promise<Note[]> {
  const response = await fetch("http://localhost:3001/notes", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load notes. Make sure json-server is running.");
  }

  return response.json();
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
             Smart Notes
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">My Notes</h1>
            <p className="mt-2 text-base-content/60">
              Keep your thoughts and ideas in one place.
            </p>
          </div>
          <Link href="/notes/new" className="btn btn-primary shrink-0">
            <span aria-hidden="true">＋</span> New Note
          </Link>
        </header>

        {notes.length === 0 ? (
          <section className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body items-center py-12 text-center">
              <div className="text-5xl" aria-hidden="true">📝</div>
              <h2 className="card-title">No notes yet</h2>
              <p className="text-base-content/60">
                Create your first note to get started.
              </p>
              <Link href="/notes/new" className="btn btn-primary mt-3">
                Create a note
              </Link>
            </div>
          </section>
        ) : (
          <div className="grid gap-4">
            {notes.map((note) => (
              <article
                key={note.id}
                className="card border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="card-body gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <Link href={`/notes/${note.id}`} className="min-w-0 flex-1">
                      <h2 className="card-title break-words text-xl hover:text-primary">
                        {note.title}
                      </h2>
                      <p className="mt-2 whitespace-pre-wrap break-words text-base-content/70">
                        {note.body}
                      </p>
                      <span className="mt-4 inline-block text-sm font-semibold text-primary">
                        Read note →
                      </span>
                    </Link>
                    <form action={deleteNote}>
                      <input type="hidden" name="id" value={note.id} />
                      <button
                        type="submit"
                        className="btn btn-outline btn-error btn-sm"
                        aria-label={`Delete ${note.title}`}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
