import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const text = `
📌 طلب صيانة جديد

👤 الاسم: ${name}
📞 الهاتف: ${phone}
🔧 الجهاز: ${device}
📝 العطل : ${message}
    `;

    window.open(
      `https://wa.me/201022699990?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };
  const isFormValid =
  name.trim() !== "" &&
  phone.trim() !== "" &&
  device.trim() !== "" &&
  message.trim() !== "";

  return (
    <section id="contact" className="relative py-28 bg-slate-950 text-white overflow-hidden">

  

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-green-400 font-black text-5xl">
            تواصل معنا
          </p>

          <h2 className="text-5xl font-black mt-3 leading-tight">
            احجز صيانة في <span className="text-green-400">دقيقة</span>
          </h2>

          <p className="text-slate-300 mt-0 leading-8">
            نرد عليك فورًا ونوفر لك أقرب فني في منطقتك داخل الزقازيق.
          </p>

<div className="mt-6 space-y-4">

  {/* PHONE */}
  <a
    href="tel:01022699990"
    className="group flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-5 py-4 hover:bg-white/15 hover:scale-[1.02] transition duration-300"
  >
    <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition">
      <FaPhone />
    </div>

    <div>
      <p className="text-slate-400 text-xs"> Call now</p>
      <h3 className="text-lg font-black">01022699990</h3>
    </div>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/201022699990"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-5 py-4 hover:bg-green-500/25 hover:scale-[1.02] transition duration-300"
  >
    <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition">
      <FaWhatsapp />
    </div>

    <div>
      <p className="text-slate-400 text-xs">Whatsapp</p>
      <h3 className="text-lg font-black">ابدأ المحادثة</h3>
    </div>
  </a>

  {/* FACEBOOK */}
  <a
    href="https://facebook.com/mo7tref.2022"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-5 py-4 hover:bg-blue-500/20 hover:border-blue-500/30 hover:scale-[1.02] transition duration-300"
  >
    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition">
      <FaFacebookF />
    </div>

    <div>
      <p className="text-slate-400 text-xs">Facebook</p>
      <h3 className="text-lg font-black">تابع صفحتنا</h3>
    </div>
  </a>

  {/* MESSENGER */}
  <a
    href="https://m.me/mo7tref.2022"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-5 py-4 hover:bg-sky-500/20 hover:border-sky-500/30 hover:scale-[1.02] transition duration-300"
  >
    <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition">
      <FaFacebookMessenger />
    </div>

    <div>
      <p className="text-slate-400 text-xs">Messenger</p>
      <h3 className="text-lg font-black">راسلنا مباشرة</h3>
    </div>
  </a>

</div>

        </div>

        {/* FORM */}
        <div className="relative">

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">

            <h3 className="text-3xl font-black mb-6">
              أرسل طلبك الآن
            </h3>

            <div className="space-y-5">

              <input
                placeholder="الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 px-5 outline-none focus:border-green-400 transition"
              />

              <input
                placeholder="رقم الهاتف"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 px-5 outline-none focus:border-green-400 transition"
              />

              <select
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 px-5 text-slate-500 outline-none focus:border-green-400 transition"
              >
                <option>نوع الجهاز</option>
                <option>ثلاجة</option>
                <option>ديب فريزر</option>
                <option>تكييف</option>
                <option>مبرد</option>
                <option>غسالةاوتوماتيك</option>
                <option>غسالة فوق اوتوماتيك</option>
                <option> غسالةأطباق</option>
              </select>

              <textarea
                placeholder="وصف العطل"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl bg-white/10 border border-white/10 p-5 outline-none focus:border-green-400 transition"
              />

         <button
  onClick={sendToWhatsApp}
  disabled={!isFormValid}
  className={`w-full h-14 rounded-2xl cursor-pointer font-black text-lg transition shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:scale-[1.02] ${
    isFormValid
      ? "bg-green-500 hover:bg-green-600 text-white"
      : "bg-slate-700 text-slate-400 cursor-not-allowed opacity-60"
  }`}
>
  <div className="flex gap-2 items-center justify-center text-xl"><FaWhatsapp/>إرسال عبر واتساب </div>
  
</button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}