'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const EPOLL_LINK = 'https://app.epoll.ir/e/مشخصات-فردی/MjAyODIw';
const BALE_LINK = 'https://ble.ir/09125630288';

interface CourseData {
  title: string;
  shortDescription: string;
  syllabus: string[];
  instructors: string[];
  isPopular?: boolean;
}

const COURSES: CourseData[] = [
  {
    title: 'نصب سیستم‌های خورشیدی',
    shortDescription:
      'آموزش کارگاهی نصب پنل فتوولتائیک، باتری، مبدل و کنترل‌کننده‌ها، سیم‌بندی و اتصال سامانه به شبکه برق سراسری.',
    syllabus: [
      'نصب صفحات فتوولتاییک',
      'نصب باتری',
      'نصب کنترل‌کننده‌ها و کنترل سامانه‌های فتوولتاییک',
      'نصب مبدل‌ها',
      'سیم‌بندی سامانه‌های فتوولتائیک',
      'کنترل و اتصال سیستم فتوولتائیک به شبکه برق سراسری',
    ],
    instructors: ['آقای دکتر ناصر فتحی', 'آقای مهندس نیما یوسفی'],
  },
  {
    title: 'طراحی و شبیه‌سازی سیستم‌های فتوولتائیک با نرم‌افزار PVsyst',
    shortDescription:
      'آموزش کامل محیط PVsyst، طراحی On-Grid و Off-Grid، مدل‌سازی سه‌بعدی و تحلیل طرح توجیهی نیروگاه خورشیدی.',
    syllabus: [
      'بررسی سیستم‌های انرژی خورشیدی',
      'کار با محیط نرم‌افزار PVsyst',
      'کار با پایگاه داده و افزودن موقعیت جغرافیایی با PVsyst',
      'ایجاد تجهیزات و پارامترهای فنی اجزای سیستم با PVsyst',
      'طراحی بهینه سیستم فتوولتائیک مستقل از شبکه (Grid Off)',
      'طراحی بهینه نیروگاه فتوولتائیک متصل به شبکه (Grid On)',
      'شبیه‌سازی و مدل‌سازی سه‌بعدی سیستم‌های فتوولتائیک',
      'تحلیل و بررسی طرح توجیهی',
    ],
    instructors: [
      'آقای دکتر ناصر فتحی',
      'خانم دکتر نازیلا ضرابی‌نیا',
      'آقای مهندس آریان صدرائی',
    ],
    isPopular: true,
  },
  {
    title: 'طراحی سیستم‌های خورشیدی با نرم‌افزار PVsol',
    shortDescription:
      'آشنایی با PVsol، بررسی فنی پروژه، داده‌های آب‌وهوایی، مدل‌سازی سه‌بعدی و تعیین نوع کابل سیستم فتوولتائیک.',
    syllabus: [
      'بررسی سیستم‌های خورشیدی',
      'کار با محیط نرم‌افزار PVsol',
      'بررسی مشخصات فنی پروژه',
      'کار با منوی اطلاعات آب و هوایی',
      'ایجاد تجهیزات و پارامترهای فنی سیستم با PVsol',
      'شبیه‌سازی و مدل‌سازی سه‌بعدی سیستم فتوولتائیک',
      'تعیین نوع کابل',
    ],
    instructors: [
      'آقای دکتر ناصر فتحی',
      'خانم دکتر نازیلا ضرابی‌نیا',
      'آقای مهندس آریان صدرائی',
    ],
  },
  {
    title: 'ارزیابی و تحلیل مالی نیروگاه خورشیدی فتوولتائیک با نرم‌افزار RETScreen',
    shortDescription:
      'امکان‌سنجی پروژه، مدل‌سازی انرژی، تحلیل هزینه و مالی، ریسک و حساسیت و تهیه گزارش نهایی در RETScreen.',
    syllabus: [
      'بررسی سیستم‌های خورشیدی',
      'کار در محیط نرم‌افزار Expert RETScreen و ایجاد پروژه جدید',
      'مکان‌یابی جغرافیایی محل احداث نیروگاه',
      'امکان‌سنجی اجرای پروژه',
      'مدل‌سازی نوع انرژی مصرفی',
      'تجزیه و تحلیل هزینه پروژه',
      'بررسی اثرات زیست‌محیطی پروژه',
      'تجزیه و تحلیل مالی پروژه',
      'آنالیز ریسک و حساسیت پروژه',
      'تجزیه و تحلیل فنی پروژه',
      'تجزیه و تحلیل نموداری داده‌ها',
      'تهیه گزارش نهایی',
    ],
    instructors: [
      'آقای دکتر ناصر فتحی',
      'خانم دکتر نازیلا ضرابی‌نیا',
      'آقای مهندس آریان صدرائی',
    ],
  },
  {
    title: 'ارزیاب سیستم‌های انرژی خورشیدی خانگی',
    shortDescription:
      'ارزیابی نیاز مشتری، پتانسیل‌سنجی تابش، طراحی و انتخاب اجزا، تحلیل اقتصادی و تدوین دستورالعمل نصب و بهره‌برداری.',
    syllabus: [
      'ارزیابی نیاز مشتری به سیستم‌های خورشیدی',
      'پتانسیل‌سنجی میزان انرژی تابشی خورشید در سایت مشتری برای انواع سیستم‌های خورشیدی (تولید برق و حرارت)',
      'ارزیابی فنی میزان انرژی استحصالی انواع سیستم‌های خورشیدی در سایت مشتری',
      'انجام محاسبات طراحی و انتخاب اجزاء سیستم‌های خورشیدی بر مبنای آن',
      'تجزیه و تحلیل اقتصادی سیستم خورشیدی مورد نظر',
      'تدوین دستورالعمل‌های نصب، راه‌اندازی و بهره‌برداری',
    ],
    instructors: [
      'آقای دکتر ناصر فتحی',
      'خانم دکتر نازیلا ضرابی‌نیا',
      'آقای مهندس آریان صدرائی',
    ],
  },
  {
    title: 'طراح سیستم‌های فتوولتائیک',
    shortDescription:
      'محاسبه بار مصرفی، انتخاب باتری و شارژکنترلر، چینش ماژول و اینورتر و توپولوژی نصب در سایت.',
    syllabus: [
      'برآورد میزان بار مصرفی (مختص سیستم‌های مستقل از شبکه)',
      'انتخاب تعداد، نوع و آرایش باتری‌ها و انتخاب شارژکنترلر (مختص سیستم‌های مستقل از شبکه)',
      'انتخاب نوع، تعداد، آرایش و چینش ماژول‌ها',
      'انتخاب اینورتر',
      'انتخاب توپولوژی چینش ماژول‌ها در سایت و درنظر گرفتن ملاحظات نصب',
    ],
    instructors: [
      'آقای دکتر ناصر فتحی',
      'خانم دکتر نازیلا ضرابی‌نیا',
      'آقای مهندس آریان صدرائی',
    ],
  },
  {
    title: 'تکنسین سیستم‌های خورشیدی و فتوولتائیک',
    shortDescription:
      'نصب و راه‌اندازی فتوولتائیک، سیستم‌بندی و اتصال به شبکه، آبگرمکن و تاسیسات خورشیدی گرمایشی و سرمایشی.',
    syllabus: [
      'نصب صفحات فتوولتاییک',
      'نصب باتری',
      'نصب کنترل‌کننده‌ها و کنترل سامانه‌های فتوولتائیک',
      'نصب مبدل‌ها',
      'سیستم‌بندی سامانه‌های فتوولتائیک، راه‌اندازی و رفع عیوب مربوطه',
      'کنترل و اتصال سیستم فتوولتائیک به شبکه برق سراسری',
      'طراحی و انجام محاسبات سیستم‌های آبگرمکن خورشیدی',
      'لوله‌کشی تاسیسات خورشیدی',
      'نصب، راه‌اندازی و نگهداری سیستم آبگرمکن خورشیدی',
      'آماده‌سازی نصب و نگهداری تاسیسات خورشیدی (سرمایشی)',
      'تشخیص و تصحیح خرابی‌های تاسیسات خورشیدی',
      'طراحی تاسیسات خورشیدی',
    ],
    instructors: ['آقای دکتر ناصر فتحی', 'آقای مهندس نیما یوسفی'],
  },
  {
    title: 'کاربر بهره‌بردار و نگهدار نیروگاه فتوولتائیک',
    shortDescription:
      'تحلیل داده نیروگاه، بازرسی و سرویس دوره‌ای، مانیتورینگ، حفاظت صاعقه و ارت، و نظارت بر اجرا.',
    syllabus: [
      'تجزیه و تحلیل اطلاعات دریافتی از نیروگاه',
      'انجام بازرسی‌ها و سرویس‌های دوره‌ای پنل‌ها، اینورترها و تجهیزات اندازه‌گیری',
      'نظارت بر اجرای سامانه حفاظت از سقوط',
      'نصب سیستم مانیتورینگ، دیسپاچینگ و راه‌اندازی اتصال به شبکه',
      'پیاده‌سازی و نگهداری سیستم‌های اتصال به زمین و صاعقه‌گیر',
      'پیاده‌سازی و نگهداری سیم‌کشی سیستم‌های فتوولتائیک خانگی و صنعتی',
      'نظارت بر اجرا در نیروگاه',
    ],
    instructors: ['آقای دکتر ناصر فتحی', 'آقای مهندس نیما یوسفی'],
  },
  {
    title: 'طراحی مزرعه بادی',
    shortDescription:
      'جمع‌آوری و تحلیل داده باد و مزرعه، سفارش توربین، چینش توربین‌ها و مستندسازی فنی.',
    syllabus: [
      'گردآوری اطلاعات مزرعه توربین بادی به همراه آنالیز آن',
      'گردآوری و آنالیز دیتاهای بادسنجی یک‌ساله',
      'سفارش توربین برای مونتاژ در کارخانه',
      'طراحی چینش توربین‌های بادی در مزرعه، تهیه نقشه‌ها و یا دیگر اسناد تصویری برای مزارع بادی',
      'انجام تحلیل‌های فنی و مستندسازی نتایج',
    ],
    instructors: ['آقای مهندس آریان صدرائی'],
  },
  {
    title: 'نصاب پنل سیستم‌های فتوولتائیک خانگی و صنعتی',
    shortDescription:
      'نصب استراکچر، جانمایی پنل‌ها، سیستم ارت و صاعقه‌گیر و اجرای سیم‌کشی فتوولتائیک.',
    syllabus: [
      'نصب استراکچر',
      'جانمایی پنل‌ها',
      'پیاده‌سازی و نصب سیستم اتصال به زمین و حفاظت در برابر صاعقه',
      'اجرا سیم‌کشی سیستم‌های فتوولتائیک',
    ],
    instructors: ['آقای دکتر ناصر فتحی', 'آقای مهندس نیما یوسفی'],
  },
  {
    title: 'نصاب تجهیزات الکترونیکی سیستم‌های فوتوولتائیک خانگی و صنعتی',
    shortDescription:
      'نصب اینورتر، باتری و شارژکنترلر، تابلو برق، سنسورها و سیستم مانیتورینگ فتوولتائیک.',
    syllabus: [
      'پیاده‌سازی و نصب سیستم اتصال به زمین و حفاظت در برابر صاعقه',
      'اجرای سیم‌کشی سیستم‌های فتوولتائیک',
      'نصب و راه‌اندازی اینورتر',
      'نصب و اتصال باتری‌ها و شارژکنترلر',
      'جانمایی و نصب تابلو برق',
      'نصب سنسورها و کنترلر سیستم مانیتورینگ',
    ],
    instructors: ['آقای دکتر ناصر فتحی', 'آقای مهندس نیما یوسفی'],
  },
];

