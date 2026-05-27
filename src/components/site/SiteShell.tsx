import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="bg-warm-white text-charcoal antialiased overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}