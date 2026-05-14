import React, { useState } from 'react'
import { FaClosedCaptioning, FaCross, FaRegClosedCaptioning } from 'react-icons/fa'
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
  className="py-24 bg-slate-950 text-white relative overflow-hidden"
>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholders */}
            <div className="grid grid-cols-2 gap-5 relative z-10">
  <img
    src={images[0]}
    alt="team"
    onClick={() => setSelectedImage(images[0])}
    className="rounded-3xl h-full object-cover cursor-pointer hover:scale-[1.03] transition duration-300 border border-white/10 shadow-2xl"
  />

  <div className="space-y-5">
    <img
      src={images[1]}
      alt="repair"
      onClick={() => setSelectedImage(images[1])}
      className="rounded-4xl object-cover cursor-pointer hover:scale-[1.02] transition duration-300"
    />

    <img
      src={images[2]}
      alt="tools"
      onClick={() => setSelectedImage(images[2])}
      className="rounded-4xl object-cover cursor-pointer hover:scale-[1.02] transition duration-300"
    />
  </div>
</div>
  
            <div>
              <span className="text-green-500 font-black text-5xl">
                من نحن
              </span>
  
             <h2 className="text-5xl font-black leading-tight mt-4 mb-8  bg-clip-text ">
                 خبرة وثقة في صيانة الأجهزة المنزلية </h2>
  
              <p className="text-slate-600 leading-9 text-lg mb-10">
                مركز المحترف يوفر خدمات صيانة احترافية للأجهزة المنزلية باستخدام
                أحدث أدوات الفحص والصيانة مع فريق فني مدرب لتقديم أفضل جودة خدمة
                بأسرع وقت ممكن.
              </p>
  
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 
bg-white/5 border border-white/10 
backdrop-blur-xl rounded-2xl p-5 
hover:bg-white/10 transition"
                  >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center font-black text-xl border border-green-500/30">
  ✓
</div>
  
                    <p className="font-bold">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
{/* IMAGE MODAL */}
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

    {/* Close Button */}
    <button
      onClick={() => setSelectedImage(null)}
      className="flex justify-center items-center absolute top-6 right-6 bg-white text-black w-12 h-12 rounded-full text-4xl font-bold  hover:scale-110 transition"
    >  <IoMdClose  />
    </button>
  </div>
)}

        </section>
  )
}
