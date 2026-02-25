'use client';

import {
  LayoutDashboard,
  Truck,
  Users,
  BarChart3,
  Settings,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle2,
  Lock
} from "lucide-react";

export const DashboardMockup = () => (
  <div className="w-full mt-10 relative group perspective-1000">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative w-full bg-white dark:bg-navy-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="bg-slate-100 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 h-10 flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white dark:bg-navy-800 rounded-md px-3 py-1 text-[10px] text-slate-400 flex items-center gap-2 w-64 justify-center">
            <Lock className="size-2.5" />
            kargomok.com/panel/dashboard
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] min-h-[500px]">
        <div className="hidden md:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-900 p-4 gap-1">
          <div className="px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Menü</div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium cursor-pointer">
            <LayoutDashboard className="size-5" />
            <span>Panel</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors cursor-pointer">
            <Truck className="size-5" />
            <span>Gönderiler</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors cursor-pointer">
            <Users className="size-5" />
            <span>Müşteriler</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors cursor-pointer">
            <BarChart3 className="size-5" />
            <span>Raporlar</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors cursor-pointer">
            <Settings className="size-5" />
            <span>Ayarlar</span>
          </div>
          <div className="mt-auto p-4 bg-primary/5 rounded-xl border border-primary/10">
            <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">Pro Plan</div>
            <div className="w-full bg-slate-200 dark:bg-navy-700 rounded-full h-1.5 mb-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <div className="text-[10px] text-slate-500">375/500 Gönderi</div>
          </div>
        </div>
        <div className="flex flex-col bg-white dark:bg-navy-900 p-6 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Genel Bakış</h3>
              <p className="text-sm text-slate-500">Son 30 günlük aktivite raporu</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark transition-colors">
              <Plus className="size-4" />
              Yeni Gönderi
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-navy-800 shadow-sm text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Truck className="size-5" />
                </div>
                <span className="text-[10px] font-medium text-green-600 flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                  <TrendingUp className="size-3 mr-1" /> +12%
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">1,284</div>
              <div className="text-xs text-slate-500">Toplam Gönderi</div>
            </div>
            <div className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-navy-800 shadow-sm text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  <Clock className="size-5" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">Güncel</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">42</div>
              <div className="text-xs text-slate-500">Dağıtımdaki Kargolar</div>
            </div>
            <div className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-navy-800 shadow-sm text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="size-5" />
                </div>
                <span className="text-[10px] font-medium text-green-600 flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                  <TrendingUp className="size-3 mr-1" /> +5%
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">%98.5</div>
              <div className="text-xs text-slate-500">Teslimat Başarısı</div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden text-left">
            <div className="bg-slate-50 dark:bg-navy-800 px-6 py-4 border-b border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Son İşlemler</h4>
            </div>
            <div className="bg-white dark:bg-navy-900">
              <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-slate-100 dark:border-slate-800 text-[10px] font-medium text-slate-500 uppercase">
                <div>Takip No</div>
                <div>Alıcı</div>
                <div>Durum</div>
                <div>Tarih</div>
              </div>
              <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 px-6 py-4 border-b border-slate-50 dark:border-slate-800 items-center hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                <div className="text-sm font-medium text-primary">#TR-849201</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Ahmet Yılmaz</div>
                <div><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">Teslim Edildi</span></div>
                <div className="text-xs text-slate-500">Bugün, 14:30</div>
              </div>
              <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 px-6 py-4 border-b border-slate-50 dark:border-slate-800 items-center hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                <div className="text-sm font-medium text-primary">#TR-849202</div>
                <div className="text-sm text-slate-700 dark:text-slate-300">Ayşe Demir</div>
                <div><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">Dağıtımda</span></div>
                <div className="text-xs text-slate-500">Bugün, 11:15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
