import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] bg-burgundy flex items-center justify-center text-white text-center">
        <div className="max-w-2xl px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/60 mb-4">
            COFFEE &amp; MORE
          </p>
          <h1 className="font-heading text-8xl md:text-[10rem] font-medium tracking-[0.15em] leading-none mb-4">
            DAMDA
          </h1>
          <p className="text-sm tracking-widest text-white/70 mb-14">
            228 1st St, Los Angeles, CA 90012
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-cream text-burgundy px-10 py-3.5 text-xs tracking-widest uppercase font-semibold hover:bg-cream/90 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/about"
              className="border border-white/50 text-white px-10 py-3.5 text-xs tracking-widest uppercase hover:border-white hover:bg-cream/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Polka dot divider */}
      <div className="polka-dots h-24" />

      {/* CTA band */}
      <section className="bg-cream border-t border-b border-gray-100 py-20 text-center">
        <p className="font-heading text-3xl md:text-4xl text-burgundy mb-6 italic">
          "Every cup is an invitation to be present."
        </p>
        <Link
          href="/menu"
          className="inline-block bg-burgundy text-white px-10 py-3.5 text-xs tracking-widest uppercase hover:bg-burgundy-dark transition-colors"
        >
          See What We Brew
        </Link>
      </section>
    </>
  );
}
