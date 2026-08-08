"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Heart, Share2 } from "lucide-react";
import { portalConfig } from "@/data/portalConfig";
import Image from "next/image";

interface Video {
  id: string;
  videoUrl: string;
  title: string;
  category: string;
  likes: number;
  isYoutube?: boolean;
  isInstagram?: boolean;
}

export default function OzuShorts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const videos: Video[] = portalConfig.shortsVideos;
  const currentVideo = videos[currentIndex];
  
  const currentLikes = likes[currentVideo.id] || currentVideo.likes;

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleLike = () => {
    setLikes(prev => ({
      ...prev,
      [currentVideo.id]: currentLikes + 1
    }));
  };

  return (
    <div className="relative w-[300px] h-[600px] sm:h-[650px] bg-black rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] mx-auto border-[6px] border-slate-800 ring-4 ring-slate-200/50">
      
      {/* Phone Hardware Details (Dynamic Island + Buttons) */}
      <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50 pointer-events-none">
        {/* Dynamic Island */}
        <div className="w-32 h-7 bg-black rounded-b-3xl mt-0" />
      </div>
      
      <div className="absolute top-24 -left-[6px] w-[3px] h-12 bg-slate-700 rounded-l-md pointer-events-none z-50" />
      <div className="absolute top-40 -left-[6px] w-[3px] h-12 bg-slate-700 rounded-l-md pointer-events-none z-50" />
      <div className="absolute top-32 -right-[6px] w-[3px] h-16 bg-slate-700 rounded-r-md pointer-events-none z-50" />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentVideo.id}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="absolute inset-0"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.y < -50 || velocity.y < -500) nextVideo();
            else if (offset.y > 50 || velocity.y > 500) prevVideo();
          }}
        >
          {/* Video Container */}
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
            {currentVideo.isYoutube ? (
              <iframe
                src={currentVideo.videoUrl}
                className="w-full h-[calc(100%+45px)] border-0 pointer-events-none scale-[1.35]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : currentVideo.isInstagram ? (
              <iframe 
                src={currentVideo.videoUrl}
                className="w-full h-[calc(100%+45px)] border-0 pointer-events-none scale-[1.35]"
                allowTransparency={true}
                allow="encrypted-media"
                title={currentVideo.title}
                scrolling="no"
              />
            ) : currentVideo.videoUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? (
              <Image src={currentVideo.videoUrl} fill className="object-cover" alt={currentVideo.title} />
            ) : (
              <video
                src={currentVideo.videoUrl}
                className="w-full h-full object-cover"
                autoPlay={isPlaying}
                muted={isMuted}
                loop
              />
            )}
          </div>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none" />
          
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-max">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/10 shadow-lg whitespace-nowrap block w-max">
              {currentVideo.category}
            </span>
          </div>

          <div className="absolute bottom-8 left-6 right-20 text-white z-10">
            <h4 className="font-extrabold text-xl leading-tight mb-3 drop-shadow-md">{currentVideo.title}</h4>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm cursor-pointer hover:bg-white/30 transition-colors">
              <span className="animate-pulse">👆</span> Kaydırarak Devam Et
            </div>
          </div>

          {/* Floating Actions */}
          <div className="absolute right-4 bottom-8 flex flex-col gap-4 z-10">
            <button 
              onClick={handleLike}
              className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-110 active:scale-95"
            >
              <div className="p-3.5 bg-black/40 rounded-full backdrop-blur-md border border-white/10 text-white group-hover:bg-[#DF1934] group-hover:border-[#DF1934] shadow-lg transition-all duration-300">
                <Heart size={22} className="fill-transparent group-hover:fill-white" />
              </div>
              <span className="text-white text-xs font-bold drop-shadow-md">{currentLikes}</span>
            </button>
            
            <button
              className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-110 active:scale-95"
            >
              <div className="p-3.5 bg-black/40 rounded-full backdrop-blur-md border border-white/10 text-white group-hover:bg-blue-500 group-hover:border-blue-500 shadow-lg transition-all duration-300">
                <Share2 size={22} />
              </div>
              <span className="text-white text-xs font-bold drop-shadow-md">Paylaş</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3.5 bg-black/40 rounded-full backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-transform hover:scale-110 active:scale-95 shadow-lg mt-2"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3.5 bg-black/40 rounded-full backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-transform hover:scale-110 active:scale-95 shadow-lg"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
