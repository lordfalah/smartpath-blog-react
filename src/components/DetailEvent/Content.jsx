import Check from "../../assets/icons/Check";
import { Link } from "react-router-dom";

const benefits = [
  "Akses materi video dan bacaan lengkap",
  "Kesempatan Rekomendasi masuk ke TOP COMPANY",
  "Internship di Smartpath (opsional)",
  "Sertifikat Internasional",
  "15+ Ebook Career, Academic & Business guide",
  "Template CV & Interview ",
];

const ContentEvent = ({ data }) => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-16">
        <article className="space-y-14">
          <div className="space-y-6">
            <h3 className="text-4xl">Deskripsi</h3>
            <div className="text-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
              />{" "}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl">Benefit</h3>

            <div className="space-y-4">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-x-4 items-center">
                  <div className="bg-[#0056A3] rounded-full p-0.5 flex items-center justify-center w-6 h-6">
                    <Check className="stroke-white stroke-2" />
                  </div>
                  {benefit.description}
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="flex justify-between sm:justify-end gap-x-10 text-lg font-semibold mt-24 md:mt-28 -mb-12 flex-wrap gap-y-3.5">
          <Link target="_blank" to={data.link_guidebook}>
            <button
              type="button"
              className="w-[230px] py-2.5 text-[#FFA700] border-[3px] border-[#FFA700] rounded-[10px]"
            >
              Guide book
            </button>
          </Link>
          <Link target="_blank" to={data.link_daftar}>
            <button
              type="button"
              className="w-[230px] py-2.5 text-white bg-[#FFA700] rounded-[10px]"
            >
              Daftar sekarang
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentEvent;
