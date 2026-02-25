'use client';

import { DashboardMockup } from "./DashboardMockup";

export const Hero = () => (
  <section className="flex flex-col items-center px-4 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
    <div className="w-full max-w-[1200px] flex flex-col items-center gap-10 text-center">
      <div className="flex flex-col gap-6 max-w-[800px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Yeni Nesil Kargo Yönetimi
        </div>
        <h1 className="text-slate-900 tracking-tight text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Tüm Operasyonunuzu<br /> <span className="text-primary">Tek Ekrandan</span> Yönetin
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-[720px] mx-auto">
          Kargomok&apos;un gelişmiş paneli ile gönderilerinizi saniyeler içinde oluşturun, gerçek zamanlı takip edin ve maliyetlerinizi analiz edin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5">
            Demoyu İncele
          </button>
          <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-white border border-slate-200 text-slate-900 text-base font-bold hover:bg-slate-50 transition-all">
            Daha Fazla Bilgi
          </button>
        </div>
      </div>

      <DashboardMockup />
    </div>
  </section>
);
