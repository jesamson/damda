import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu — Damda",
  description: "Explore our espresso drinks and cold brew offerings.",
};

const menuItems = [
  {
    name: "Espresso",
    category: "Espresso Bar",
    price: "$3.50",
    description: "A concentrated shot of pure intention.",
    src: `https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&h=450&q=80`,
  },
  {
    name: "Cortado",
    category: "Espresso Bar",
    price: "$4.50",
    description: "Equal parts espresso and steamed milk — bold and balanced.",
    src: "/cortado.webp",
  },
  {
    name: "Cappuccino",
    category: "Espresso Bar",
    price: "$5.00",
    description: "Espresso with velvety foamed milk. A classic done right.",
    src: `https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&h=450&q=80`,
  },
  {
    name: "Latte",
    category: "Espresso Bar",
    price: "$5.50",
    description: "Smooth, creamy, and grounding. A cup to settle into.",
    src: "/latte.jpg",
  },
  {
    name: "Americano",
    category: "Espresso Bar",
    price: "$4.00",
    description: "Espresso diluted to a long, clean, and honest cup.",
    src: "/americano.jpg",
  },
  {
    name: "Cold Brew",
    category: "Cold Drinks",
    price: "$5.50",
    description: "Steeped 18 hours. Smooth, bold, and never bitter.",
    src: `https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&h=450&q=80`,
  },
  {
    name: "Iced Latte",
    category: "Cold Drinks",
    price: "$6.00",
    description: "Espresso over ice with your choice of milk.",
    src: "/iced-latte.jpg",
  },
  {
    name: "Matcha Latte",
    category: "Cold Drinks",
    price: "$6.50",
    description: "Ceremonial grade matcha. Hot or iced.",
    src: "/matcha-latte-iced.webp",
  },
];

const categories = [...new Set(menuItems.map((item) => item.category))];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-5">
            What We Serve
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-wide leading-tight">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Menu grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-8 h-0.5 bg-burgundy flex-shrink-0" />
                <h2 className="font-heading text-2xl text-burgundy tracking-wide">
                  {category}
                </h2>
                <div className="flex-1 h-px bg-burgundy/15" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div key={item.name} className="group">
                      <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <h3 className="font-heading text-lg text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-burgundy text-sm font-medium">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-cream border-t border-gray-100 py-12 text-center">
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Menu and prices subject to change. Ask your barista about milk
          alternatives.
        </p>
      </section>
    </>
  );
}
