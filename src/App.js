import { Snowfall } from "./components/Snowfall";
import { DecorativeBorder } from "./components/DecorativeBorder";
import { SparkleEffect } from "./components/SparkleEffect";
import { useEffect, useState } from "react";

export default function App() {
  const [dDay, setDDay] = useState(0);
  const [guestName, setGuestName] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const isKakao = /KAKAOTALK/i.test(navigator.userAgent);

  useEffect(() => {
    const targetDate = new Date("2025-12-25");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(
      diffTime / (1000 * 60 * 60 * 24),
    );
    setDDay(diffDays);
  }, []);

  const handleEnter = () => {
    if (guestName.trim()) {
      setIsEntered(true);
    }
  };

  return (
    <div className="min-h-dvh bg-[#1f2937] relative">
      {!isKakao && <Snowfall />}
      {!isKakao && <SparkleEffect />}
      <div
        className={`min-h-dvh ${
          !isEntered
            ? "flex items-center justify-center"
            : "flex items-start justify-center"
        } p-8`}
      >
        {!isEntered ? (
          /* Entry */
          <div className="w-full flex items-center justify-center">
            <div className="bg-[#fffdf7] rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center relative z-50">
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
                onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
                className="w-full bg-[#f3f3f5] border border-[#d1d5db] rounded-lg px-4 py-3 mb-6 text-center text-[#4a3b32] outline-none focus:border-[#4a3b32] transition-colors"
                style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: "1.2rem" }}
              />
              <button
                onClick={handleEnter}
                disabled={!guestName.trim()}
                className="bg-[#d4183d] text-white rounded-full px-8 py-2 hover:bg-[#b01332] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: "1.2rem" }}
              >
                ENTER
              </button>
            </div>
          </div>
        ) : (
          /* Main Invitation Card */
          <div className="w-full max-w-md">
            <div className="bg-[#fffdf7] backdrop-blur-sm rounded-3xl shadow-2xl p-12 relative">
              <DecorativeBorder />

              <div className="relative z-10">
                {/* D-Day Badge */}
                <div className="flex flex-col items-center mt-6 mb-6">
                  <div className="bg-red-600 px-6 py-2 rounded-full">
                    <p
                      className="text-white text-center"
                      style={{
                        fontFamily:
                          "'Cafe24Danjeonghae', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: "1.9",
                      }}
                    >
                      {dDay === 0 ? (
                        <span>Merry Christmas!</span>
                      ) : dDay > 0 ? (
                        <span>D-{dDay}</span>
                      ) : (
                        <span>D+{Math.abs(dDay)}</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <div
                  className="text-center mb-6"
                  style={{
                    fontFamily: "'OgRenaissanceSecret', cursive",
                  }}
                >
                  <div className="flex justify-center gap-2 mt-3">
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                  </div>
                  <p
                    className="text-[#4a3b32] mb-4 text-xl"
                    style={{ fontFamily: "'OgRenaissanceSecret', cursive" }}
                  >
                    Dear. {guestName}
                  </p>
                  <h1
                    className="text-[#4a3b32] mb-2"
                    style={{
                      fontSize: "1.8rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    WISH YOU A MERRY
                  </h1>
                  <h2
                    className="text-[#4a3b32]"
                    style={{
                      fontSize: "1.8rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    CHRISTMAS
                  </h2>
                </div>


                {/* Main Img */}
                <div className="flex justify-center my-6 mt-8">
                  <img
                    src="/images/Gingerbread.png"
                    alt="메인 이미지"
                    className={`transition-all duration-300 ${
                      dDay % 2 === 0 ? "animate-[spin_8s_linear_infinite]" : "animate-[spin_8s_linear_infinite]"
                    } hover:animate-[spin_3s_linear_infinite] active:animate-[spin_0.5s_linear_infinite]`}
                    onClick={(e) => {
                      const img = e.currentTarget;
                      img.style.animation = "none";
                      void img.offsetWidth; // trigger reflow
                      img.style.animation = "spin 0.5s linear 1";
                      setTimeout(() => {
                        img.style.animation = "spin 8s linear infinite";
                      }, 500);
                    }}
                    style={{ animation: "spin 8s linear infinite" }}
                  />
                </div>

                {/* Event Details - Two Columns */}
                <div
                  className="grid grid-cols-2 gap-8 mb-8 mt-8"
                  style={{
                    fontFamily: "'Cafe24Danjeonghae', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: "1.9",
                  }}
                >
                  {/* Left Column */}
                  <div className="text-center">
                    <p className="text-[#4a3b32] mb-2">
                      WEDNESDAY,
                    </p>
                    <p className="text-[#4a3b32] mb-2">
                      DECEMBER
                    </p>
                    <p className="text-[#4a3b32]">24TH 6PM</p>
                  </div>

                  {/* Right Column */}
                  <div className="text-center">
                    <p className="text-[#4a3b32] mb-2">
                      HOSTED BY
                    </p>
                    <p className="text-[#4a3b32] mb-2">NARONG</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#2d5f4f] opacity-30 my-6"></div>

                {/* Preparation */}
                <div className="bg-[#f9f9f7] p-6 rounded-2xl border border-[#2d5f4f]/10 mb-6">
                  <div
                    className="text-center space-y-3"
                    style={{
                      fontFamily:
                        "'Cafe24Danjeonghae', sans-serif",
                      fontSize: "1.15rem",
                      lineHeight: "1.9",
                    }}
                  >
                    <p className="text-[#4a3b32]">
                      <span className="text-red-600">🎁</span>{" "}
                      준비물: 열정
                    </p>
                    <p className="text-[#4a3b32]">
                      <span className="text-red-600">👗</span>{" "}
                      드레스코드: 빨강 / 초록
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#2d5f4f] opacity-30 my-6"></div>

                {/* Schedule */}
                <div className="bg-[#f9f9f7] p-6 rounded-2xl border border-[#2d5f4f]/10">
                  <h3
                    className="text-[#4a3b32] text-center mb-4"
                    style={{
                      fontFamily:
                        "'Cafe24Danjeonghae', sans-serif",
                      fontSize: "1.3rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    파티 일정
                  </h3>
                  <div
                    className="space-y-2"
                    style={{
                      fontFamily:
                        "'Cafe24Danjeonghae', sans-serif",
                      fontSize: "1.1rem",
                      lineHeight: "1.9",
                    }}
                  >
                    {[
                      "- 주인장 인사 및 2025 개인 성과 공유회",
                      "- 돼지 파티",
                      "- 릴스 촬영",
                      "(싱숭생숭/첫눈/힙합보단 사랑 중 택1)",
                      "- 2026 비전 발표회",
                      "- 마무리 인사",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <span
                          className="text-red-600 flex-shrink-0 mt-1"
                          style={{ fontSize: "0.7em" }}
                        >
                          ●
                        </span>
                        <span className="text-[#4a3b32]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back Footer */}
                <div
                  className="text-center mt-6 mb-6"
                  style={{
                    fontFamily: "'Cafe24Danjeonghae', sans-serif",
                    fontSize: "1.15rem",
                  }}
                >
                  <p className="text-[#4a3b32]">
                    ✨ 좋은 사람과, 좋은 시간 ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