interface CourseCardProps {
  course: CourseData;
  onShowDetails: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onShowDetails }) => {
  const { title, shortDescription, isPopular } = course;

  return (
    <article
      className={`relative flex min-h-[320px] flex-col justify-between rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-8 ${
        isPopular
          ? 'border-2 border-yellow-400 shadow-xl ring-4 ring-yellow-400/10'
          : 'border border-gray-100 shadow-md hover:border-yellow-200'
      }`}
    >
      {isPopular && (
        <span className="absolute -top-4 right-8 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-1 text-xs font-extrabold text-slate-950 shadow-md">
          پرتقاضاترین دوره
        </span>
      )}

      <div>
        <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 md:text-2xl">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600 md:text-base">{shortDescription}</p>
      </div>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={onShowDetails}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-3.5 font-bold text-yellow-800 transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-100 active:scale-[0.98]"
        >
          اطلاعات بیشتر
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <a
          href={EPOLL_LINK}
          className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 font-bold transition-all duration-300 ${
            isPopular
              ? 'bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300'
              : 'bg-slate-900 text-white hover:bg-yellow-400 hover:text-slate-950'
          }`}
        >
          مشاهده جزئیات و ثبت‌نام
        </a>
      </div>
    </article>
  );
};

interface CourseDetailsModalProps {
  course: CourseData | null;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ course, onClose }) => {
  useEffect(() => {
    if (!course) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-gray-100 bg-white/95 px-6 py-5 backdrop-blur-md md:px-8">
          <div>
            <span className="mb-2 inline-block rounded-xl border border-yellow-200/70 bg-yellow-50 px-3 py-1 text-xs font-bold text-yellow-700">
              اطلاعات کامل دوره
            </span>
            <h3 id="course-modal-title" className="text-xl font-extrabold leading-relaxed text-slate-900 md:text-2xl">
              {course.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن اطلاعات دوره"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-slate-600 transition-all hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-7 md:px-8 md:py-8">
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">{course.shortDescription}</p>

          <section>
            <h4 className="mb-5 text-base font-extrabold text-slate-900 md:text-lg">سیلابس دوره</h4>

            <ul className="space-y-3">
              {course.syllabus.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-slate-50/70 px-4 py-3 text-sm leading-relaxed text-gray-700 transition-colors hover:border-yellow-200 hover:bg-yellow-50/50 md:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-700">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-2xl border border-yellow-200/70 bg-yellow-50 px-5 py-5">
            <h4 className="mb-3 text-base font-extrabold text-slate-900">نام مدرسین</h4>
            <ul className="space-y-2 text-sm text-gray-700 md:text-base">
              {course.instructors.map((instructor) => (
                <li key={instructor} className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-500" />
                  {instructor}
                </li>
              ))}
            </ul>
          </section>

          <a
            href={EPOLL_LINK}
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:bg-yellow-300 hover:shadow-yellow-400/40"
          >
            ثبت‌نام در دوره
          </a>
        </div>
      </div>
    </div>
  );
};

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => (
  <div className="space-y-4">
    {items.map((item, idx) => (
      <details
        key={idx}
        className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all open:shadow-md"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <span className="text-sm font-bold text-slate-900 md:text-base">{item.q}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-200/60 bg-yellow-50 text-yellow-700 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">{item.a}</div>
      </details>
    ))}
  </div>
);

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);

  const faqs: FAQItem[] = [
    {
      q: 'این دوره‌ها برای چه کسانی مناسب است؟',
      a: (
        <p>
          برای دانشجویان و فارغ‌التحصیلان برق/انرژی، تکنسین‌های تاسیسات، مجریان نیروگاه، و افرادی که قصد
          ورود سریع و حرفه‌ای به بازار کار انرژی خورشیدی را دارند. اگر از صفر شروع می‌کنید، مسیر پیشنهادی
          ما: ابتدا «نصب و اجرا» و سپس «PVsyst و طراحی نیروگاه» است.
        </p>
      ),
    },
    {
      q: 'پیش‌نیاز دوره PVsyst چیست؟',
      a: (
        <ul className="list-disc space-y-2 pr-5">
          <li>آشنایی پایه با برق (AC/DC)، توان و مفاهیم انرژی</li>
          <li>کار با کامپیوتر و فایل‌ها (در حد عمومی)</li>
          <li>داشتن لپ‌تاپ برای تمرین توصیه می‌شود.</li>
        </ul>
      ),
    },
    {
      q: 'آیا دوره‌ها پروژه‌محور هستند؟',
      a: (
        <p>
          بله. در هر دوره تمرین‌های مرحله‌به‌مرحله، کیس‌های واقعی نیروگاهی و خروجی‌های قابل ارائه
          (گزارش، لیست تجهیزات، استرینگ‌بندی، فایل‌های شبیه‌سازی) تولید می‌کنید.
        </p>
      ),
    },
    {
      q: 'پس از پایان دوره چه خروجی‌هایی دریافت می‌کنم؟',
      a: (
        <ul className="list-disc space-y-2 pr-5">
          <li>جزوه و فایل‌های تمرینی و قالب‌های گزارش‌نویسی</li>
          <li>نمونه پروژه‌های شبیه‌سازی‌شده و چک‌لیست‌های اجرایی</li>
          <li>گواهی پایان دوره (و در صورت انتخاب مسیر فنی و حرفه‌ای آمادگی آزمون)</li>
        </ul>
      ),
    },
    {
      q: 'دوره نصب و اجرا دقیقاً چه چیزهایی را پوشش می‌دهد؟',
      a: (
        <ul className="list-disc space-y-2 pr-5">
          <li>اصول ایمنی، ابزارشناسی و استانداردهای پایه</li>
          <li>سیم‌کشی DC/AC، طراحی تابلو، حفاظت‌ها، ارت و صاعقه‌گیر</li>
          <li>راه‌اندازی، تست‌ها و تحویل (Commissioning) و خطایابی رایج</li>
          <li>آشنایی عملی با تجهیزات رایج بازار و نکات اجرایی کارگاهی</li>
        </ul>
      ),
    },
    {
      q: 'زمان‌بندی و نحوه برگزاری کلاس‌ها چگونه است؟',
      a: (
        <p>
          کلاس‌ها به‌صورت برنامه‌ریزی‌شده (حضوری/نیمه‌حضوری/آنلاین بسته به دوره) برگزار می‌شود.
          زمان‌بندی هر ترم قبل از ثبت‌نام اعلام می‌شود و برای شاغلین نیز گزینه‌های آخر هفته در نظر گرفته
          می‌شود.
        </p>
      ),
    },
    {
      q: 'آیا پشتیبانی بعد از دوره دارید؟',
      a: <p>بله. پشتیبانی شامل رفع اشکال تمرین‌ها، بازبینی پروژه‌های اولیه هنرجو و راهنمایی مسیر ورود به بازار کار است.</p>,
    },
    {
      q: 'برای شرکت در دوره‌ها چه تجهیزاتی لازم است؟',
      a: (
        <ul className="list-disc space-y-2 pr-5">
          <li>برای PVsyst: لپ‌تاپ ویندوزی با حداقل ۸GB RAM (پیشنهاد: ۱۶GB).</li>
          <li>برای نصب و اجرا: در کارگاه ابزارهای اصلی فراهم است؛ داشتن دستکش ایمنی و کفش کار توصیه می‌شود.</li>
        </ul>
      ),
    },
    {
      q: 'اگر هدفم ورود سریع به بازار کار باشد، چه مسیری پیشنهاد می‌دهید؟',
      a: <p>مسیر سریع بازار کار معمولاً از «نصب و اجرا» شروع می‌شود و با «طراحی و PVsyst» تکمیل می‌گردد.</p>,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-zinc-900 to-yellow-950/80 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="container relative mx-auto px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-300 backdrop-blur-md md:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-300" />
            مرکز تخصصی آموزش‌های تجدیدپذیر و نیروگاهی
          </span>

          <h1 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            آموزشگاه تخصصی <span className="text-yellow-300">یلدای سهند</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl">
            تربیت مهندسان و تکنسین‌های ارشد انرژی خورشیدی؛ انتقال تجربه واقعی پروژه‌های صنعتی، شبیه‌سازی تخصصی و
            آماده‌سازی کامل برای ورود به بازار کار و مدرک فنی و حرفه ای.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#courses"
              className="w-full rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-yellow-400/25 transition-all hover:bg-yellow-300 hover:shadow-yellow-400/40 sm:w-auto"
            >
              مشاهده دوره‌های فعال
            </Link>

            <Link
              href="#consultation"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
            >
              دریافت مشاوره رایگان
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto -mt-10 px-6">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:grid-cols-4 md:p-8">
          {[
            { label: 'دانش‌آموخته متخصص', value: '+۱۲۰۰' },
            { label: 'پروژه‌های شبیه‌سازی‌شده', value: '+۱۵۰' },
            { label: 'رضایت هنرجویان', value: '۹۸٪' },
            { label: 'ساعت آموزش کارگاهی', value: '+۲,۰۰۰' },
          ].map((stat, idx) => (
            <div key={idx} className="p-2 text-center">
              <div className="text-2xl font-extrabold text-yellow-500 md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-medium text-gray-500 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="container mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">دوره‌های آموزشی خورشیدی</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            بسته‌های آموزشی آموزشگاه آزاد فنی و حرفه‌ای یلدای سهند
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard
              key={course.title}
              course={course}
              onShowDetails={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-yellow-100 bg-gradient-to-b from-yellow-50/40 via-white to-white py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">چرا آموزشگاه یلدای سهند؟</h2>
            <p className="mt-3 text-gray-600">اعطای مدرک از سازمان فنی و حرفه ای بعد از قبولی آزمون تئوری و عملی</p>
            <p className="mt-3 text-gray-600">مدرک عضویت در انجمن انرژی خورشیدی ایران</p>
            <p className="mt-3 text-gray-600">شرکت در دوره کارآموزی با پرداخت حقوق کارآموزی</p>
            <p className="mt-3 text-gray-600">جذب نفرات برتر در آزمون و دوره کارآموزی برای همکاری</p>




          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'مدرک معتبر فنی و حرفه ای',
                desc: 'امکان شرکت در آزمون‌های سازمان فنی و حرفه‌ای و دریافت مدرک بین‌المللی جهت رزومه و مهاجرت کاری.',
                icon: '📜',
              },
              {
                title: 'تجهیزات مدرن آموزشی',
                desc: 'تمرین بر روی تجهیزات واقعی، استراکچرهای صنعتی و اینورترهای هیبرید و متصل به شبکه Growatt.',
                icon: '⚡',
              },
              {
                title: 'پشتیبانی پروژه‌ای',
                desc: 'همراهی اساتید در اولین پروژه‌های اجرایی یا محاسباتی دانش‌آموختگان پس از اتمام دوره.',
                icon: '🤝',
              },
            ].map((adv, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{adv.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-slate-800">{adv.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/70 py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">سوالات متداول</h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              پاسخ سریع به پرتکرارترین سوالات ثبت‌نام، مسیر یادگیری و خروجی دوره‌ها.
            </p>
          </div>

          <FAQ items={faqs} />
        </div>
      </section>

      <section
        id="consultation"
        className="bg-gradient-to-b from-slate-950 via-zinc-900 to-yellow-950/80 py-20 text-white"
      >
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-300 backdrop-blur-md md:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-300" />
            مشاوره رایگان و پیش‌ثبت‌نام
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">آماده شروع مسیر خورشیدی هستید؟</h2>

          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            برای دریافت مشاوره رایگان و پیش‌ثبت‌نام در دوره‌های آموزشی، فرم زیر را تکمیل کنید یا مستقیم با
            کارشناسان ما در ارتباط باشید.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={EPOLL_LINK}
              className="w-full rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-yellow-400/25 transition-all hover:bg-yellow-300 hover:shadow-yellow-400/40 sm:w-auto"
            >
              تکمیل فرم مشاوره رایگان
            </a>

            <a
              href={BALE_LINK}
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
            >
              تماس مستقیم با کارشناسان
            </a>
          </div>
        </div>
      </section>

      <CourseDetailsModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </main>
  );
}
