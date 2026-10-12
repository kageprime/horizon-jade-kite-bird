import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [src, setSrc] = useState("/pool.html");
  useEffect(() => {
    const m = window.location.pathname.match(/^\/hds-[a-z0-9]+-\d+-[a-z0-9]+/i);
    if (m) setSrc(`${m[0]}/pool.html`);
  }, []);
  return (
    <main className="game-shell">
      <h1 className="sr-only">Pixie Pool</h1>
      <iframe title="Pixie Pool" src={src} className="game-frame" />
    </main>
  );
}
