"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Info() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-08-04`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        data-aos="fade-up"
        src="/decor.png"
        alt="decor"
        width={100}
        height={100}
        className="mx-auto w-[70%] -rotate-6"
      />
      <div
        data-aos="fade-up"
        className="] my-4 font-xxx text-3xl text-[#D9B700]"
      >
        Мекен-жайымыз:
      </div>
      <div
        data-aos="fade-up"
        className="mb-12 text-center font-georgia text-[20px] uppercase leading-relaxed text-[#556B2F]"
      >
        Тараз қаласы, <br /> &quot;Greid shyryn&quot; <br /> мейрамханасы,{" "}
        <br /> Жамбыл даңғылы 52
      </div>
      <div
        data-aos="fade-up"
        className="mb-4 text-center font-georgia text-[19px] uppercase leading-relaxed text-[#556B2F]"
      >
        Сізге жетуге ыңғайлы <br /> болу үшін картаны басыңыз!
      </div>
      <a href="https://go.2gis.com/tvl3k">
        <Image
          data-aos="fade-up"
          src="/2gis.jpeg"
          alt="2gis"
          width={60}
          height={60}
          className="mb-12 rounded-2xl"
        />
      </a>
      <div data-aos="fade-up" className="mb-4 font-xxx text-3xl text-[#D9B700]">
        Той иелері:
      </div>
      <div
        data-aos="fade-up"
        className="mb-2 text-center font-xxx text-[30px] text-[#556B2F]"
      >
        баласы Олжас <br /> & <br /> келіні Ақерке
      </div>
      <Image
        data-aos="flip-up"
        src="/decorr.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />
      <div
        data-aos="flip-up"
        className="mb-4 mt-[-5px] font-xxx text-3xl text-[#556B2F]"
      >
        Дресс-код:
      </div>
      <div
        data-aos="flip-up"
        className="flex items-center justify-center gap-16 font-georgia"
      >
        <div className="flex flex-col text-center">
          <Image
            src="/men.png"
            alt="men clothes"
            width={100}
            height={100}
            className="overflow-hidden"
          />
          <div className="text-[17px] uppercase">
            Ерлер <br /> қауымы
          </div>
        </div>
        <div className="flex flex-col text-center">
          <Image
            src="/women.png"
            alt="women clothes"
            width={100}
            height={100}
            className="overflow-hidden"
          />
          <div className="text-[17px] uppercase">
            Әйелдер <br /> қауымы
          </div>
        </div>
      </div>
    </div>
  );
}
