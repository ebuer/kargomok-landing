'use client';

import { Mail, Phone } from "lucide-react";

export const Contact = () => (
  <section id="destek" className="py-20 lg:py-24 bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl mb-6">
            Bize <span className="text-primary">Ulaşın</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Sorularınız mı var? Teknik ekibimiz ve müşteri temsilcilerimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100">
                <Mail className="size-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary">E-posta</h4>
                <p className="text-slate-500">destek@kargomok.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100">
                <Phone className="size-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary">Telefon</h4>
                <p className="text-slate-500">+90 (212) 555 00 00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-xl border border-slate-100">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Ad Soyad</label>
                <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">E-posta</label>
                <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Konu</label>
              <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Mesajınız</label>
              <textarea className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 outline-none focus:ring-2 focus:ring-primary h-32" />
            </div>
            <button className="w-full rounded-lg bg-primary py-3 font-bold text-white hover:bg-orange-600 transition-all">
              Mesaj Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
