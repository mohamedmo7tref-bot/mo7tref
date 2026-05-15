import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    "/dig.png",
    "/gedge.png",
    "/avo.png",
  ]

  const features = [
    "خدمة سريعة",
    "قطع غيار أصلية",
    "ضمان معتمد",
    "فنيين متخصصين",
  ]

  return (
    <section
      id="about"
      className="
      py-24 relative overflow-hidden

      bg-white text-slate-900
      dark:bg-slate-950 dark:text-white

      transition-colors duration-300
    "
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-5 relative z-10">

          <img
            src={images[0]}
            alt="team"
            onClick={() => setSelectedImage(images[0])}
            className="
            rounded-3xl h-full object-cover cursor-pointer
            border shadow-xl
            border-slate-200
            hover:scale-[1.03] transition duration-300

            dark:border-white/10
          "
          />

          <div className="space-y-5">

            <img
              src={images[1]}
              alt="repair"
              onClick={() => setSelectedImage(images[1])}
              className="
              rounded-3xl object-cover cursor-pointer
              hover:scale-[1.02] transition duration-300

              border border-slate-200
              dark:border-white/10
            "
            />

            <img
              src={images[2]}
              alt="tools"
              onClick={() => setSelectedImage(images[2])}
              className="
              rounded-3xl object-cover cursor-pointer
              hover:scale-[1.02] transition duration-300

              border border-slate-200
              dark:border-white/10
            "
            />
          </div>
        </div>

        {/* TEXT */}
        <div>

          <span className="
            font-black text-5xl text-green-600 dark:text-green-500
          ">
            من نحن
          </span>

          <h2 className="
            text-5xl font-black leading-tight mt-4 mb-8

            text-slate-900 dark:text-white
          ">
            خبرة وثقة في صيانة الأجهزة المنزلية
          </h2>

          <p className="
            leading-9 text-lg mb-10

            text-slate-600 dark:text-slate-300
          ">
            مركز المحترف يوفر خدمات صيانة احترافية للأجهزة المنزلية باستخدام
            أحدث أدوات الفحص والصيانة مع فريق فني مدرب لتقديم أفضل جودة خدمة
            بأسرع وقت ممكن.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5">

            {features.map((feature, index) => (
              <div
                key={index}
                className="
                flex items-center gap-4

                bg-white border border-slate-200
                text-slate-900

                dark:bg-white/5 dark:border-white/10 dark:text-white

                backdrop-blur-xl rounded-2xl p-5
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
              >
                <div className="
                  w-12 h-12 rounded-xl
                  bg-green-500/20 text-green-500
                  flex items-center justify-center
                  font-black text-xl border border-green-500/30
                ">
                  ✓
                </div>

                <p className="font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95%] max-h-[90vh] rounded-3xl shadow-2xl"
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="
            absolute top-6 right-6
            w-12 h-12 rounded-full
            bg-white text-black
            dark:bg-white/10 dark:text-white

            hover:scale-110 transition
            flex items-center justify-center
          "
          >
            <IoMdClose />
          </button>
        </div>
      )}
    </section>
  )
}