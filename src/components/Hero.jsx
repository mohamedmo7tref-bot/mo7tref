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
      className="
      relative min-h-screen flex items-center overflow-hidden
      bg-white dark:bg-slate-950
      transition-colors duration-300
    "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-20 dark:opacity-45 transition-opacity duration-500">
        <img
          src="/mo7tref.png"
          alt="hero"
          className="w-full h-full object-cover scale-105 contrast-110 brightness-105"
        />
      </div>

      {/* OVERLAY */}
      <div
        className="
        absolute inset-0
        bg-linear-to-b
        from-white/90 via-white/80 to-white
        dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950
      "
      ></div>






      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT SIDE */}
        <div>
          {/* BADGE */}
          <div
            className="
            inline-flex items-center gap-3
            px-5 py-3 rounded-full
            mb-8 font-bold
            backdrop-blur-xl border
            bg-black/3 border-black/10 text-green-600
            dark:bg-white/5 dark:border-white/10 dark:text-green-400
          "
          >
            🔧 مركز صيانة احترافي داخل الزقازيق
          </div>

          {/* TITLE */}
          <h1
            className="
            text-5xl lg:text-7xl font-black
            leading-tight mb-6
            text-slate-900 dark:text-white
          "
          >
            مركز المحترف

            <span
              className="
              block mt-4
              text-4xl lg:text-5xl
              text-green-600 dark:text-green-400
            "
            >
              لصيانة الأجهزة المنزلية
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            text-lg leading-9 mb-8 max-w-2xl
            text-slate-600 dark:text-slate-300
          "
          >
            صيانة الثلاجات والغسالات والتكييفات والديب فريزر بأعلى
            جودة وأسرع خدمة داخل الزقازيق مع ضمان على جميع الإصلاحات.
          </p>

          {/* BUTTONS */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {/* CALL */}
            <a
              href="tel:01022699990"
              className="
              group flex items-center gap-3
              px-4 py-3 rounded-2xl
              backdrop-blur-xl border
              transition duration-300
              hover:-translate-y-1

              bg-black/3 border-black/10
              hover:bg-black/5

              dark:bg-white/5 dark:border-white/10
              dark:hover:bg-white/10
            "
            >
              <div
                className="
                w-10 h-10 rounded-xl
                flex items-center justify-center
                text-green-500
                bg-green-500/10 border border-green-500/20
              "
              >
                <FaPhone />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  اتصال مباشر
                </p>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Call Now
                </h3>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/201022699990"
              target="_blank"
              rel="noreferrer"
              className="
              group flex items-center gap-3
              px-4 py-3 rounded-2xl
              backdrop-blur-xl border
              transition duration-300
              hover:-translate-y-1

              bg-black/3 border-black/10
              hover:bg-green-500/5

              dark:bg-white/5 dark:border-white/10
              dark:hover:bg-green-500/10
            "
            >
              <div
                className="
                w-10 h-10 rounded-xl
                flex items-center justify-center
                text-green-500
                bg-green-500/10 border border-green-500/20
              "
              >
                <FaWhatsapp />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  تواصل سريع
                </p>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  WhatsApp
                </h3>
              </div>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com/mo7tref.2022"
              target="_blank"
              rel="noreferrer"
              className="
              group flex items-center gap-3
              px-4 py-3 rounded-2xl
              backdrop-blur-xl border
              transition duration-300
              hover:-translate-y-1

              bg-black/3 border-black/10
              hover:bg-blue-500/5

              dark:bg-white/5 dark:border-white/10
              dark:hover:bg-blue-500/10
            "
            >
              <div
                className="
                w-10 h-10 rounded-xl
                flex items-center justify-center
                text-blue-500
                bg-blue-500/10 border border-blue-500/20
              "
              >
                <FaFacebookF />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  صفحتنا
                </p>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Facebook
                </h3>
              </div>
            </a>

            {/* MESSENGER */}
            <a
              href="https://m.me/mo7tref.2022"
              target="_blank"
              rel="noreferrer"
              className="
              group flex items-center gap-3
              px-4 py-3 rounded-2xl
              backdrop-blur-xl border
              transition duration-300
              hover:-translate-y-1

              bg-black/3 border-black/10
              hover:bg-sky-500/5

              dark:bg-white/5 dark:border-white/10
              dark:hover:bg-sky-500/10
            "
            >
              <div
                className="
                w-10 h-10 rounded-xl
                flex items-center justify-center
                text-sky-500
                bg-sky-500/10 border border-sky-500/20
              "
              >
                <FaFacebookMessenger />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  راسلنا
                </p>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Messenger
                </h3>
              </div>
            </a>
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-3">
            {["خدمة 24 ساعة", "قطع أصلية", "ضمان معتمد"].map(
              (item, i) => (
                <span
                  key={i}
                  className="
                  px-5 py-3 rounded-xl
                  backdrop-blur-xl border
                  transition

                  bg-black/3
                  border-black/10
                  text-slate-700
                  hover:bg-black/5

                  dark:bg-white/5
                  dark:border-white/10
                  dark:text-slate-300
                  dark:hover:bg-white/10
                "
                >
                  ✔ {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          {/* GLOW */}
          <div
            className="
            absolute -top-8 -right-8
            w-72 h-72 rounded-full blur-3xl
            bg-green-500/20
          "
          ></div>

          {/* CARD */}
          <div
            className="
            relative overflow-hidden rounded-[40px]
            border shadow-2xl backdrop-blur-xl

            bg-black/3
            border-black/10

            dark:bg-white/5
            dark:border-white/10
          "
          >
            <img
              src="/mo7tref.png"
              alt="maintenance"
              className="w-full h-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
              absolute bottom-0 left-0 right-0
              bg-linear-to-t
              from-black/90 to-transparent
              p-8
            "
            >
              <p className="hidden md:block text-slate-200 leading-7 text-center">
                خبرة في صيانة الأجهزة المنزلية بأحدث التقنيات
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}