"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";

const music = "/music/music.mp3";

export default function MainPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(music);
  }, []);

  const play = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden bg-[url('/bg-all.png')] bg-cover bg-no-repeat font-xxx">
      <Image
        src="/one.png"
        alt="one"
        className="mt-[-450px] w-full"
        width={270}
        height={270}
      />

      <div className="mt-28 flex flex-col items-center gap-12">
        <Image
          src="/two.png"
          alt="one"
          className="align-center mr-10 mt-[-200px]"
          width={400}
          height={1000}
        />
        <div className="mt-[-350px] text-5xl font-bold text-[#D9B700]">
          Гүлғайша
        </div>
        <div className="text-3xl text-[#D9B700]">Зейнет той</div>
      </div>
      <div className="absolute bottom-5">
        <div className="relative flex items-center justify-center">
          <Image
            src="/mus-bg.png"
            alt="music"
            width={90}
            height={90}
            priority
            className="animate-spin-slow"
          />
          <button
            onClick={play}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/mus.webp"
              alt="music"
              width={50}
              height={50}
              className={`${isPlaying ? "animate-spin-slowly" : ""}`}
            />
          </button>
        </div>
        <div className="relative mb-5 mt-[-30px] flex rotate-90 items-center justify-center">
          <div className="h-36 border-[0.5px] border-[#556B2F]"></div>
          <div className="absolute h-3 w-3 rounded-[50%] bg-[#556B2F]"></div>
          <div className="absolute left-8 -rotate-90 text-2xl text-[#556B2F]">
            04/08/2024
          </div>
        </div>
      </div>
    </div>
  );
}
