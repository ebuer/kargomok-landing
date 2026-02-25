'use client';

import { Star } from "lucide-react";

export const Testimonials = () => (
  <section className="py-20 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
          Mutlu <span className="text-primary">Müşterilerimiz</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Binlerce e-ticaret satıcısı kargo süreçlerini Kargomok ile yönetiyor.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { name: "Ahmet Yılmaz", role: "TeknoStore Kurucusu", text: "Trendyol ve Hepsiburada mağazalarımı yönetmek artık çok kolay. Kargo barkodlarını tek tıkla alabiliyorum. Kesinlikle tavsiye ederim." },
          { name: "Zeynep Demir", role: "ModaButik Sahibi", text: "Kargo maliyetlerimizi %20 oranında düşürdük. Çoklu taşıyıcı desteği sayesinde her gönderi için en uygun fiyatı bulabiliyoruz." },
          { name: "Mehmet Kaya", role: "Kaya Elektronik CEO", text: "Müşteri hizmetleri harika. Kurulum sırasında yaşadığımız ufak bir sorunu dakikalar içinde çözdüler. Teşekkürler Kargomok!" }
        ].map((t, idx) => (
          <div key={idx} className="flex flex-col rounded-2xl bg-slate-50 p-8 shadow-sm border border-slate-100">
            <div className="flex gap-1 mb-4 text-orange-400">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="size-4 fill-current" />)}
            </div>
            <p className="mb-6 text-slate-600 italic flex-1">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                <span className="text-slate-500 font-bold">{t.name[0]}</span>
              </div>
              <div>
                <h4 className="font-bold text-secondary">{t.name}</h4>
                <p className="text-xs font-medium text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
