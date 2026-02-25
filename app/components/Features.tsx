'use client';

import { Radar, GitBranch, Cpu } from "lucide-react";

export const Features = () => (
  <section id="özellikler" className="py-20 lg:py-24 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
          Neden <span className="text-primary">Kargomok?</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          İşletmeniz için en verimli kargo yönetim çözümleri ile operasyonel yükünüzü hafifletin.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { title: "Otomatik Takip", icon: <Radar className="size-7" />, color: "bg-blue-50 text-blue-600", desc: "Kargolarınızın durumunu anlık olarak takip edin, müşterilerinize otomatik SMS ve E-posta bildirimleri gönderin." },
          { title: "Çoklu Taşıyıcı Desteği", icon: <GitBranch className="size-7" />, color: "bg-orange-50 text-primary", desc: "Birden fazla kargo firmasıyla aynı anda çalışın. Algoritmamız ile her gönderi için en uygun fiyatlı ve hızlı seçeneği bulun." },
          { title: "Kolay API Entegrasyonu", icon: <Cpu className="size-7" />, color: "bg-purple-50 text-purple-600", desc: "Gelişmiş RESTful API yapımız ile e-ticaret sitenizi, ERP veya pazaryeri mağazanızı saniyeler içinde entegre edin." }
        ].map((feature, idx) => (
          <div key={idx} className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color} group-hover:bg-primary group-hover:text-white transition-colors`}>
              {feature.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-secondary">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-primary px-8 text-base font-bold text-primary transition-all hover:bg-primary hover:text-white">
          Tüm Özellikleri Keşfet
        </button>
      </div>
    </div>
  </section>
);
