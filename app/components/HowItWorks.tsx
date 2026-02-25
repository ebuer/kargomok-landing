'use client';

import { motion } from "motion/react";
import { Link as LinkIcon, Package, Search } from "lucide-react";

export const HowItWorks = () => (
  <section id="nasıl-çalışır" className="py-20 lg:py-24 bg-white overflow-hidden">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
          Nasıl <span className="text-primary">Çalışır?</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          3 basit adımda lojistik operasyonlarınızı dijitalleştirin.
        </p>
      </div>
      <div className="relative grid gap-12 lg:grid-cols-3">
        <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-200 hidden lg:block -z-10 transform translate-y-4" />
        {[
          { step: "1. Bağla", icon: <LinkIcon className="size-8" />, desc: "E-ticaret sitenizi veya pazaryeri mağazanızı API ile saniyeler içinde sisteme bağlayın." },
          { step: "2. Gönder", icon: <Package className="size-8" />, desc: "Siparişlerinizi tek tıkla kargolayın, barkodlarınızı otomatik oluşturun." },
          { step: "3. Takip Et", icon: <Search className="size-8" />, desc: "Kargo durumunu anlık takip edin, müşterilerinize otomatik bildirimler gönderin." }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-primary text-primary shadow-xl">
              {item.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-secondary">{item.step}</h3>
            <p className="text-slate-600 max-w-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
