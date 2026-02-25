'use client';

import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    { q: "Kargomok ücretli mi?", a: "14 gün boyunca tüm özellikleri ücretsiz deneyebilirsiniz. Sonrasında işletmenizin hacmine göre size en uygun paketi seçerek devam edebilirsiniz." },
    { q: "Hangi kargo firmalarını destekliyorsunuz?", a: "Yurtiçi Kargo, Aras Kargo, MNG Kargo, Sürat Kargo, PTT Kargo, UPS ve daha birçok yerel ve global kargo firması ile entegrasyonumuz mevcuttur." },
    { q: "Kurulum ne kadar sürer?", a: "API anahtarlarınızı sisteme girerek entegrasyonu birkaç dakika içinde tamamlayabilirsiniz. Teknik ekibimiz kurulum sürecinde size ücretsiz destek sağlar." },
    { q: "Özel yazılım kullanıyorum, entegre olabilir miyim?", a: "Evet, açık API dökümantasyonumuz sayesinde özel yazılımınızı veya ERP sisteminizi Kargomok'a kolayca entegre edebilirsiniz." }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Sıkça Sorulan <span className="text-primary">Sorular</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group rounded-xl bg-slate-50 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-secondary">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary shadow-sm group-open:-rotate-180 transition-transform">
                  <ChevronDown className="size-5" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-600 font-medium">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
