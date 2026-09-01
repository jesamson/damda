import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Damda",
  description: "Full menu for Damda café in Little Tokyo, Los Angeles.",
};

export default function MenuPage() {
  return (
    <>
      {/* PDF — full height, no toolbar */}
      <div className="hidden md:block" style={{ height: "calc(100vh - 4rem)" }}>
        <iframe
          src="/menu.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full"
          title="Damda Menu"
        />
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden bg-cream py-16 text-center px-6">
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
      </div>
    </>
  );
}
