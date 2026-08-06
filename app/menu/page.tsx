import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu — Damda",
  description: "Full menu for Damda café in Little Tokyo, Los Angeles.",
};

const categories = [
  {
    number: "01",
    name: "Espresso",
    subtitle: "Classic espresso drinks, made with intention.",
    items: [
      { name: "Espresso", price: "3.5" },
      { name: "Americano", price: "4.0" },
      { name: "Cortado", price: "4.5" },
      { name: "Cappuccino", price: "5.0" },
      { name: "Latte", price: "5.5" },
      {
        name: "Latte with Add-ons",
        note: "Simple Syrup, Agave, Vanilla, Lavender, Mocha",
        price: "6.0",
      },
      { name: "Sunrise Americano", price: "7.0" },
    ],
  },
  {
    number: "02",
    name: "Signatures",
    subtitle: "Drinks created to sip and enjoy.",
    items: [
      {
        name: "Damda Latte",
        note: "Short Vanilla Latte. Sweet Cream. Cocoa",
        price: "7.0",
      },
      {
        name: "Cinnamon Cream Latte",
        note: "Short Vanilla Latte. Sweet Cream. Cinnamon",
        price: "7.0",
      },
      {
        name: "Signature Latte",
        note: "Espresso & Condensed Milk Foam Over Iced Milk",
        price: "7.0",
      },
      { name: "Double Mocha", price: "7.5" },
      {
        name: "Salted Caramel Cream Latte",
        note: "Caramel. Cream. Maldon Salt. Blue Spirulina",
        price: "7.5",
      },
      { name: "Classic Espresso Tonic", price: "7.0" },
      {
        name: "Yuzu Espresso Tonic",
        note: "Elderflower, Yuzu, Honey",
        price: "7.5",
      },
    ],
  },
  {
    number: "03",
    name: "Cold Brew",
    subtitle: "Smooth, refreshing, and perfectly balanced.",
    items: [
      { name: "Cold Brew", price: "5.5" },
      { name: "Yuzu Cold Brew", price: "6.5" },
      { name: "Sweet Cream Cold Brew", price: "5.5" },
      { name: "Chocolate Cream Cold Brew", price: "5.5" },
    ],
  },
  {
    number: "04",
    name: "Matcha",
    subtitle: "Ceremonial grade matcha sourced from Uji.",
    items: [
      { name: "Matcha Americano", price: "6.25" },
      { name: "Matcha Latte", price: "7.25" },
      {
        name: "Matcha Latte with Add-ons",
        note: "Simple Syrup, Agave, Vanilla, Lavender",
        price: "7.5",
      },
      { name: "Salted Caramel Cream Matcha Latte", price: "7.5" },
      { name: "Sweet Cream Matcha Latte", price: "7.5" },
      { name: "Chocolate Cream Matcha Latte", price: "7.5" },
      { name: "Strawberry Matcha Latte", price: "7.5" },
      { name: "Blueberry Matcha Latte", price: "7.5" },
      { name: "Naju Pear Matcha Latte", price: "7.5" },
      {
        name: "Yuzu Matcha Tonic",
        note: "Elderflower, Yuzu, Honey",
        price: "8.0",
      },
    ],
  },
  {
    number: "05",
    name: "Hojicha",
    subtitle: "Roasted green tea, nutty and rich in flavor.",
    items: [
      { name: "Hojicha Latte", price: "6.75" },
      {
        name: "Hojicha Latte with Add-ons",
        note: "Simple Syrup, Agave, Vanilla",
        price: "7.0",
      },
      { name: "Sweet Cream Hojicha Latte", price: "7.25" },
    ],
  },
  {
    number: "06",
    name: "Chai",
    subtitle: "Spiced just right with a hint of sweetness.",
    items: [
      { name: "Chai Latte (Sweetened)", price: "6.5" },
      { name: "Sweet Cream Chai Latte", price: "7.0" },
    ],
  },
  {
    number: "07",
    name: "Non Caffeine",
    subtitle: "Much needed any time of day.",
    items: [
      { name: "Yuzu & Honey", price: "5.0" },
      { name: "Chocolate", price: "5.0" },
      { name: "Orange Juice 12oz", price: "6.0" },
    ],
  },
  {
    number: "08",
    name: "Tea",
    subtitle: "Seasonal teas chosen by our team.",
    items: [{ name: "See Selection", price: "5.0" }],
  },
];

const featured = [
  { src: "/cortado.webp", label: "Cortado" },
  { src: "/latte.jpg", label: "Latte" },
  { src: "/matcha-latte-iced.webp", label: "Matcha" },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-5">
            Little Tokyo, Los Angeles
          </p>
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide leading-tight">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Featured photos */}
      <section className="bg-cream py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-4">
          {featured.map(({ src, label }) => (
            <div key={label} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={label}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Full menu */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {categories.map((cat) => (
              <div key={cat.number}>
                <p className="text-xs text-burgundy/50 font-mono mb-1">{cat.number}</p>
                <div className="flex items-center gap-4 mb-1">
                  <h2 className="font-heading text-2xl text-burgundy tracking-wide">
                    {cat.name}
                  </h2>
                  <div className="flex-1 h-px bg-burgundy/20" />
                </div>
                <p className="text-xs text-gray-400 mb-6">{cat.subtitle}</p>

                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="border-b border-burgundy/10 pb-3">
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="text-sm font-medium text-gray-800">
                          {item.name}
                        </span>
                        <span className="text-sm text-burgundy shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      {item.note && (
                        <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-16 border border-burgundy/20 p-8 max-w-sm">
            <h3 className="font-heading text-xl text-burgundy tracking-wide mb-1">
              Add-ons
            </h3>
            <div className="w-8 h-0.5 bg-burgundy mb-5" />
            <p className="text-xs text-gray-400 mb-4">Regular milk default</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Oat Milk</span><span className="text-gray-400">+0</span>
              </li>
              <li className="flex justify-between">
                <span>Almond Milk</span><span className="text-gray-400">+0</span>
              </li>
              <li className="flex justify-between">
                <span>Koatji Oat</span><span className="text-gray-400">+0</span>
              </li>
            </ul>
            <p className="text-xs text-burgundy/60 mt-4">Recommended for matchas</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-cream border-t border-burgundy/10 py-12 text-center">
        <p className="text-sm text-gray-400 max-w-lg mx-auto px-6">
          Menu and prices subject to change. Ask your barista about milk
          alternatives.
        </p>
      </section>
    </>
  );
}
