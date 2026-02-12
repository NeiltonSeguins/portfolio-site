"use client";

import Error from "next/error";

// This page renders when a route like `/unknown` is accessed on the root.
export default function NotFound() {
  return (
    <html lang="pt">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
