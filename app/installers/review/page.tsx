"use client";

export default function ReviewInstallerPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-black text-slate-800 mb-2">ثبت امتیاز و نظر</h1>
      <p className="text-slate-600 mb-8">عملکرد نصاب نیروگاه خود را با ما در میان بگذارید تا کیفیت خدمات شبکه بهبود یابد.</p>
      
      <form className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">نام نصاب یا کد پروژه</label>
          <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400 outline-none" placeholder="مثال: پروژه کد 1234" required />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">امتیاز شما (1 تا 5)</label>
          <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400 outline-none">
            <option>5 - عالی</option>
            <option>4 - خیلی خوب</option>
            <option>3 - خوب</option>
            <option>2 - متوسط</option>
            <option>1 - ضعیف</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">متن نظر یا تجربه</label>
          <textarea rows={4} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400 outline-none" placeholder="نحوه اجرای پروژه را بنویسید..."></textarea>
        </div>

        <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl hover:bg-emerald-700 transition">
          ثبت امتیاز
        </button>
      </form>
    </main>
  );
}
