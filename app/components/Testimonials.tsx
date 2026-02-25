'use client';

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mehmet Kaya",
    role: "E-Ticaret Müdürü, TechStore",
    content: "Kargomok sayesinde kargo süreçlerimizi %60 hızlandırdık. Tüm kargo firmalarını tek panelden yönetmek inanılmaz kolaylık sağlıyor.",
    rating: 5,
    avatar: "MK"
  },
  {
    name: "Zeynep Arslan",
    role: "Operasyon Direktörü, ModaMağaza",
    content: "Otomatik bildirimler özelliği müşteri memnuniyetimizi ciddi ölçüde artırdı. Artık 'kargom nerede?' sorularını almıyoruz.",
    rating: 5,
    avatar: "ZA"
  },
  {
    name: "Can Öztürk",
    role: "Girişimci, OrganikMarket",
    content: "Küçük işletme olarak başladım, Kargomok&apos;un ücretsiz paketi ihtiyaçlarımı karşılıyor. Büyüdükçe geçiş de çok kolaydı.",
    rating: 5,
    avatar: "CÖ"
  }
];

export const Testimonials = () => (
  <section className="py-20 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
          Müşterilerimiz Ne <span className="text-primary">Diyor?</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Binlerce işletme Kargomok ile operasyonlarını dijitalleştirdi.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 flex-1">
              &quot;{t.content}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                {t.avatar}
              </div>
              <div>
                <div className="font-bold text-secondary">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
