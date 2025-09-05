import Image from "next/image";
import DefaultLayout from "@/components/layout/defaultLayout/DefaultLayout";

const Tema = () => {
  return (
    <DefaultLayout className="relative min-h-screen bg-[#F0EFFB] px-[var(--spacing-container)]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold mt-[3vw]">TEMA</h1>
        <h2>Porsenigama 2024</h2>

        <div className="flex flex-col-reverse lg:flex-row mt-[3vw] items-center text-justify">
          <div className="flex flex-col items-center lg:items-end lg:mt-[20vw]">
            <h3 className="font-bold">PORCHI</h3>
            <p>Maskot Porseni 2024</p>
          </div>
          <Image
            src="/images/porchi.webp"
            alt="porchi"
            width={500}
            height={300}
            className="w-[40vw] lg:w-[20vw]"
          />
          <div className="flex flex-col items-center m-[5vw]">
            <Image
              src="/images/renjana.svg"
              alt="renjana"
              width={500}
              height={300}
              className="w-[40vw] lg:w-[20vw]"
            />
            <h3 className="w-full lg:w-[30vw]">
              Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama)
              adalah ajang olahraga dan seni tahunan yang melibatkan kontingen
              dari berbagai Fakultas dan Sekolah di UGM. <br />
              <br /> Acara ini diselenggarakan berdasarkan RKAT atau program
              FORKOM UKM UGM. Tahun ini, Porsenigama mengusung tema "Kembara
              Jagaddhita" dan tagline "Genggam Gemerlap Talenta Gadjah Mada.
            </h3>
          </div>
        </div>
      </div>
      <Image
        src="/images/vector-tema.webp"
        alt="elemen"
        width={500}
        height={300}
        className="absolute top-0 left-[-5vw] w-[25vw] hidden lg:block"
      />
    </DefaultLayout>
  );
};

export default Tema;
