"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-yellow-400/30 bg-white/70 p-4 shadow-sm backdrop-blur-md">
      <div className="text-xs font-bold text-yellow-600/80">{title}</div>
      <div className="mt-1 text-2xl font-black text-yellow-500">{value}</div>
    </div>
  );
}

interface SolarFormData {
  full_name: string;
  national_id: string;
  phone_number: string;
  province: string;
  city: string;
  land_area_sqm: number | "";
  requested_capacity_kw: number | "";
  roof_type: string;
  electricity_bill_id: string;
  latitude: number;
  longitude: number;
  notes: string;
}

const initialForm: SolarFormData = {
  full_name: "",
  national_id: "",
  phone_number: "",
  province: "البرز",
  city: "کرج",
  land_area_sqm: "",
  requested_capacity_kw: "",
  roof_type: "سوله صنعتی",
  electricity_bill_id: "",
  latitude: 35.8327,
  longitude: 50.9915,
  notes: "",
};

export default function SolarPage() {
  const [formData, setFormData] = useState<SolarFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "land_area_sqm" || name === "requested_capacity_kw"
          ? value === "" ? "" : Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

    try {
      const payload = {
        ...formData,
        land_area_sqm: Number(formData.land_area_sqm) || 0,
        requested_capacity_kw: Number(formData.requested_capacity_kw) || 0,
      };

      const res = await fetch(`${apiUrl}/api/applicants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "خطایی در ثبت اطلاعات رخ داده است.");
      }

      setFeedback({
        type: "success",
        text: `درخواست شما با موفقیت ثبت گردید. شماره پیگیری پرونده: ${data.id}`,
      });
      setFormData(initialForm);
    } catch (err: any) {
      setFeedback({
        type: "error",
        text: err.message || "امکان برقراری ارتباط با سرور وجود ندارد.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      dir="rtl"
      style={{ fontFamily: 'B Nazanin, "B Nazanin", "BNazanin", serif' }}
      className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-cyan-50/40 text-slate-800 selection:bg-yellow-300/40"
    >
      <style jsx global>{`
        * {
          font-family: "B Nazanin", "BNazanin", serif !important;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* ستون راست: مشخصات و برند */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex rounded-full bg-yellow-400/15 px-4 py-1.5 text-sm font-bold text-yellow-600 border border-yellow-400/40">
                سامانه ثبت درخواست احداث نیروگاه خورشیدی
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-800 lg:text-5xl">
                شرکت یلدای سهند <br />
                <span className="text-yellow-500">
                  پیشرو در انرژی‌های تجدیدپذیر
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                جهت احداث نیروگاه خورشیدی و بهره‌مندی از مزایای سرمایه‌گذاری در این حوزه، لطفاً فرم روبه‌رو را تکمیل نمایید. کارشناسان ما پس از بررسی اولیه جهت هماهنگی‌های بعدی با شما تماس خواهند گرفت.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <StatCard title="پروژه‌های اجرا شده" value="+۵۰۰" />
              <StatCard title="ظرفیت (کیلووات)" value="۱۰۰۰۰" />
              <StatCard title="رضایت مشتریان" value="۱۰۰٪" />
            </div>

            <div className="space-y-3">
              {[
                "مشاوره تخصصی و فنی",
                "برآورد دقیق بازگشت سرمایه",
                "پشتیبانی در اخذ مجوزهای قانونی",
                "تامین تجهیزات برند و استاندارد",
                "احداث نیروگاه خورشیدی",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-lg font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ستون چپ: فرم ثبت‌نام */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-2xl shadow-yellow-300/20 backdrop-blur-sm"
          >
            <div className="mb-6 border-b border-slate-100 pb-4">
              <h2 className="text-2xl font-black text-slate-800">فرم ثبت‌نام متقاضی</h2>
              <p className="text-sm text-slate-500 mt-1">
                اطلاعات ملک و ظرفیت درخواستی را وارد فرمایید.
              </p>
            </div>

            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl mb-6 text-base font-bold ${
                  feedback.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                    : "bg-rose-50 text-rose-800 border border-rose-300"
                }`}
              >
                {feedback.text}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">
                    نام و نام خانوادگی <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="مثال: آریان صدرائی"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">
                    کد ملی <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="national_id"
                    maxLength={10}
                    required
                    value={formData.national_id}
                    onChange={handleChange}
                    placeholder="۱۰ رقم بدون خط تیره"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition text-left dir-ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">
                    شماره همراه <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    maxLength={11}
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition text-left dir-ltr"
                  />
                </div>

                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">
                    شناسه قبض برق
                  </label>
                  <input
                    type="text"
                    name="electricity_bill_id"
                    value={formData.electricity_bill_id}
                    onChange={handleChange}
                    placeholder="۱۳ رقمی (اختیاری)"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition text-left dir-ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">
                    ظرفیت پیشنهادی (کیلووات) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="requested_capacity_kw"
                    min={1}
                    required
                    value={formData.requested_capacity_kw}
                    onChange={handleChange}
                    placeholder="مثال: ۱۰۰"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">
                    مساحت در دسترس (مترمربع) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="land_area_sqm"
                    min={1}
                    required
                    value={formData.land_area_sqm}
                    onChange={handleChange}
                    placeholder="مثال: ۱۵۰۰"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">استان</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">شهر</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-slate-700 mb-1">نوع سازه/محل</label>
                  <select
                    name="roof_type"
                    value={formData.roof_type}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  >
                    <option value="سوله صنعتی">سوله صنعتی</option>
                    <option value="زمین مسطح">زمین مسطح</option>
                    <option value="پشت‌بام بتنی/سقفی">پشت‌بام بتنی</option>
                    <option value="سایبان پارکینگ">سایبان پارکینگ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-base font-bold text-slate-700 mb-1">توضیحات تکمیلی</label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="فاصله تا ترانس برق، کاربری ملک یا توضیحات دیگر..."
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-black text-lg py-3.5 px-6 rounded-2xl shadow-lg shadow-yellow-500/30 transition duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
                    <span>در حال ثبت اطلاعات...</span>
                  </>
                ) : (
                  "ثبت نهایی درخواست احداث نیروگاه"
                )}
              </motion.button>
            </form>
          </motion.div>
        </section>

        <footer className="mt-20 border-t border-slate-200 pt-8 text-center text-slate-400">
          سامانه یکپارچه ثبت‌نام نیروگاه‌های خورشیدی شرکت یلدای سهند
        </footer>
      </div>
    </main>
  );
}
