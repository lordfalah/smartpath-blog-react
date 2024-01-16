import React from "react";
import bg_partners from "@/assets/image/bg_partners.png";
import paragon from "@/assets/partners/paragon.png";
import pertamina from "@/assets/partners/pertamina.png";
import ruang_guru from "@/assets/partners/ruang_guru.png";
import telkom_id from "@/assets/partners/telkom_id.png";
import tvone from "@/assets/partners/tvone.png";
import Image from "next/image";

const imgsrc = [
  { src: pertamina.src, title: "Pertamina" },
  { src: paragon.src, title: "Paragon" },
  { src: telkom_id.src, title: "Telkom Indonesia" },
  { src: ruang_guru.src, title: "Ruang Guru" },
  { src: tvone.src, title: "Tv One" },
];

const Partners = () => {
  return (
    <section className="w-full flex items-center justify-center sm:justify-start relative my-40 py-10 sm:py-16">
      <Image
        src={bg_partners.src}
        priority
        alt="background partners"
        className="w-full"
        fill
        style={{ objectFit: "cover" }}
      />

      <div className="relative z-20 w-full space-y-10 md:space-y-20">
        <h2 className="font-semibold text-3xl text-center">Partners</h2>

        <div className="flex justify-center md:justify-between items-center gap-y-6 gap-x-6 flex-wrap">
          {imgsrc.map(({ src, title }, idx) => (
            <div key={idx} className="bg-white py-4 px-8 w-[275px]">
              <Image
                src={src}
                alt={title}
                width={200}
                height={200}
                className="w-full aspect-video"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
