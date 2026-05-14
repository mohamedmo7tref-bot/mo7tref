import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/mo7tref.png"
          alt="hero"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/95 via-slate-950/80 to-slate-950"></div>

      {/* GLOW EFFECT */}
      <div className="absolute -top-40 -right-40 w-125 h-125 bg-green-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT SIDE */}
        <div>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full text-green-400 font-bold mb-8">
            🔧 مركز صيانة احترافي داخل الزقازيق
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
            مركز المحترف
            <span className="block text-green-400 mt-4 text-4xl lg:text-5xl">
              لصيانة الأجهزة المنزلية
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-9 mb-10 max-w-2xl">
            صيانة الثلاجات والغسالات والتكييفات والديب فريزر بأعلى جودة وأسرع
            خدمة داخل الزقازيق مع ضمان على جميع الإصلاحات.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mb-10">
            <a
              href="tel:01022699990"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-green-400
              bg-white/5 border border-white/10 backdrop-blur-xl
              hover:bg-white/10 hover:scale-105 transition"
            >
              <FaPhone className="text-lg" />
              اتصل الآن
            </a>

            <a
              href="https://wa.me/201022699990"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white
              bg-green-500 hover:bg-green-600 hover:scale-105 transition shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              واتساب مباشر
            </a>
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-3 text-slate-300">
            {["خدمة 24 ساعة", "قطع أصلية", "ضمان معتمد"].map((item, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-xl hover:bg-white/10 transition"
              >
                ✔ {item}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE SIDE */}
                  <div className="relative">
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/mo7tref.png"
                alt="maintenance"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-8">
           
                <p className="text-slate-300 leading-7 mt-2 text-center">
                  خبرة في صيانة  الأجهزة المنزلية بأحدث التقنيات.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
