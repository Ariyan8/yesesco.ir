import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import logo1 from "../img/logo1.jpg";

export const metadata: Metadata = {
  title: "22899965",
  description: "طراحی، اجرا و آموزش در حوزه انرژی خورشیدی و مهارت‌های تخصصی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-yellow-50 text-slate-800">
        <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo1}
                alt="لوگو یلدای سهند"
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-emerald-100"
                priority
              />
              <div className="hidden sm:block leading-tight">
                <div className="text-base font-extrabold text-emerald-800">
                  Yesesco
                </div>
                <div className="text-xs font-medium text-slate-500">
                  یلدای سهند
                </div>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold md:gap-3 md:text-lg">
              <Link
                href="/"
                className="rounded-full px-4 py-2.5 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                صفحه اصلی
              </Link>
              <Link
                href="/solar"
                className="rounded-full px-4 py-2.5 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                متقاضیان نیروگاه خورشیدی
              </Link>
              <Link
                href="/academy"
                className="rounded-full px-4 py-2.5 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                آموزشگاه یلدای سهند
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-emerald-100 bg-white/95">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-bold text-emerald-800">
                  Yesesco
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  پیمانکار تخصصی احداث نیروگاه‌های خورشیدی و ارائه‌دهنده خدمات
                  آموزشی و مهارتی در حوزه انرژی‌های تجدیدپذیر.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold text-emerald-800">
                  لینک‌های سریع
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <Link href="/" className="transition hover:text-emerald-700">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solar"
                      className="transition hover:text-emerald-700"
                    >
                      متقاضیان نیروگاه خورشیدی
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy"
                      className="transition hover:text-emerald-700"
                    >
                      آموزشگاه فنی و حرفه‌ای
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold text-emerald-800">
                  تماس با ما
                </h3>
                <ul className="space-y-2 text-sm leading-7 text-slate-600">
                  <li>البرز، کرج، عظیمیه، بلوار کاج، پلاک 365، واحد 3</li>
                  <li>تلفن: 09356109395</li>
                  <li>ایمیل: yesesco13@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
