import Link from "next/link";

const hours = [
  { days: "Monday – Friday", time: "7:00 AM – 3:45 PM" },
  { days: "Saturday – Sunday", time: "9:00 AM – 3:45 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-burgundy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-heading text-2xl tracking-[0.35em] font-medium mb-4">
            DAMDA
          </p>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            A specialty coffee shop in Los Angeles, brewing every cup with
            intention.
          </p>
        </div>

        {/* Hours & Visit */}
        <div>
          <h3 className="text-xs tracking-widest uppercase text-white/50 mb-5">
            Hours &amp; Location
          </h3>
          <ul className="space-y-2 text-sm text-white/80 mb-6">
            {hours.map(({ days, time }) => (
              <li
                key={days}
                className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-4"
              >
                <span>{days}</span>
                <span className="text-white/60">{time}</span>
              </li>
            ))}
          </ul>
          <address className="not-italic text-sm text-white/80 space-y-1">
            <p>228 1st St, Los Angeles, CA 90012</p>
            <a
              href="tel:+12139993834"
              className="block hover:text-white transition-colors"
            >
              (213) 999-3834
            </a>
          </address>
        </div>

        {/* Social & Nav */}
        <div>
          <h3 className="text-xs tracking-widest uppercase text-white/50 mb-5">
            Follow Us
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/80 mb-8">
            <a
              href="https://www.instagram.com/thelatteshop.official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

          <h3 className="text-xs tracking-widest uppercase text-white/50 mb-4">
            Pages
          </h3>
          <nav className="flex flex-col gap-3 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-white transition-colors">
              Menu
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-white/40 text-center">
          © {new Date().getFullYear()} Damda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
