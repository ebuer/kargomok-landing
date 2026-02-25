'use client';

export const Partners = () => (
  <section className="border-y border-slate-200 bg-white py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <p className="mb-8 text-xs font-bold tracking-widest text-slate-400 uppercase">Entegre Kargo Firmaları</p>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center justify-center p-4">
            <div className="h-8 w-32 bg-slate-200 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
