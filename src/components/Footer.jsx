import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Footer() {
  const baseBtn =
    "group relative flex items-center justify-center gap-3 w-44 h-14 rounded-2xl " +
    "backdrop-blur-xl border border-white/10 transition-all duration-300 " +
    "overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]";

  const shine =
    "before:absolute before:inset-0 before:translate-x-[-120%] " +
    "hover:before:translate-x-[120%] before:transition before:duration-700 " +
    "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

  const icon =
    "w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 text-white " +
    "transition duration-300 group-hover:scale-125 group-hover:rotate-6";

  const label = "font-bold text-sm text-white group-hover:tracking-wider transition";

  return (
    <footer
      dir="rtl"
      className="relative bg-slate-950 text-slate-400 py-16 border-t border-white/10 overflow-hidden"
    >
    
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <div className="text-center lg:text-right">
            <h3 className="text-white text-4xl font-black mb-2">
              مركز المحترف
            </h3>
            <p className="text-slate-400">
              لصيانة الأجهزة المنزلية داخل الزقازيق
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* PHONE */}
            <a href="tel:01022699990" className={`${baseBtn} ${shine} bg-white/5 hover:bg-white/10`}>
              <span className={icon}><FaPhone className="text-green-500" /></span>
              <span className={label}>Call now</span>
            </a>

            {/* WHATSAPP */}
            <a href="https://wa.me/201022699990" className={`${baseBtn} ${shine} bg-green-500 hover:bg-green-600 text-white`}>
              <span className={icon}><FaWhatsapp /></span>
              <span className={label}>Whats app</span>
            </a>

            {/* FACEBOOK */}
            <a href="https://facebook.com/mo7tref.2022" className={`${baseBtn} ${shine} bg-blue-600 hover:bg-blue-700 text-white`}>
              <span className={icon}><FaFacebookF /></span>
              <span className={label}>Facebook</span>
            </a>

            {/* MESSENGER */}
            <a href="https://m.me/mo7tref.2022" className={`${baseBtn} ${shine} bg-sky-500 hover:bg-sky-600 text-white`}>
              <span className={icon}><FaFacebookMessenger /></span>
              <span className={label}>Messenger</span>
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 text-center text-xs text-slate-500 tracking-wide">
          Crafted with ⚡ premium motion UI • Al Mo7taref
        </div>
      </div>
    </footer>
  );
}