import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaFacebookMessenger,
} from "react-icons/fa";

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

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            مركز المحترف
            <span className="block text-green-400 mt-4 text-4xl lg:text-5xl">
              لصيانة الأجهزة المنزلية
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-9 mb-8 max-w-2xl">
            صيانة الثلاجات والغسالات والتكييفات والديب فريزر بأعلى جودة وأسرع
            خدمة داخل الزقازيق مع ضمان على جميع الإصلاحات.
          </p>



{/* BUTTONS GRID - FOOTER STYLE */}
<div className="grid sm:grid-cols-2 gap-3 mb-8">

  {/* CALL */}
  <a
    href="tel:01022699990"
    className="group flex items-center gap-3
    px-4 py-3 rounded-xl
    bg-white/5 border border-white/10
    backdrop-blur-xl
    hover:bg-white/10 hover:-translate-y-0.5
    transition duration-300"
  >
    <div
      className="w-9 h-9 rounded-lg
      bg-green-500/10 border border-green-500/20
      flex items-center justify-center
      text-green-400 text-sm"
    >
      <FaPhone />
    </div>

    <div>
      <p className="text-slate-500 text-xs">
        اتصال مباشر
      </p>

      <h3 className="text-white font-semibold text-base">
        Call now
      </h3>
    </div>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/201022699990"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3
    px-4 py-3 rounded-xl
    bg-white/5 border border-white/10
    backdrop-blur-xl
    hover:bg-green-500/10
    hover:-translate-y-0.5
    transition duration-300"
  >
    <div
      className="w-9 h-9 rounded-lg
      bg-green-500/10 border border-green-500/20
      flex items-center justify-center
      text-green-400 text-sm"
    >
      <FaWhatsapp />
    </div>

    <div>
      <p className="text-slate-500 text-xs">
        تواصل سريع
      </p>

      <h3 className="text-white font-semibold text-base">
        WhatsApp
      </h3>
    </div>
  </a>

  {/* FACEBOOK */}
  <a
    href="https://facebook.com/mo7tref.2022"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3
    px-4 py-3 rounded-xl
    bg-white/5 border border-white/10
    backdrop-blur-xl
    hover:bg-blue-500/10
    hover:-translate-y-0.5
    transition duration-300"
  >
    <div
      className="w-9 h-9 rounded-lg
      bg-blue-500/10 border border-blue-500/20
      flex items-center justify-center
      text-blue-400 text-sm"
    >
      <FaFacebookF />
    </div>

    <div>
      <p className="text-slate-500 text-xs">
        صفحتنا
      </p>

      <h3 className="text-white font-semibold text-base">
        Facebook
      </h3>
    </div>
  </a>

  {/* MESSENGER */}
  <a
    href="https://m.me/mo7tref.2022"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3
    px-4 py-3 rounded-xl
    bg-white/5 border border-white/10
    backdrop-blur-xl
    hover:bg-sky-500/10
    hover:-translate-y-0.5
    transition duration-300"
  >
    <div
      className="w-9 h-9 rounded-lg
      bg-sky-500/10 border border-sky-500/20
      flex items-center justify-center
      text-sky-400 text-sm"
    >
      <FaFacebookMessenger />
    </div>

    <div>
      <p className="text-slate-500 text-xs">
        راسلنا
      </p>

      <h3 className="text-white font-semibold text-base">
        Messenger
      </h3>
    </div>
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
