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
              className="bg-white text-burgundy px-10 py-3.5 text-xs tracking-widest uppercase font-semibold hover:bg-white/90 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/about"
              className="border border-white/50 text-white px-10 py-3.5 text-xs tracking-widest uppercase hover:border-white hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Polka dot divider */}
      <div className="polka-dots h-24" />

      {/* Philosophy strip */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            {
              title: "Passion Behind Each Pour",
              body: "Every cup is a deliberate act — sourced thoughtfully, brewed carefully, served with care.",
            },
            {
              title: "Small Batch Roasts",
              body: "We work with roasters who share our commitment to quality, flavor, and sustainability.",
            },
            {
              title: "A Place to Belong",
              body: "Damda is more than coffee. It's a corner of Los Angeles to slow down and be present.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <div className="w-8 h-0.5 bg-burgundy mx-auto mb-6" />
              <h2 className="font-heading text-xl text-burgundy mb-4 tracking-wide">
                {title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white border-t border-b border-gray-100 py-20 text-center">
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
