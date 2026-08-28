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

export default function SolarPage() {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

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
        <section className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          {/* ستون اول: توضیحات و محتوا */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex rounded-full bg-yellow-400/15 px-4 py-1.5 text-sm font-bold text-yellow-600 border border-yellow-400/40">
                سامانه ثبت درخواست نیروگاه خورشیدی
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-800 lg:text-5xl">
                شرکت یلدای سهند <br />
                <span className="text-yellow-500">
                  پیشرو در انرژی‌های تجدیدپذیر
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                جهت احداث نیروگاه خورشیدی و بهره‌مندی از مزایای سرمایه‌گذاری در
                این حوزه، لطفاً فرم روبه‌رو را تکمیل نمایید. کارشناسان ما پس از
                بررسی اولیه جهت هماهنگی‌های بعدی با شما تماس خواهند گرفت.
              </p>
            </div>

            {/* بخش آمار خلاصه */}
            <div className="grid grid-cols-3 gap-4">
              <StatCard title="پروژه‌های اجرا شده" value="+۵۰۰" />
              <StatCard title="ظرفیت (کیلووات)" value="۱۰۰۰۰" />
              <StatCard title="رضایت مشتریان" value="۱۰۰٪" />
            </div>

            {/* لیست ویژگی‌ها */}
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

          {/* ستون دوم: فرم Epoll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-2xl shadow-yellow-300/20 backdrop-blur-sm"
          >
            {isIframeLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
                <p className="mt-4 text-lg font-bold text-slate-400">
                  در حال بارگذاری فرم ثبت‌نام...
                </p>
              </div>
            )}

            <iframe
              src="https://app.epoll.ir/e/مشخصات-فردی/MjAzNDU2?Referral=iframe"
              width="100%"
              height="650px"
              title="فرم ثبت درخواست"
              onLoad={() => setIsIframeLoading(false)}
              className="border-0"
            />
          </motion.div>
        </section>

        <footer className="mt-20 border-t border-slate-200 pt-8 text-center text-slate-400"></footer>
      </div>
    </main>
  );
}
