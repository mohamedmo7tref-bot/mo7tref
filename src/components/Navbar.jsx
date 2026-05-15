import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ✅ theme stable + localStorage + system fallback
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
  });

  // apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "services", "about", "gallery", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative px-2 py-1 transition font-medium
     text-slate-900 dark:text-slate-200
     hover:text-green-400
     after:absolute after:right-0 after:-bottom-2 after:h-[2px]
     after:bg-green-400 after:transition-all after:duration-300
     ${
       active === id
         ? "text-green-400 after:w-full"
         : "after:w-0 hover:after:w-full"
     }`;

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-700 ease-in-out
      ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-slate-200/60 dark:border-white/10 shadow-xl"
          : "bg-white/60 dark:bg-slate-950/50 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group-hover:scale-105 transition">
            <img src="/logo3.png" className="w-full h-full object-cover" />
          </div>

          <div className="leading-5">
            <h1 className="text-slate-900 dark:text-white font-black text-xl lg:text-3xl">
              مركز المحترف
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              صيانة الأجهزة المنزلية
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-base">
          {["home", "services", "about", "gallery", "contact"].map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {id === "home" && "الرئيسية"}
              {id === "services" && "الخدمات"}
              {id === "about" && "من نحن"}
              {id === "gallery" && "أعمالنا"}
              {id === "contact" && "تواصل معنا"}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* DARK MODE TOGGLE (unchanged UI 100%) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer relative w-16 h-8 rounded-full
            bg-slate-200 dark:bg-slate-700 shadow-inner
            transition-all duration-700 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-linear-to-r from-white/20 via-transparent to-black/10" />

            <span
              className={`absolute top-1 w-6 h-6 rounded-full
              bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${darkMode ? "left-9" : "left-1"}`}
            >
              <FaSun
                className={`absolute text-[12px] text-amber-500 transition duration-700 ${
                  darkMode ? "opacity-0 scale-0 rotate-90" : "opacity-100"
                }`}
              />

              <FaMoon
                className={`absolute text-[12px] text-indigo-400 transition duration-700 ${
                  darkMode ? "opacity-100" : "opacity-0 scale-0 -rotate-90"
                }`}
              />
            </span>
          </button>

          {/* WHATSAPP (fixed size, premium hover) */}
          <a
            href="https://wa.me/201022699990"
            className="hidden lg:flex items-center gap-2 px-5 py-3 rounded-2xl
            bg-green-500 text-white font-bold text-2xl
            hover:bg-green-600 hover:scale-105 transition shadow-lg"
          >
            <FaWhatsapp />
          </a>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-slate-900 dark:text-white text-3xl cursor-pointer"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 z-50 transform transition-transform duration-300
        bg-white dark:bg-slate-950/95 backdrop-blur-2xl 
        border-l border-slate-200 dark:border-white/10 shadow-2xl
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
          <h2 className="text-slate-900 dark:text-white font-black text-lg">
            القائمة
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-slate-900 dark:text-white text-3xl "
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-slate-900 dark:text-white font-medium">
          {["home", "services", "about", "gallery", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400 transition"
            >
              {id === "home" && "الرئيسية"}
              {id === "services" && "الخدمات"}
              {id === "about" && "من نحن"}
              {id === "gallery" && "أعمالنا"}
              {id === "contact" && "تواصل معنا"}
            </a>
          ))}

          {/* MOBILE DARK TOGGLE (RESTORED) */}
<button
  onClick={() => setDarkMode(!darkMode)}
  className="
    flex items-center justify-between
    px-4 py-3 rounded-xl
    border border-slate-200 dark:border-white/10
    bg-slate-100 dark:bg-white/5
    text-slate-900 dark:text-white
    transition-all duration-700 ease-in-out
    hover:scale-[1.02]
    active:scale-[0.98]
  "
>
  <span className="font-medium">الوضع الليلي</span>

  <div
    className={`
      w-11 h-6 rounded-full relative
      transition-all duration-700
      ${darkMode ? "bg-green-500/90" : "bg-slate-300"}
      shadow-inner
    `}
  >
    <div
      className={`
        absolute top-0.5 w-5 h-5 bg-white rounded-full
        shadow-md flex items-center justify-center
        transition-all duration-900 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${darkMode ? "right-0.5" : "left-0.5"}
      `}
    >
      <FaSun
        className={`
          absolute text-[10px] text-amber-500
          transition-all duration-700
          ${darkMode ? "opacity-0 scale-0 rotate-90" : "opacity-100"}
        `}
      />

      <FaMoon
        className={`
          absolute text-[10px] text-indigo-500
          transition-all duration-700
          ${darkMode ? "opacity-100" : "opacity-0 scale-0 -rotate-90"}
        `}
      />
    </div>
  </div>
</button>

          <a
            href="https://wa.me/201022699990"
            target="_blank"
            className="text-2xl mt-6 flex items-center justify-center gap-2
            bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl font-bold text-white"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}