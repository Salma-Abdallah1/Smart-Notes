import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteNote } from "../actions";

type Note = {
  id: string;
  title: string;
  body: string;
};

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:3001/notes/${encodeURIComponent(id)}`,
    { cache: "no-store" }
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Could not load this note. Make sure json-server is running.");
  }

  const note: Note = await response.json();

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <article className="card mx-auto w-full max-w-2xl border border-base-300 bg-base-100 shadow-xl">
        <div className="card-body">
          <Link href="/notes" className="link link-primary mb-3 w-fit">
            ← Back to notes
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Note details
          </p>
          <h1 className="break-words text-3xl font-bold">{note.title}</h1>
          <div className="divider" />
          <p className="min-h-24 whitespace-pre-wrap break-words leading-7">
            {note.body}
          </p>
          <div className="card-actions mt-6 justify-end">
            <form action={deleteNote}>
              <input type="hidden" name="id" value={note.id} />
              <button type="submit" className="btn btn-error btn-outline">
                Delete note
              </button>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
}
