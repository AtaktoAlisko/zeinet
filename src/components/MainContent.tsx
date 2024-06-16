"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const weddingDate = new Date("2024-08-04T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div
      data-aos="zoom-in"
      className="mt-6 flex justify-center space-x-2 text-[#556B2F]"
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#556B2F]">
          <span className="text-2xl">{timeLeft.days}</span>
          <div>күн</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#556B2F]">
          <span className="text-2xl">{timeLeft.hours}</span>
          <div>сағат</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#556B2F]">
          <span className="text-2xl">{timeLeft.minutes}</span>
          <div>минут</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#556B2F]">
          <span className="text-2xl">{timeLeft.seconds}</span>
          <div>секунд</div>
        </div>
      </div>
    </div>
  );
};

export default function MainContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mb-10 mt-12 flex flex-col items-center justify-center text-center">
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-xxx text-2xl leading-relaxed text-[#D9B700]"
      >
        Құрметті ағайын-туыс <br />
        бауырлар, құда-жекжат, <br /> нағашы-жиен, бөлелер, <br /> дос-жараңдар,
        әріптестер, <br /> көршілер!
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[20px] uppercase leading-relaxed text-[#556B2F]"
      >
        сіз(дер)ді <br /> аяулы анамыз
      </div>
      <div data-aos="fade-up" className="mb-8 font-xxx text-4xl text-[#D9B700]">
        Гүлғайшаның
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[20px] uppercase leading-relaxed text-[#556B2F]"
      >
        зейнетке шығуына <br /> арналған салтанатты <br /> ақ дастарханымыздың{" "}
        <br />
        қадірлі қонағы болуға <br />
        шақырамыз!
      </div>
      <div className="relative mb-8">
        <Image
          src="/bg.png"
          width={350}
          height={350}
          alt="bg"
          className="z-10"
        />
        <Image
          src="/gulgaisha.png"
          className="absolute inset-0 object-cover"
          width={350}
          height={350}
          alt="gulgaisha"
        />
      </div>
      <div data-aos="zoom-in" className="font-xxx text-3xl text-[#D9B700]">
        Той Салтанаты:
      </div>
      <div className="relative flex flex-col">
        <Image src="/calendar.png" width={320} height={320} alt="calendar" />
        <Image
          src="/ring-decor.png"
          width={55}
          height={55}
          alt="ring-decor"
          className="absolute right-[27px] top-[85px]"
        />
      </div>
      <div data-aos="zoom-in" className="mb-4">
        <p className="mt-4 font-xxx text-3xl text-[#D9B700]">Той уақыты:</p>
        <p className="mt-4 font-xxx text-2xl text-[#556B2F]">19:00</p>
      </div>
      <div data-aos="zoom-in" className="mt-4 font-xxx text-3xl text-[#D9B700]">
        Тойға дейін қалды:
      </div>
      <CountdownTimer />
    </div>
  );
}
