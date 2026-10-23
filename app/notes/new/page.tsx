import Link from "next/link";
import { createNote } from "../actions";
import SaveButton from "./save-button";

export default function NewNotePage() {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <section className="card mx-auto w-full max-w-xl border border-base-300 bg-base-100 shadow-xl">
        <div className="card-body">
          <Link href="/notes" className="link link-primary mb-2 w-fit">
            ← Back to notes
          </Link>
          <h1 className="card-title text-3xl">Create a Note</h1>
          <p className="mb-3 text-base-content/60">
            Write down an idea before you forget it.
          </p>

          <form action={createNote} className="space-y-5">
            <div className="form-control">
              <label className="label" htmlFor="title">
                <span className="label-text font-semibold">Title</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter your note title"
                className="input input-bordered w-full"
                maxLength={100}
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="body">
                <span className="label-text font-semibold">Note</span>
              </label>
              <textarea
                id="body"
                name="body"
                placeholder="Write your thoughts here..."
                className="textarea textarea-bordered min-h-40 w-full"
                rows={6}
                required
              />
            </div>

            <SaveButton />
          </form>
        </div>
      </section>
    </main>
  );
}
