"use client";

import { useFormStatus } from "react-dom";

export default function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary w-full" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner loading-sm" />
          Saving...
        </>
      ) : (
        "Save Note"
      )}
    </button>
  );
}
