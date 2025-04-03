'use client';

export default function GlobalError() {
  return (
    <div className="">
      <h2>GlobalError</h2>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </div>
  );
}
