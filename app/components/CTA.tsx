'use client';

export const CTA = () => (
  <section className="relative py-20 bg-white overflow-hidden border-t border-slate-100">
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl mb-6">
        Operasyonlarınızı Hızlandırmaya Hazır mısınız?
      </h2>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Hemen ücretsiz hesabınızı oluşturun, 14 gün boyunca tüm premium özellikleri riske girmeden deneyimleyin.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="inline-flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-lg font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-primary-dark hover:scale-105">
          Hemen Başla - Ücretsiz
        </button>
        <button className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-slate-300 bg-transparent px-8 text-lg font-bold text-secondary transition-all hover:bg-slate-100">
          İletişime Geç
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-500 font-medium">
        Kredi kartı gerekmez. İptal etmek için herhangi bir taahhüt yoktur.
      </p>
    </div>
  </section>
);
