"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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

  const scrollToNextSection = () => {
    window.scrollBy({
      top: 800, // Scroll down by 800 pixels
      behavior: "smooth",
    });
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
          className="animate-growAndShrink align-center mr-10 mt-[-280px]"
          width={450}
          height={1000}
        />
        <div className="mt-[-350px] text-5xl font-bold text-[#D9B700] animate-growAndShrink ">
          Гүлғайша
        </div>
        <div className="text-3xl text-[#D9B700] animate-growAndShrink ">Зейнет той</div>
      </div>

      <div className="absolute bottom-20">
        {" "}
        {/* Adjusted bottom from 5 to 20 */}
        <div className="relative mb-20 mr-5 flex items-center justify-center">
          <div className="relative">
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
          <button
            onClick={scrollToNextSection}
            className="ml-8 flex items-center justify-center"
          >
            <div className="mt-10 flex flex-col">
              <Image
                src="/Strelka.png"
                alt="scroll down"
                width={60}
                height={60}
                className="ml-3"
              />
              <p className="">
                Астыға <br /> түсіріңіз
              </p>
            </div>
          </button>
        </div>
        <div className="relative flex rotate-90 items-center justify-center">
          <div className="absolute left-8 -rotate-90 text-2xl text-[#556B2F]">
            04/08/2024
          </div>
        </div>
      </div>
    </div>
  );
}
