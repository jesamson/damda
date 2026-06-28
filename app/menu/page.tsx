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
    photo: "photo-6HDC10e95m8",
  },
  {
    name: "Cortado",
    category: "Espresso Bar",
    price: "$4.50",
    description: "Equal parts espresso and steamed milk — bold and balanced.",
    photo: "photo-69YqZOU6-Jo",
  },
  {
    name: "Cappuccino",
    category: "Espresso Bar",
    price: "$5.00",
    description: "Espresso with velvety foamed milk. A classic done right.",
    photo: "photo-tA90pRfL2gM",
  },
  {
    name: "Latte",
    category: "Espresso Bar",
    price: "$5.50",
    description: "Smooth, creamy, and grounding. A cup to settle into.",
    photo: "photo-EsElwslACec",
  },
  {
    name: "Americano",
    category: "Espresso Bar",
    price: "$4.00",
    description: "Espresso diluted to a long, clean, and honest cup.",
    photo: "photo-6QSNci2dnKg",
  },
  {
    name: "Cold Brew",
    category: "Cold Drinks",
    price: "$5.50",
    description: "Steeped 18 hours. Smooth, bold, and never bitter.",
    photo: "photo-WCmMU38zg1c",
  },
  {
    name: "Iced Latte",
    category: "Cold Drinks",
    price: "$6.00",
    description: "Espresso over ice with your choice of milk.",
    photo: "photo-_tSgUmeYMm8",
  },
  {
    name: "Matcha Latte",
    category: "Cold Drinks",
    price: "$6.50",
    description: "Ceremonial grade matcha. Hot or iced.",
    photo: "photo-rW_EmeV7dEU",
  },
];

const categories = [...new Set(menuItems.map((item) => item.category))];

function unsplash(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&h=450&q=80`;
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-5">
            What We Serve
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-wide leading-tight">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Menu grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
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
                          src={unsplash(item.photo)}
                          alt={item.name}
                          fill
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
      <section className="bg-white border-t border-gray-100 py-12 px-6 text-center">
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Menu and prices subject to change. Ask your barista about milk
          alternatives, seasonal offerings, and daily specials.
        </p>
      </section>
    </>
  );
}
