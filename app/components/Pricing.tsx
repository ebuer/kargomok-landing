'use client';

import { CheckCircle2, X } from "lucide-react";

export const Pricing = () => (
  <section id="fiyatlandırma" className="py-24 px-4 bg-slate-50">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold leading-tight mb-4">İhtiyacınıza Uygun Paketler</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          İşletmenizin büyüklüğüne göre ölçeklenebilir çözümler. İstediğiniz zaman paketinizi yükseltebilirsiniz.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Başlangıç Plan */}
        <div className="relative flex flex-col p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Başlangıç</h3>
          <p className="text-slate-500 text-sm mb-6">Yeni başlayan işletmeler için ideal.</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-black text-slate-900">₺0</span>
            <span className="text-slate-500 font-medium">/ay</span>
          </div>
          <button className="w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors mb-8">
            Hemen Başla
          </button>
          <ul className="flex flex-col gap-4 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              Aylık 50 gönderi
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              Temel Raporlama
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              E-posta Desteği
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <X className="size-5" />
              Pazaryeri Entegrasyonu
            </li>
          </ul>
        </div>
        {/* Profesyonel Plan */}
        <div className="relative flex flex-col p-8 bg-white rounded-2xl border-2 border-primary shadow-2xl shadow-primary/10 scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            En Popüler
          </div>
          <h3 className="text-lg font-bold text-primary mb-2">Profesyonel</h3>
          <p className="text-slate-500 text-sm mb-6">Büyüyen e-ticaret siteleri için.</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-black text-slate-900">₺299</span>
            <span className="text-slate-500 font-medium">/ay</span>
          </div>
          <button className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 transition-all mb-8">
            Hemen Başla
          </button>
          <ul className="flex flex-col gap-4 text-sm text-slate-700">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              <strong>Aylık 500 gönderi</strong>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Gelişmiş Analitik & Raporlar
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Canlı Destek
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Tüm Pazaryeri Entegrasyonları
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-primary" />
              Toplu Etiket Basımı
            </li>
          </ul>
        </div>
        {/* Kurumsal Plan */}
        <div className="relative flex flex-col p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Kurumsal</h3>
          <p className="text-slate-500 text-sm mb-6">Büyük hacimli operasyonlar için.</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-black text-slate-900">Özel</span>
            <span className="text-slate-500 font-medium">Teklif</span>
          </div>
          <button className="w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors mb-8">
            Teklif Al
          </button>
          <ul className="flex flex-col gap-4 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              Sınırsız gönderi
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              Özel Hesap Yöneticisi
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              API Erişimi & Webhooks
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              Özel Entegrasyonlar
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-green-500" />
              SLA Garantisi
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
