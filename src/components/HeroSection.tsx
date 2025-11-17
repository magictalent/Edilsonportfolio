import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 md:py-36 bg-gradient-to-br from-secondary/30 via-[#25084a] to-slate-900"
    >
      {/* Animated blobs/background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-500 via-fuchsia-400/60 to-blue-400 rounded-full blur-3xl opacity-40 animate-blob1"/>
        <div className="absolute top-1/3 -right-36 w-80 h-80 bg-gradient-to-tr from-blue-400 via-purple-700/60 to-pink-500 rounded-full blur-2xl opacity-40 animate-blob2"/>
        <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-gradient-to-tr from-pink-500 via-fuchsia-600/50 to-purple-400 rounded-full blur-2xl opacity-30 animate-blob3"/>
      </div>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 px-4">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-700 via-blue-600 to-blue-500 px-4 py-1 rounded-full mb-5 shadow-lg shadow-purple-600/20">
            <span className="text-xs font-semibold text-white tracking-wide">Available for freelance & consulting</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 tracking-tight leading-tight md:leading-tight mb-4 drop-shadow-xl">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Edilson Novais
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl text-slate-300 font-medium mb-6 tracking-wide">
            Senior Full-Stack Developer, Mobile & AI Engineer
          </h2>
          <p className="text-slate-300/90 leading-relaxed text-[1.1rem] md:text-lg max-w-xl mb-8">
            Results-driven engineer with <span className="font-semibold text-fuchsia-400/90">10+ years</span> of experience designing and building scalable, high-performance web and mobile applications.<br/>
            Passionate about <span className="text-blue-400 font-semibold">intelligent automation</span> and <span className="text-purple-400 font-semibold">user-focused solutions</span>.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <a href="#contact" className="w-full md:w-auto">
              <Button className="w-full md:w-auto bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white shadow-lg hover:from-fuchsia-400 hover:to-blue-400 hover:scale-[1.03] transition-transform duration-150">
                Contact Me
              </Button>
            </a>
            <a href={`assets/edilson_novais_resume.pdf`} download="Edilson_Novais_Resume.pdf" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="w-full md:w-auto border-slate-500/60 text-slate-100 hover:bg-secondary/30 hover:border-fuchsia-400/70 transition"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        {/* Right Avatar */}
        <div className="flex-shrink-0 mt-12 md:mt-0 flex items-center justify-center relative">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-400 via-blue-400 to-purple-600 opacity-50 blur-2xl pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-500" />
            <img
              src="/edilson.png"
              alt="Portrait of Edilson Novais"
              className="w-44 h-44 md:w-64 md:h-64 rounded-full object-cover border-4 border-fuchsia-400/60 shadow-2xl bg-secondary/30 group-hover:scale-[1.04] transition-transform duration-300"
            />
            <div className="absolute bottom-2 right-2 rounded-xl px-3 py-1.5 flex items-center bg-gradient-to-r from-fuchsia-700/80 via-fuchsia-500/70 to-blue-700/80 shadow-md shadow-fuchsia-800/10">
              <span className="text-xs text-slate-100 font-bold tracking-wide">AI x Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
      {/* Some subtle floating decorations */}
      <style jsx>{`
        .animate-blob1 {
          animation: blobFloat 14s ease-in-out infinite;
        }
        .animate-blob2 {
          animation: blobFloat2 16s ease-in-out infinite;
        }
        .animate-blob3 {
          animation: blobFloat3 19s ease-in-out infinite;
        }
        @keyframes blobFloat {
          0%, 100% { transform: translate(0,0) scale(1);}
          33% { transform: translate(30px, -25px) scale(1.07);}
          66% { transform: translate(-32px, 20px) scale(0.97);}
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0,0) scale(1);}
          24% { transform: translate(-16px, 33px) scale(0.98);}
          62% { transform: translate(32px, -30px) scale(1.10);}
        }
        @keyframes blobFloat3 {
          0%, 100% { transform: translate(0,0) scale(1);}
          40% { transform: translate(15px, -15px) scale(1.04);}
          70% { transform: translate(-15px, 18px) scale(1.01);}
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
