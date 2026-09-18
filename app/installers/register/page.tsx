"use client";

export default function RegisterInstallerPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-black text-slate-800 mb-2">ثبت‌نام نصابان و مجریان</h1>
      <p className="text-slate-600 mb-8">به شبکه سراسری یلدای سهند بپیوندید و پروژه‌های نصب نیروگاه خورشیدی را دریافت کنید.</p>
      
      <form className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">نام و نام خانوادگی</label>
            <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">شماره تماس</label>
            <input type="tel" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 outline-none" placeholder="09xxxxxxxxx" required />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">استان و شهر محل فعالیت</label>
          <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 outline-none" />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">تخصص و سوابق اجرایی</label>
          <textarea rows={4} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-400 outline-none"></textarea>
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-slate-800 transition">
          ارسال درخواست ثبت‌نام
        </button>
      </form>
    </main>
  );
}
