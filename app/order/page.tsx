import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order — Damda",
  description: "Order Damda online for pickup or delivery.",
};

const platforms = [
  {
    name: "Grubhub",
    description: "Order pickup or delivery through Grubhub.",
    url: "https://www.grubhub.com/restaurant/the-latte-shop-228-1st-st-los-angeles/13157200",
    available: true,
  },
  {
    name: "DoorDash",
    description: "Order pickup or delivery through DoorDash.",
    url: "#",
    available: false,
  },
];

export default function OrderPage() {
  return (
    <>
      <section className="bg-burgundy text-white py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-5">
            Little Tokyo, Los Angeles
          </p>
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide leading-tight">
            Order Online
          </h1>
          <p className="text-sm text-white/60 mt-4">
            Available for pickup and delivery.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="border border-burgundy/20 p-8 flex flex-col"
            >
              <h2 className="font-heading text-2xl text-burgundy tracking-wide mb-2">
                {p.name}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                {p.description}
              </p>
              {p.available ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-burgundy text-white text-center px-6 py-3 text-xs tracking-widest uppercase hover:bg-burgundy-dark transition-colors"
                >
                  Order on {p.name}
                </a>
              ) : (
                <span className="inline-block border border-burgundy/20 text-burgundy/40 text-center px-6 py-3 text-xs tracking-widest uppercase cursor-not-allowed">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-10 text-center">
          <p className="text-xs text-gray-400 tracking-wide">
            Prefer to order in person? Visit us at{" "}
            <span className="text-burgundy">228 1st St, Los Angeles, CA 90012</span>
          </p>
        </div>
      </section>
    </>
  );
}
