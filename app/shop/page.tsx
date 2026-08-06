"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Barista Pro Espresso Machine",
    category: "Espresso Machines",
    price: 899,
    description: "Semi-automatic with PID temperature control and a commercial-grade 58mm portafilter.",
    photo: "photo-1510707577719-ae7c14805e3a",
  },
  {
    id: 2,
    name: "Compact Home Espresso Machine",
    category: "Espresso Machines",
    price: 499,
    description: "Designed for the home barista. 15-bar pressure pump, built-in steam wand.",
    photo: "photo-1521302200778-33500795e128",
  },
  {
    id: 3,
    name: "The Classic Espresso Machine",
    category: "Espresso Machines",
    price: 1299,
    description: "Commercial-grade dual boiler. Built to last, built for precision.",
    photo: "photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 4,
    name: "Double Wall Glass Set",
    category: "Glassware",
    price: 48,
    description: "Set of 2. Borosilicate double-wall glasses keep your drink at the right temperature.",
    photo: "photo-1556909172-54557c7e4fb7",
  },
  {
    id: 5,
    name: "Cortado Glass Set",
    category: "Glassware",
    price: 38,
    description: "Set of 4 hand-blown cortado glasses. The same ones we use at the café.",
    photo: "photo-1507133750040-4a8f57021571",
  },
  {
    id: 6,
    name: "Ceramic Pour-Over Set",
    category: "Glassware",
    price: 65,
    description: "Includes ceramic dripper and carafe. Minimalist design, maximum clarity.",
    photo: "photo-1498804103079-a6351b050096",
  },
];

const categories = ["All", "Espresso Machines", "Glassware"];

function unsplash(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&h=500&q=80`;
}

function ProductCard({ product }: { product: typeof products[number] }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
        <Image
          src={unsplash(product.photo)}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <p className="text-xs text-burgundy/60 tracking-widest uppercase mb-1">
        {product.category}
      </p>
      <h3 className="font-heading text-lg text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-burgundy font-medium">${product.price.toLocaleString()}</span>
        <button
          onClick={handleAdd}
          className={`text-xs tracking-widest uppercase px-5 py-2.5 transition-colors ${
            added
              ? "bg-burgundy text-white"
              : "border border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-burgundy text-white py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.6em] uppercase text-white/50 mb-5">
            The Damda Store
          </p>
          <h1 className="font-heading text-5xl md:text-6xl tracking-wide leading-tight">
            Shop
          </h1>
          <p className="text-sm text-white/60 mt-4 tracking-wide">
            Espresso machines, glassware, and more — coming soon.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-cream border-b border-burgundy/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-widest uppercase transition-colors pb-1 ${
                active === cat
                  ? "text-burgundy border-b border-burgundy"
                  : "text-gray-400 hover:text-burgundy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon banner */}
      <section className="bg-burgundy text-white py-12 text-center px-6">
        <p className="text-sm text-white/70 tracking-wide max-w-lg mx-auto">
          The store is currently in development. Checkout and payments will be
          available soon.
        </p>
      </section>
    </>
  );
}
