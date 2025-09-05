import DefaultLayout from "@/components/layout/defaultLayout/DefaultLayout";

const Tentang = () => {
  return (
    <DefaultLayout className="relative px-[var(--spacing-container)]">
      <div className="flex flex-col items-center justify-center mt-[3vw]">
        <h1 className="font-bold">TENTANG</h1>
        <h2>Porsenigama 2024</h2>

        <div className="flex flex-col lg:flex-row gap-[5vw] mt-[3vw] items-center text-justify">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            className="w-full h-auto lg:w-[35vw] lg:h-[20vw] rounded-lg border-2 p-[1vw]"
          ></iframe>
          <h3 className="w-full lg:w-[30vw]">
            Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) adalah
            ajang olahraga dan seni tahunan yang melibatkan kontingen dari
            berbagai Fakultas dan Sekolah di UGM. <br /> <br />
            Acara ini diselenggarakan berdasarkan RKAT atau program FORKOM UKM
            UGM. Tahun ini, Porsenigama mengusung tema "Kembara Jagaddhita" dan
            tagline "Genggam Gemerlap Talenta Gadjah Mada.
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row p-[3vw] gap-[3vw]">
          <div className="bg-[#05AF6D] w-[65vw] lg:w-[30vw] h-[40vw] lg:h-[15vw] rounded-xl"></div>
          <div className="bg-[#99102F] w-[65vw] lg:w-[30vw] h-[40vw] lg:h-[15vw] rounded-xl"></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tentang;
