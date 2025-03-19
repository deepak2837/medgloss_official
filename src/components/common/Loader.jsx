"use client"

const LineLoader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-gradient-radial">
      <style jsx>{`
        @keyframes pill-open {
          0%, 20%, 80%, 100% { margin-top: 0; }
          30%, 70% { margin-top: 10vmin; }
        }
        @keyframes medicine-dust {
          0%, 100% { transform: translate3d(0vmin, 0vmin, -0.1vmin); }
          25% { transform: translate3d(0.25vmin, 5vmin, 0vmin); }
          75% { transform: translate3d(-0.1vmin, -4vmin, 0.25vmin); }
        }
        @keyframes shine {
          0%, 46% { right: 1.5vmin; }
          54%, 100% { right: 7.5vmin; }
        }
        @keyframes shadow {
          0%, 49.999% { transform: rotateY(0deg); left: 0; }
          50%, 100% { transform: rotateY(180deg); left: -3vmin; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(180deg); }
          100% { transform: rotate(-180deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-shine {
          animation: shine 1s ease-out infinite alternate-reverse;
        }
        .animate-shadow {
          animation: shadow 1s ease infinite alternate-reverse;
        }
        .animate-medicine-dust {
          animation: medicine-dust 1.75s ease infinite alternate;
        }
        .animate-medicine-dust-delay-200 {
          animation: medicine-dust 1.75s ease -0.2s infinite alternate;
        }
        .animate-medicine-dust-delay-330 {
          animation: medicine-dust 1.75s ease -0.33s infinite alternate;
        }
        .animate-medicine-dust-delay-400 {
          animation: medicine-dust 1.75s ease -0.4s infinite alternate;
        }
        .animate-medicine-dust-delay-500 {
          animation: medicine-dust 1.75s ease -0.5s infinite alternate;
        }
        .animate-medicine-dust-delay-660 {
          animation: medicine-dust 1.75s ease -0.66s infinite alternate;
        }
        .animate-medicine-dust-delay-700 {
          animation: medicine-dust 1.75s ease -0.7s infinite alternate;
        }
        .animate-medicine-dust-delay-800 {
          animation: medicine-dust 1.75s ease -0.8s infinite alternate;
        }
        .animate-medicine-dust-delay-990 {
          animation: medicine-dust 1.75s ease -0.99s infinite alternate;
        }
        .animate-medicine-dust-delay-1110 {
          animation: medicine-dust 1.75s ease -1.11s infinite alternate;
        }
        .animate-medicine-dust-delay-1125 {
          animation: medicine-dust 1.75s ease -1.125s infinite alternate;
        }
        .animate-medicine-dust-delay-1275 {
          animation: medicine-dust 1.75s ease -1.275s infinite alternate;
        }
        .animate-medicine-dust-delay-1330 {
          animation: medicine-dust 1.75s ease -1.33s infinite alternate;
        }
        .animate-medicine-dust-delay-1400 {
          animation: medicine-dust 1.75s ease -1.4s infinite alternate;
        }
        .animate-medicine-dust-delay-1550 {
          animation: medicine-dust 1.75s ease -1.55s infinite alternate;
        }
      `}</style>
      <div className="w-[50vmin] h-[50vmin] flex items-center justify-center">
        <div className="w-[15vmin] h-[40vmin] flex items-center justify-center flex-col animate-spin-slow">
          <div className="medicine absolute w-[calc(100%-6vmin)] h-[calc(100%-12vmin)] flex items-center justify-center flex-wrap">
            {[...Array(20)].map((_, i) => (
              <i 
                key={i} 
                className={`
                  absolute rounded-full bg-[#47c]
                  ${i % 2 === 1 ? 'w-[1.5vmin] h-[1.5vmin] -mt-[5vmin] -mr-[5vmin] animate-medicine-dust-delay-200' : 
                  i % 3 === 2 ? 'w-[2vmin] h-[2vmin] mt-[4vmin] mr-[3vmin] animate-medicine-dust-delay-330' :
                  i === 3 ? 'w-[1vmin] h-[1vmin] -mt-[5vmin] mr-[4vmin] animate-medicine-dust-delay-400' :
                  i === 4 ? 'w-[1vmin] h-[1vmin] mt-[5vmin] -mr-[4vmin] animate-medicine-dust-delay-500' :
                  i === 5 ? 'w-[1vmin] h-[1vmin] mt-0 -mr-[3.5vmin] animate-medicine-dust-delay-660' :
                  i === 6 ? 'w-[1vmin] h-[1vmin] -mt-[1vmin] mr-[7vmin] animate-medicine-dust-delay-700' :
                  i === 7 ? 'w-[1vmin] h-[1vmin] mt-[6vmin] -mr-[1vmin] animate-medicine-dust-delay-800' :
                  i === 8 ? 'w-[1vmin] h-[1vmin] mt-[4vmin] -mr-[7vmin] animate-medicine-dust-delay-990' :
                  i === 9 ? 'w-[1vmin] h-[1vmin] -mt-[6vmin] mr-0 animate-medicine-dust-delay-1110' :
                  i >= 9 ? 'w-[0.6vmin] h-[0.6vmin]' : 'w-[1vmin] h-[1vmin]'}
                  ${i === 10 ? 'mt-[6vmin] mr-[6vmin] animate-medicine-dust-delay-1125' : 
                  i === 11 ? '-mt-[7vmin] -mr-[7vmin] animate-medicine-dust-delay-1275' :
                  i === 12 ? '-mt-[1vmin] mr-[3vmin] animate-medicine-dust-delay-1330' :
                  i === 13 ? '-mt-[3vmin] -mr-[1vmin] animate-medicine-dust-delay-1400' :
                  i === 14 ? '-mt-[1vmin] -mr-[7vmin] animate-medicine-dust-delay-1550' : 'animate-medicine-dust'}
                `}
              ></i>
            ))}
          </div>
          <div className="relative overflow-hidden w-[11vmin] h-[15vmin] rounded-t-[6vmin] bg-[#f7c340] before:content-[''] before:absolute before:w-[2vmin] before:h-[10vmin] before:bottom-0 before:right-[1.5vmin] before:bg-[#ffffff33] before:rounded-t-[1vmin] before:animate-shine after:content-[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:rounded-t-[6vmin] after:border-[1.75vmin] after:border-[#00000022] after:border-b-transparent after:border-b-0 after:border-t-[1vmin] after:animate-shadow"></div>
          <div 
            style={{ animation: 'pill-open 2s ease-in-out 0s infinite' }}
            className="relative overflow-hidden w-[11vmin] h-[15vmin] rounded-b-[6vmin] bg-[#d9680c] border-t-[1vmin] border-t-[#621e1a] before:content-[''] before:absolute before:w-[2vmin] before:h-[10vmin] before:top-0 before:right-[1.5vmin] before:bg-[#ffffff33] before:rounded-b-[1vmin] before:animate-shine after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-b-[6vmin] after:border-[1.75vmin] after:border-[#00000022] after:border-t-transparent after:border-t-0 after:border-b-[1vmin] after:animate-shadow"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LineLoader;