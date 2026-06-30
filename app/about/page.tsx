import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Damda",
  description: "The story behind Damda — a coffee shop brewing with intention in Los Angeles.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-5">
            Our Story
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-wide leading-tight">
            Coffee with Intention
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 space-y-8 text-gray-600 leading-relaxed">
          <p className="text-xl text-gray-800 leading-relaxed">
            At Damda, we believe that coffee is more than a morning ritual — it
            is a craft, a conversation, and a small act of care in the middle of
            an ordinary day.
          </p>

          <p>
            Nestled in the heart of Los Angeles, Damda was born from a simple
            idea: that every cup should be made with purpose. We slow down so
            you don't have to rush. We pay attention to the details — the grind,
            the temperature, the pour — so that what reaches your hands is
            something worth pausing for.
          </p>

          <p>
            Our name, Damda (담다), comes from the Korean word meaning "to
            contain" or "to hold." We hold our craft with intention. We hold
            space for our community. And we hold high standards for every drink
            that leaves our counter.
          </p>

          <p>
            We source beans from roasters who share our values — people who
            treat farming relationships with the same care we bring to the bar.
            Every batch is chosen because it tells a story worth sharing over a
            warm cup.
          </p>

          {/* Pull quote */}
          <div className="border-l-4 border-burgundy pl-8 py-3 my-12">
            <p className="font-heading text-2xl text-burgundy italic leading-relaxed">
              "Every cup is an invitation to be present — to taste, to breathe,
              and to belong."
            </p>
          </div>

          <p>
            Whether you stop by for a quick espresso before work or settle in
            for an afternoon with a latte and a book, you are welcome here.
            Damda is a place to arrive, to be still, and to leave a little more
            yourself than when you walked in.
          </p>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="w-8 h-0.5 bg-burgundy mb-5" />
            <h3 className="font-heading text-xl text-burgundy mb-4 tracking-wide">
              Where to Find Us
            </h3>
            <address className="not-italic text-sm text-gray-600 leading-relaxed space-y-1">
              <p>228 1st St</p>
              <p>Los Angeles, CA 90012</p>
              <a
                href="tel:+12139993834"
                className="block mt-3 text-burgundy hover:underline"
              >
                (213) 999-3834
              </a>
            </address>
          </div>
          <div>
            <div className="w-8 h-0.5 bg-burgundy mb-5" />
            <h3 className="font-heading text-xl text-burgundy mb-4 tracking-wide">
              Hours
            </h3>
            <dl className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between gap-4">
                <dt>Monday – Friday</dt>
                <dd className="text-gray-400">7:00 AM – 3:45 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Saturday – Sunday</dt>
                <dd className="text-gray-400">9:00 AM – 3:45 PM</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Menu CTA */}
      <section className="bg-white py-20 text-center border-t border-gray-100">
        <p className="font-heading text-2xl text-gray-800 mb-6">
          Ready to see what we brew?
        </p>
        <Link
          href="/menu"
          className="inline-block bg-burgundy text-white px-10 py-3.5 text-xs tracking-widest uppercase hover:bg-burgundy-dark transition-colors"
        >
          View the Menu
        </Link>
      </section>
    </>
  );
}
