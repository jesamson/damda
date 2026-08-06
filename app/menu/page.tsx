import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Damda",
  description: "Full menu for Damda café in Little Tokyo, Los Angeles.",
};

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-4">
            Little Tokyo, Los Angeles
          </p>
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide leading-tight">
            Our Menu
          </h1>
        </div>
      </section>

      {/* PDF embed — desktop */}
      <section className="hidden md:block bg-cream">
        <iframe
          src="/menu.pdf"
          className="w-full"
          style={{ height: "90vh" }}
          title="Damda Menu"
        />
      </section>

      {/* Mobile fallback */}
      <section className="md:hidden bg-cream py-16 text-center px-6">
        <p className="text-sm text-gray-500 mb-6">
          View or download the full menu below.
        </p>
        <a
          href="/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-burgundy text-white px-10 py-3.5 text-xs tracking-widest uppercase hover:bg-burgundy-dark transition-colors"
        >
          Open Menu PDF
        </a>
      </section>
    </>
  );
}
