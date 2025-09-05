"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import DefaultLayout from "@/components/layout/defaultLayout/DefaultLayout";

const Porseni2024 = () => {
  const [skor, setSkor] = useState([]);

  useEffect(() => {
    fetch("/data/skor.json") // ambil file JSON dari folder public
      .then((res) => res.json()) // ubah response jadi objek JS
      .then((data) => setSkor(data)) // simpan ke state
      .catch((err) => console.error("Error fetch JSON:", err));
  }, []);

  return (
    <DefaultLayout className="relative bg-linear-to-b from-[#006582] via-[#00B5E8] to-[#EDEACB]">
      <div className="flex flex-col lg:flex-row-reverse gap-[10vw] justify-center">
        <div className="flex flex-col justify-center items-center gap-[2vw]">
          <Image
            src="/images/logopsg.webp"
            alt="logo"
            width={500}
            height={300}
            className="w-[50vw] lg:w-[20vw]"
          />
          <Image
            src="/images/titlepsg.webp"
            alt="title"
            width={500}
            height={300}
            className="w-[50vw] lg:w-[30vw]"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-[3vw] lg:gap-[1vw]">
          <div className="bg-white w-full lg:w-[30vw] h-[70vw] lg:h-[20vw] rounded-lg lg:mt-[5vw]"></div>
          <div className="bg-white w-full lg:w-[30vw] h-[70vw] lg:h-[20vw] rounded-lg"></div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {skor.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="rounded-lg shadow overflow-hidden w-[50vw] lg:w-auto mt-[8vw] mx-auto text-center">
              <div key={index} className="bg-white font-bold p-[2vw]">
                <h3>{item.cabang}</h3>
                <h1>{item.skor}</h1>
              </div>
              <div className="bg-[#062C43] text-white px-[1vw]">
                <h3 className="font-bold">{item.kontingen}</h3>
                <p>{item.jadwal}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col justify-center items-center mt-[10vw]">
        <h1 className="font-bold">CABANG</h1>
        <h2>Perlombaan</h2>
        <div className="grid grid-rows-2 lg:grid-cols-2 gap-[3vw] mt-[3vw] p-[3vw] lg:p-0 font-bold justify-items-center">
          <div className="bg-white w-[60vw] lg:w-[28vw] h-[60vw] lg:h-[25vw] rounded-lg flex text-center items-end justify-center">
            <h2>Olahraga</h2>
          </div>
          <div className="bg-white w-[60vw] lg:w-[28vw] h-[60vw] lg:h-[25vw] rounded-lg flex text-center items-end justify-center">
            <h2>Seni</h2>
          </div>
        </div>
      </div>
      <Image
        src="/images/Vector.webp"
        alt="footer"
        width={500}
        height={300}
        className="absolute bottom-[-3vw] left-[-5vw] w-[10vw]"
      />
    </DefaultLayout>
  );
};

export default Porseni2024;
