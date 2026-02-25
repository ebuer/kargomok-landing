'use client';

import { Truck, Twitter, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
              <Truck className="size-5" />
            </div>
            <span className="text-xl font-extrabold text-secondary">Kargomok</span>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Modern lojistik süreçleri için en akıllı çözüm ortağınız.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">Ürün</h4>
          <ul className="space-y-3 text-sm text-slate-600 font-semibold">
            {["Özellikler", "Entegrasyonlar", "Fiyatlandırma", "API Dokümantasyonu"].map((item) => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">Şirket</h4>
          <ul className="space-y-3 text-sm text-slate-600 font-semibold">
            {["Hakkımızda", "Blog", "Kariyer", "İletişim"].map((item) => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">Bülten</h4>
          <p className="mb-4 text-sm text-slate-500 font-medium">Yeniliklerden haberdar olmak için abone olun.</p>
          <div className="flex gap-2">
            <input
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:ring-primary outline-none"
              placeholder="E-posta adresiniz"
              type="email"
            />
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
        <p className="text-sm text-slate-500 font-medium">© 2024 Kargomok Teknoloji A.Ş. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Twitter className="size-5" /></a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Linkedin className="size-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);
