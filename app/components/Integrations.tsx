'use client';

import { CheckCircle2 } from "lucide-react";

export const Integrations = () => (
  <section id="entegrasyonlar" className="py-20 lg:py-24 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl mb-6">
            Tüm Pazaryerleri ile <br /><span className="text-primary">Tam Entegrasyon</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Trendyol, Hepsiburada, Amazon, N11, Çiçeksepeti ve daha fazlası. Tek panelden tüm mağazalarınızı yönetin, siparişlerinizi otomatik çekin ve kargo barkodlarını anında oluşturun.
          </p>
          <ul className="space-y-4 mb-8">
            {["Otomatik Sipariş Senkronizasyonu", "Toplu Barkod Basımı", "Stok Güncelleme"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-green-500" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark">
            Tüm Entegrasyonları Gör
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["Trendyol", "Hepsiburada", "Amazon", "N11", "Çiçeksepeti", "Shopify", "Woocommerce", "Opencart"].map((name) => (
            <div key={name} className="aspect-square flex items-center justify-center rounded-2xl bg-white border border-slate-200 p-4 hover:shadow-lg transition-all cursor-default">
              <span className="font-bold text-slate-400 text-sm text-center">{name}</span>
            </div>
          ))}
          <div className="aspect-square flex items-center justify-center rounded-2xl bg-primary text-white p-4 hover:shadow-lg transition-all cursor-pointer">
            <span className="text-xs font-bold text-center">+20 <br />Diğer</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
