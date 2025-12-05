import { Snowfall } from './components/Snowfall';
import { WineGlassIllustration } from './components/WineGlassIllustration';
import { DecorativeBorder } from './components/DecorativeBorder';
import { SparkleEffect } from './components/SparkleEffect';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [dDay, setDDay] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userName, setUserName] = useState('');
  const [isEntered, setIsEntered] = useState(false);
  const [nameError, setNameError] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-12-25');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDDay(diffDays);
  }, []);

  useEffect(() => {
    // Detect mobile device based on window width and touch capability
    const checkMobile = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isMobileWidth || isTouchDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 10) {
      setNameError('10자 이내로 입력해주세요.');
      return;
    }
    
    // Regex for Korean and English only
    const regex = /^[a-zA-Z가-힣\s]*$/;
    if (!regex.test(value)) {
      setNameError('한글과 영문만 입력 가능합니다.');
      return;
    }

    setNameError('');
    setUserName(value);
  };

  const handleEnter = () => {
    if (!userName.trim()) {
      setNameError('이름을 입력해주세요.');
      return;
    }
    setIsEntered(true);
  };

  if (!isEntered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f5f5f0] relative overflow-hidden">
        <Snowfall />
        <SparkleEffect />
        
        <div className="z-10 w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl text-center border border-[#2d5f4f]/10">
          <h1 className="text-[#2d5f4f] text-2xl mb-6" style={{ fontFamily: "'OgRenaissanceSecret', cursive", letterSpacing: '0.05em' }}>
            Christmas Invitation
          </h1>
          
          <div className="space-y-4">
            <p className="text-[#2d5f4f] mb-2" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif" }}>
              초대장을 받으실 분의 성함을 입력해주세요
            </p>
            
            <div className="relative">
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                placeholder="이름 입력 (10자 이내)"
                className="w-full px-4 py-3 rounded-xl border border-[#2d5f4f]/30 focus:outline-none focus:border-[#2d5f4f] bg-white/50 text-center text-[#2d5f4f]"
                style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif" }}
                onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
              />
              {nameError && (
                <p className="text-red-500 text-sm mt-2 absolute w-full left-0 -bottom-6" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif" }}>
                  {nameError}
                </p>
              )}
            </div>

            <button
              onClick={handleEnter}
              className="w-full mt-6 bg-[#2d5f4f] text-white py-3 rounded-xl hover:bg-[#234a3d] transition-colors shadow-lg"
              style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif" }}
            >
              초대장 확인하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-y-scroll scrollbar-hide flex justify-center p-8 pb-20" style={{
      background: '#f5f5f0'
    }}>
      <Snowfall />
      <SparkleEffect />
      
      <div 
        className="max-w-md w-full relative z-20 cursor-pointer mt-8"
        style={{ perspective: '1500px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <motion.div
          className="relative w-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          style={{ transformStyle: 'preserve-3d', minHeight: '800px' }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Main Invitation Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 relative" style={{ minHeight: '800px' }}>
              <DecorativeBorder />
              
              <div className="relative z-10">
                {/* Dear Name */}
                <div className="text-center mb-4">
                  <p className="text-[#2d5f4f] text-xl" style={{ fontFamily: "'OgRenaissanceSecret', cursive" }}>
                    Dear. {userName}
                  </p>
                </div>

                {/* D-Day Badge */}
                <div className="flex justify-center mb-6">
                  <div className="bg-red-600 px-6 py-2 rounded-full">
                    <p className="text-white text-center" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.1rem', lineHeight: '1.9' }}>
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
                <div className="text-center mb-6" style={{ fontFamily: "'OgRenaissanceSecret', cursive" }}>
                  <h1 className="text-[#2d5f4f] mb-2" style={{ fontSize: '1.8rem', letterSpacing: '0.05em' }}>WISH YOU A MERRY</h1>
                  <h2 className="text-[#2d5f4f]" style={{ fontSize: '1.8rem', letterSpacing: '0.05em' }}>CHRISTMAS PARTY</h2>
                  <div className="flex justify-center gap-2 mt-3">
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                  </div>
                </div>

                {/* Wine Glass Illustration */}
                <div className="flex justify-center my-8">
                  <WineGlassIllustration />
                </div>

                {/* Event Details - Two Columns */}
                <div className="grid grid-cols-2 gap-8 mb-8" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.1rem', lineHeight: '1.9' }}>
                  {/* Left Column */}
                  <div className="text-center">
                    <p className="text-[#2d5f4f] mb-2">WEDNESDAY,</p>
                    <p className="text-[#2d5f4f] mb-2">DECEMBER</p>
                    <p className="text-[#2d5f4f]">24TH 6PM</p>
                  </div>

                  {/* Right Column */}
                  <div className="text-center">
                    <p className="text-[#2d5f4f] mb-2">HOSTED BY</p>
                    <p className="text-[#2d5f4f] mb-2">NARONG</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#2d5f4f] opacity-30 my-6"></div>

                {/* Footer */}
                <div className="text-center mt-8" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.15rem' }}>
                  <p className="text-[#2d5f4f]">✨ 여러분을 기다립니다 ✨</p>
                </div>
                
                {/* Hint */}
                <div className="text-center mt-6 bg-gradient-to-br from-red-50 to-green-50 p-4 rounded-2xl border-2 border-dashed border-[#2d5f4f]/30">
                  <p className="text-[#2d5f4f]" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.1rem' }}>
                    🎄 카드를 뒤집어보세요 🎄
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 w-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 relative" style={{ minHeight: '800px' }}>
              <DecorativeBorder />
              
              <div className="relative z-10">
                {/* Back Title */}
                <div className="text-center mb-6">
                  <h2 className="text-[#2d5f4f]" style={{ fontFamily: "'OgRenaissanceSecret', cursive", fontSize: '1.8rem', letterSpacing: '0.05em' }}>PARTY DETAILS</h2>
                  <div className="flex justify-center gap-2 mt-3">
                    <span className="text-yellow-500">☆</span>
                    <span className="text-yellow-500">☆</span>
                  </div>
                </div>

                {/* Preparation */}
                <div className="bg-[#f9f9f7] p-6 rounded-2xl border-2 border-[#2d5f4f]/20 mb-6">
                  <div className="text-center space-y-3" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.15rem', lineHeight: '1.9' }}>
                    <p className="text-[#2d5f4f]">
                      <span className="text-red-600">🎁</span> 준비물: 열정
                    </p>
                    <p className="text-[#2d5f4f]">
                      <span className="text-red-600">👗</span> 드레스코드: 빨강 / 초록
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#2d5f4f] opacity-30 my-6"></div>

                {/* Schedule */}
                <div className="bg-[#f9f9f7] p-6 rounded-2xl border border-[#2d5f4f]/20">
                  <h3 className="text-[#2d5f4f] text-center mb-4" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.3rem', letterSpacing: '0.05em' }}>파티 일정</h3>
                  <div className="space-y-2" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.1rem', lineHeight: '1.9' }}>
                    {[
                      '- 주인장 인사 및 2025 개인 성과 공유회',
                      '- 돼지 파티',
                      '- 장기자랑',
                      '- 릴스 촬영',
                      '(싱숭생숭/첫눈/힙합보단 사랑 중 택1)',
                      '- 2026 난징의 지배자 비전 발표회',
                      '- 마무리 인사'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0 mt-1" style={{ fontSize: '0.7em' }}>●</span>
                        <span className="text-[#2d5f4f]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back Footer */}
                <div className="text-center mt-8" style={{ fontFamily: "'Cafe24Danjeonghae', sans-serif", fontSize: '1.15rem' }}>
                  <p className="text-[#2d5f4f]">✨ 좋은 사람과, 좋은 시간 ✨</p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
