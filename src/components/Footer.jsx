import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative bg-slate-950 text-slate-400 py-14 border-t border-white/10 overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <div className="text-center lg:text-right">
            <h3 className="text-white text-3xl font-black mb-2">
              مركز المحترف
            </h3>
            <p className="text-slate-400">
              لصيانة الأجهزة المنزلية داخل الزقازيق
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="tel:01022699990"
              className="flex items-center gap-2 px-5 py-3 rounded-xl
              bg-white/5 border border-white/10 backdrop-blur-xl
              hover:bg-white/10 hover:text-white transition"
            >
              <FaPhone/> 01022699990
            </a>

            <a
              href="https://wa.me/201022699990"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 rounded-xl
              bg-green-500 text-white font-bold
              hover:bg-green-600 hover:scale-[1.05] transition"
            >
             <FaWhatsapp/> واتساب
            </a>

            <span className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
              © جميع الحقوق محفوظة
            </span>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Crafted with ⚡ professionalism for Al Mo7taref Service Center
        </div>
      </div>
    </footer>
  );
}