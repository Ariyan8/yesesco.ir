"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState, MouseEvent, type ReactNode } from "react";

import logo1 from "../img/logo1.jpg";
import logo2 from "../img/logo2.jpg";

function SolarIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
      <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="3" />
      <path
        d="M32 6v6M32 28v6M18 20h6M40 20h6M22.5 10.5l4.2 4.2M37.3 25.3l4.2 4.2M41.5 10.5l-4.2 4.2M26.7 25.3l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 40h28l4 12H14l4-12Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 40V28h16v12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AcademyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
      <path
        d="M10 26l22-11 22 11-22 11-22-11Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M16 30v10c0 5 7 9 16 9s16-4 16-9V30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M54 26v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M24 42v8c0 2 3 4 8 4s8-2 8-4v-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-yellow-200/80 bg-yellow-50/75 px-4 py-4 text-center shadow-[0_14px_40px_rgba(234,179,8,0.12)] backdrop-blur-md">
      <div className="text-2xl font-black tracking-tight text-yellow-900 sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-semibold leading-5 text-slate-700 sm:text-sm">{label}</div>
    </div>
  );
}

function LogoSlot({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-yellow-200/80 bg-white/90 shadow-[0_8px_24px_rgba(234,179,8,0.12)]">
      <Image src={src} alt={alt} width={64} height={64} className="h-full w-full object-contain p-1" />
    </div>
  );
}

const ROWS = 4;
const COLS = 7;

function SolarPanelCard({
  rotateX,
  rotateY,
  glareX,
  glareY,
  accent,
}: {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
  accent: "amber" | "emerald";
}) {
  const cellAccent =
    accent === "amber" ? "rgba(251,191,36,0.10)" : "rgba(234,179,8,0.10)";
  const frameGlow =
    accent === "amber"
      ? "from-yellow-300/60 via-yellow-200/40 to-yellow-100/30"
      : "from-yellow-400/60 via-yellow-300/40 to-slate-200/30";

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 180ms ease-out",
      }}
    >
      <div className={`absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br ${frameGlow} blur-2xl opacity-60`} />
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-600 via-slate-500 to-slate-700 p-[10px] shadow-2xl">
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos) => (
          <span key={pos} className={`absolute ${pos} h-3 w-3 rounded-full bg-slate-400 shadow-inner`} />
        ))}
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-950">
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${COLS}, 1fr)`,
              gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            }}
          >
            {Array.from({ length: ROWS * COLS }).map((_, i) => (
              <div
                key={i}
                className="border border-white/[0.07]"
                style={{ background: `linear-gradient(135deg, ${cellAccent}, transparent)` }}
              >
                <span className="block h-full w-full rounded-[2px] bg-gradient-to-br from-white/[0.04] to-transparent" />
              </div>
            ))}
          </div>
          <div
            className="pointer-events-none absolute h-[200%] w-[45%] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] bg-gradient-to-b from-white/25 via-white/10 to-transparent blur-xl"
            style={{ left: `${glareX}%`, top: `${glareY}%`, transition: "left 80ms, top 80ms" }}
          />
          <div className="pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-scan" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  href,
  title,
  description,
  icon,
  accent,
  stats,
  logoSrc,
  logoAlt,
}: {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  accent: "amber" | "emerald";
  stats: Array<{ value: string; label: string }>;
  logoSrc: StaticImageData;
  logoAlt: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRot({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -7,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 7,
    });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => setRot({ x: 0, y: 0 });

  return (
    <Link href={href} className="group block h-full w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full min-h-[540px] overflow-hidden rounded-[2.5rem] cursor-pointer"
      >
        <SolarPanelCard
          rotateX={rot.x}
          rotateY={rot.y}
          glareX={glare.x}
          glareY={glare.y}
          accent={accent}
        />
        <div
          className="relative z-10 flex h-full min-h-[540px] flex-col justify-between p-6 sm:p-8 lg:p-10"
          style={{
            transform: `perspective(900px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(40px)`,
            transition: "transform 180ms ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="flex items-start justify-end">
            <LogoSlot src={logoSrc} alt={logoAlt} />
          </div>
          <div className="mx-auto w-full max-w-2xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-yellow-200 backdrop-blur-sm">
              <span className="flex h-5 w-5 items-center justify-center text-yellow-300 [&>svg]:h-4 [&>svg]:w-4">
                {icon}
              </span>
              {accent === "amber" ? "نیروگاه خورشیدی" : "آموزش تخصصی"}
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              {title}
            </h2>
            <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
            <p className="mx-auto max-w-xl text-sm leading-8 text-white/80 sm:text-base lg:text-lg">
              {description}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/50 bg-yellow-400/20 px-6 py-3 text-sm font-bold text-yellow-100 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]">
                وارد شوید
                <ArrowIcon />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((item) => (
              <StatBox key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main
      dir="rtl"
      style={{ fontFamily: 'B Nazanin, BNazanin, "Times New Roman", serif' }}
      className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-yellow-50/30 text-slate-900 selection:bg-yellow-300/40"
    >
      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>

      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.10),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.06),transparent_34%)]" />
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(234,179,8,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,179,8,0.15)_1px,transparent_1px)] [background-size:76px_76px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">

          {/* ── Tagline Header ── */}
          <div className="w-full pt-8 pb-2 text-center">
            <p
              className="text-lg font-bold text-yellow-800/90 sm:text-xl lg:text-2xl tracking-wide"
              style={{ fontFamily: 'B Nazanin, BNazanin, "Times New Roman", serif' }}
            >
              یلدای سهند، از آموزش تا اجرا، همراه مسیر خورشیدی شماست.
            </p>
          </div>

          <section className="flex flex-1 items-center py-8 md:py-12">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <FeatureCard
                  href="/solar"
                  title="احداث نیروگاه‌ خورشیدی"
                  description="طراحی، مشاوره و اجرای پروژه‌های خورشیدی با تمرکز بر راندمان و آینده‌سازی در انرژی پاک."
                  icon={<SolarIcon />}
                  accent="amber"
                  logoSrc={logo1}
                  logoAlt="لوگو نیروگاه خورشیدی"
                  stats={[
                    { value: "500", label: "نیروگاه نصب‌شده" },
                    { value: "بیش از 10 مگاوات", label: "ظرفیت نصب‌شده" },
                  ]}
                />
                <FeatureCard
                  href="/academy"
                  title="آموزشگاه تخصصی خورشیدی"
                  description="دوره‌های کاربردی برای ورود به بازار کار و یادگیری مهارت‌های اجرایی در صنعت خورشیدی."
                  icon={<AcademyIcon />}
                  accent="emerald"
                  logoSrc={logo2}
                  logoAlt="لوگو آموزشگاه"
                  stats={[
                    { value: "52", label: "دوره برگزارشده" },
                    { value: "1200", label: "دانش‌آموز و کارآموز" },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}