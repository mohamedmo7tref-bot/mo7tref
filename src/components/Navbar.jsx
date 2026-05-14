import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "services", "about", "gallery", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

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
     hover:text-green-400
     after:absolute after:right-0 after:-bottom-2 after:h-[2px] after:bg-green-400
     after:transition-all after:duration-300
     ${
       active === id
         ? "text-green-400 after:w-full"
         : "after:w-0 hover:after:w-full"
     }`;

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-slate-950/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition">
            <img
              src="/logo3.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="leading-5">
            <h1 className="text-white font-black text-xl lg:text-2xl">
              مركز المحترف
            </h1>
            <p className="text-slate-400 text-xs">
              صيانة الأجهزة المنزلية
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-slate-300">
          <a href="#home" className={linkClass("home")}>
            الرئيسية
          </a>
          <a href="#services" className={linkClass("services")}>
            الخدمات
          </a>
          <a href="#about" className={linkClass("about")}>
            من نحن
          </a>
          <a href="#gallery" className={linkClass("gallery")}>
            أعمالنا
          </a>
          <a href="#contact" className={linkClass("contact")}>
            تواصل معنا
          </a>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/201022699990"
            target="_blank"
            className="hidden lg:flex items-center gap-2 px-5 py-3 rounded-2xl
            bg-green-500 text-white font-bold text-2xl
            hover:bg-green-600 hover:scale-105 transition shadow-lg"
          >
            <FaWhatsapp />
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
    <div
  className={`fixed top-0 right-0 h-screen w-80 z-50 transform transition-transform duration-300 
  bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white font-black text-lg">القائمة</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-white font-medium">
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

          <a
            href="https://wa.me/201022699990"
            target="_blank"
            className="text-2xl mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl font-bold"
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