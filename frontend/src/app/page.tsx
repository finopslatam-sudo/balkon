import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BALKON | Construcciones CJ",
  description: "Empresa de construcción y remodelación en Chile.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">BALKON</h1>
        <p className="text-lg text-muted-foreground">Construcciones CJ</p>
        <p className="text-sm text-muted-foreground">Plataforma en construcción</p>
      </div>
    </main>
  );
}
