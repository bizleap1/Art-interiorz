import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  // Simple container with max width and optional dark mode toggle placeholder
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header could be added here in the future */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {children}
      </main>
      {/* Footer placeholder */}
    </div>
  );
}
