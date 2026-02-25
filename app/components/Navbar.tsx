'use client';

import { useState } from "react";
import { Truck, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
            <Truck className="size-5" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-secondary">Kargomok</h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Nasıl Çalışır", id: "nasıl-çalışır" },
            { name: "Özellikler", id: "özellikler" },
            { name: "Entegrasyonlar", id: "entegrasyonlar" },
            { name: "Fiyatlandırma", id: "fiyatlandırma" },
            { name: "Destek", id: "destek" }
          ].map((item) => (
            <a key={item.name} href={`#${item.id}`} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-bold text-slate-600 hover:text-secondary sm:block">
            Giriş Yap
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-orange-600 shadow-sm">
            Ücretsiz Dene
          </button>
          <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white p-4 space-y-4">
          {[
            { name: "Nasıl Çalışır", id: "nasıl-çalışır" },
            { name: "Özellikler", id: "özellikler" },
            { name: "Entegrasyonlar", id: "entegrasyonlar" },
            { name: "Fiyatlandırma", id: "fiyatlandırma" },
            { name: "Destek", id: "destek" }
          ].map((item) => (
            <a key={item.name} href={`#${item.id}`} onClick={() => setIsOpen(false)} className="block text-base font-semibold text-slate-600">
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button className="w-full text-left font-bold text-slate-600">Giriş Yap</button>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Ücretsiz Dene</button>
          </div>
        </div>
      )}
    </header>
  );
};
