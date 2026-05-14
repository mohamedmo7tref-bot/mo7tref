import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const services = [
    {
      title: "صيانة الثلاجات",
      desc: "إصلاح جميع أعطال التبريد والتسريب والكمبروسر بأحدث الأجهزة.",
      image: "/fridge3.png",
    },
    {
      title: "صيانة الديب فريزر",
      desc: "معالجة ضعف التجميد والتسريب والأعطال الكهربائية.",
      image: "/deep2.png",
    },
    {
      title: "صيانة التكييفات",
      desc: "شحن فريون وتنظيف وصيانة أعطال التكييف بكفاءة عالية.",
      image: "/cond.png",
    },
    {
      title: "صيانة الغسالات",
      desc: "صيانة الغسالات الأوتوماتيك والفوق أوتوماتيك.",
      image: "/wash3.png",
    },
    {
      title: "صيانة المبردات",
      desc: "حل مشاكل التبريد والدوائر الكهربائية.",
      image: "/cooler.png",
    },
    {
      title: "غسالات الأطباق",
      desc: "صيانة أعطال ضعف التنظيف والتسريب وعدم السحب أو الطرد.",
      image: "/wash.png",
    },
  ];

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="services"
      dir="rtl"
      className="relative bg-slate-950 py-24 px-6 overflow-hidden"
    >
 

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[10px]
            bg-white/5 backdrop-blur-xl
            border border-white/10
            hover:border-green-500/30
            transition duration-500
            hover:-translate-y-4
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          >
            {/* top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition origin-left"></div>

            {/* IMAGE */}
            <div
              className="relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

              {/* badge */}
              <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20 shadow-[0_10px_30px_rgba(34,197,94,0.25)]">
                خدمة احترافية
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-slate-300 leading-8 mb-8">
                {service.desc}
              </p>

              <a
                href="https://wa.me/201022699990"
                className="group/btn flex items-center justify-center gap-3
                bg-linear-to-l from-green-500 to-emerald-500
                hover:from-green-600 hover:to-emerald-600
                transition h-14 rounded-2xl
                text-white font-black text-lg
                shadow-[0_15px_40px_rgba(34,197,94,0.35)]
                hover:scale-[1.03]"
              >
                اطلب الخدمة الآن
                <span className="group-hover/btn:translate-x-1 transition">
                  ←
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50
            w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl
            border border-white/20 text-white text-3xl
            flex items-center justify-center
            hover:bg-green-500 transition"
          >
            <FaChevronRight />
          </button>

          {/* IMAGE */}
          <div className="relative z-50 max-w-6xl w-full px-6">
            <img
              src={services[selectedIndex].image}
              alt=""
              className="w-full max-h-[90vh] object-contain rounded-[40px]
              shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            />

            {/* title */}
            <div className="absolute bottom-8 right-10 bg-black/60 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-white text-2xl font-black">
                {services[selectedIndex].title}
              </h3>
            </div>
          </div>

          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50
            w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl
            border border-white/20 text-white text-3xl
            flex items-center justify-center
            hover:bg-green-500 transition"
          >
            <FaChevronLeft />
          </button>
        </div>
      )}
    </section>
  );
}