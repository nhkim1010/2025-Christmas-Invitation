import { Snowfall } from "./components/Snowfall";
import { DecorativeBorder } from "./components/DecorativeBorder";
import { SparkleEffect } from "./components/SparkleEffect";
import { useEffect, useState } from "react";

export default function App() {
  const [dDay, setDDay] = useState(0);
  const [guestName, setGuestName] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-25");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDDay(diffDays);
  }, []);

  const handleEnter = () => {
    if (guestName.trim()) setIsEntered(true);
  };

  return (
    <div
      className="min-h-screen flex justify-center bg-[#1f2937] relative"
    >
      {/* Background Effects */}
      <Snowfall />
      <SparkleEffect />

      {/* Content Wrapper */}
      <div className="w-full max-w-md px-6 py-12 relative z-20">
        {!isEntered ? (
          /* Entry Screen */
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="bg-[#fffdf7] rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center">
              <h2
                className="text-[#4a3b32] mb-6"
                style={{
                  fontFamily: "'OgRenaissanceSecret', cursive",
                  fontSize: "2rem",
                  letterSpacing: "0.05em",
                }}
              >
                이름을 입력하시오
              </h2>

              <input
                type="text"
                placeholder="Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEnter()}
                className="w-full bg-[#f3f3f5] border rounded-lg px-4 py-3 mb-6 text-center"
              />

              <button
                onClick={handleEnter}
                disabled={!guestName.trim()}
                className="bg-[#d4183d] text-white rounded-full px-8 py-2 disabled:opacity-50"
              >
                ENTER
              </button>
            </div>
          </div>
        ) : (
          /* Main Card */
          <div className="bg-[#fffdf7] rounded-3xl shadow-2xl p-10 relative animate-fadeIn">
            <DecorativeBorder />

            {/* D-Day */}
            <div className="flex justify-center my-6">
              <div className="bg-red-600 px-6 py-2 rounded-full text-white">
                {dDay === 0 ? "Merry Christmas!" : `D-${dDay}`}
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <p className="mb-2">Dear. {guestName}</p>
              <h1>WISH YOU A MERRY</h1>
              <h2>CHRISTMAS</h2>
            </div>

            {/* Gingerbread */}
            <div className="flex justify-center my-10">
              <img
                src="/images/Gingerbread.png"
                alt="Gingerbread"
                className="animate-spin-slow hover:animate-spin-fast"
                style={{ width: 160 }}
              />
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-8 text-center mb-8">
              <div>
                <p>WEDNESDAY</p>
                <p>DECEMBER</p>
                <p>24TH 6PM</p>
              </div>
              <div>
                <p>HOSTED BY</p>
                <p>NARONG</p>
              </div>
            </div>

            <div className="text-center mt-8">
              ✨ 좋은 사람과, 좋은 시간 ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
