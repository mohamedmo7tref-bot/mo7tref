import React, { useState } from "react";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    "/fam.jpeg",
    "/wilde.jpeg",
    "/gedge.png",
    "/white.jpeg",
    "/dig.png",
    "/lg.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
     

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-green-400 font-black text-lg">
          </span>

          <h2 className="text-5xl font-black mt-4 mb-6 text-green-500">
            أعمالنا
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-8">
            نماذج من أعمال الصيانة التي تم تنفيذها بجودة عالية داخل مركز المحترف
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelected(img)}
              className="group relative cursor-pointer overflow-hidden rounded-[28px]
              border border-white/10 bg-white/5 backdrop-blur-xl
              hover:scale-[1.02] transition duration-300"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition"></div>

              {/* hover text */}
              <div className="absolute bottom-5 right-5 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition">
                عرض الصورة
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="preview"
            className="max-w-[95%] max-h-[90vh] rounded-3xl shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />

          {/* close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}