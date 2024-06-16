"use client";

import { useState } from "react";
import axios from "axios";

export default function Formik() {
  const [attendance, setAttendance] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || attendance === "") {
      setError("Барлық ақпараттар толтырылуы керек.");
      return;
    }
    setError("");
    setSuccessMessage("");

    const payload = new URLSearchParams();
    payload.append("name", name);
    payload.append("attendance", attendance);

    setLoading(true);
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwnnM_M-zwvwlNhaBHanHRPD_BHRzEXKybNXhJ-edNsW9nZGQOAK5kO-Ou6wKgz7YVoMg/exec",
        payload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      setSuccessMessage("Сіздің хабарламаңыз сәтті жіберілді!");
      setAttendance("");
      setName("");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Бір қателік орын алды.");
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md px-4">
        <div className="flex flex-col text-center font-georgia">
          <div className="mb-4 mt-3 text-xl uppercase text-[#D9B700]">
            тойға келетініңізді <br /> растауыңызды <br /> сұраймыз!
          </div>
          <div className="mt-2 flex flex-col items-center">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Есіміңіз"
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-full max-w-[85%] rounded-3xl bg-[#FAFAFA] px-3 text-lg outline-none"
            />
            <div className="mt-3 w-full max-w-[85%] text-left text-lg text-[#556B2F]">
              Тойға келесіз бе?
            </div>
            <div className="mt-4 flex w-full max-w-[85%] items-center justify-start">
              <input
                type="radio"
                id="willAttend"
                name="attendance"
                value="Келемін"
                checked={attendance === "Келемін"}
                onChange={() => setAttendance("Келемін")}
                className="h-5 w-5 flex-shrink-0"
              />
              <label
                htmlFor="willAttend"
                className="ml-2 w-full max-w-[85%] flex-shrink-0 text-left text-[#556B2F]"
              >
                ӘРИНЕ, КЕЛЕМІН
              </label>
            </div>
            <div className="mt-3 flex w-full max-w-[85%] items-center justify-start">
              <input
                type="radio"
                id="cannotAttend"
                name="attendance"
                value="Келе алмаймын"
                checked={attendance === "Келе алмаймын"}
                onChange={() => setAttendance("Келе алмаймын")}
                className="h-5 w-5 flex-shrink-0"
              />
              <label
                htmlFor="cannotAttend"
                className="ml-2 w-full flex-shrink-0 text-left text-[#556B2F]"
              >
                ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН
              </label>
            </div>
            {error && (
              <div className="mt-3 w-full max-w-[85%] text-left text-red-500">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mt-3 w-full max-w-[85%] text-left text-green-500">
                {successMessage}
              </div>
            )}
            <button
              type="submit"
              className="mt-8 h-10 w-full max-w-[85%] rounded-3xl bg-[#D9B700] px-2 text-lg text-[#FFFFFF] drop-shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Жіберілуде..." : "Жіберу"}
            </button>
          </div>
        </div>
      </form>
      <div className="mb-10 mt-16 flex flex-col text-center font-xxx text-2xl leading-relaxed text-[#556B2F]">
        Келіңіздер, салтанатты <br /> тоймыздың қадірлі <br /> қонағы
        болыңыздар!
      </div>
    </>
  );
}
