// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import dynamic from "next/dynamic";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize2,
//   RotateCcw,
//   Forward,
//   Rewind,
//   Settings,
// } from "lucide-react";

// const ReactPlayer = dynamic(() => import("react-player/lazy"), {
//   ssr: false,
// });

// const VideoPlayer = ({ url, captions = [] }) => {
//   const [isClient, setIsClient] = useState(false);
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.8);
//   const [muted, setMuted] = useState(false);
//   const [played, setPlayed] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [showSettings, setShowSettings] = useState(false);
//   const playerRef = useRef(null);
//   const timeInputRef = useRef(null);

//   const [captionsEnabled, setCaptionsEnabled] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handlePlayPause = () => {
//     setPlaying(!playing);
//   };

//   const handleVolumeChange = (e) => {
//     setVolume(parseFloat(e.target.value));
//   };

//   const handleToggleMute = () => {
//     setMuted(!muted);
//   };

//   const handleProgress = (state) => {
//     if (!isClient) return;
//     setPlayed(state.played);
//   };

//   const handleDuration = (duration) => {
//     if (!isClient) return;
//     setDuration(duration);
//   };

//   const handleSeekChange = (e) => {
//     if (!isClient) return;
//     const seekTo = parseFloat(e.target.value);
//     setPlayed(seekTo);
//     playerRef.current?.seekTo(seekTo);
//   };

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     if (hours > 0) {
//       return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
//         .toString()
//         .padStart(2, "0")}`;
//     }
//     return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
//   };

//   const handleRestart = () => {
//     if (!isClient) return;
//     playerRef.current?.seekTo(0);
//     setPlaying(true);
//   };

//   // Advanced controls
//   const handleForward = () => {
//     if (!isClient || !playerRef.current) return;
//     const currentTime = playerRef.current.getCurrentTime();
//     playerRef.current.seekTo(currentTime + 10);
//   };

//   const handleRewind = () => {
//     if (!isClient || !playerRef.current) return;
//     const currentTime = playerRef.current.getCurrentTime();
//     playerRef.current.seekTo(Math.max(0, currentTime - 10));
//   };

//   const handleTimeInput = (e) => {
//     e.preventDefault();
//     if (!isClient || !playerRef.current || !timeInputRef.current) return;

//     const timeString = timeInputRef.current.value;
//     const [minutes, seconds] = timeString.split(":").map(Number);

//     if (!isNaN(minutes) && !isNaN(seconds)) {
//       const seekTime = minutes * 60 + seconds;
//       if (seekTime <= duration) {
//         playerRef.current.seekTo(seekTime);
//         timeInputRef.current.value = "";
//       }
//     }
//   };

//   const playbackRates = [0.5, 1, 1.5, 2];

//   const handlePlaybackRateChange = (rate) => {
//     setPlaybackRate(rate);
//     setShowSettings(false);
//   };

//   const handleToggleCaptions = () => setCaptionsEnabled(!captionsEnabled);

//   if (!isClient) {
//     return (
//       <div className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
//         <div className="relative pt-[56.25%]" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
//       <div className="relative pt-[56.25%]">
//         <ReactPlayer
//           ref={(player) => (playerRef.current = player)}
//           className="absolute top-0 left-0"
//           width="100%"
//           height="100%"
//           url={url}
//           playing={playing}
//           volume={volume}
//           muted={muted}
//           playbackRate={playbackRate}
//           onProgress={handleProgress}
//           onDuration={handleDuration}
//           config={{
//             file: {
//               tracks: captionsEnabled
//                 ? captions.map((caption) => ({
//                     kind: "subtitles",

//                     src: caption.src,

//                     srcLang: caption.lang,

//                     default: caption.default,
//                   }))
//                 : [],
//             },
//           }}
//         />
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black bg-opacity-50">
//         <input
//           type="range"
//           min={0}
//           max={1}
//           step="any"
//           value={played}
//           onChange={handleSeekChange}
//           className="w-full h-1 mb-4 bg-gray-600 rounded-lg appearance-none cursor-pointer"
//         />

//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={handlePlayPause}
//               className="text-white hover:text-blue-500 transition-colors"
//             >
//               {playing ? <Pause size={24} /> : <Play size={24} />}
//             </button>

//             <button
//               onClick={handleRewind}
//               className="text-white hover:text-blue-500 transition-colors"
//               title="Rewind 10 seconds"
//             >
//               <Rewind size={24} />
//             </button>

//             <button
//               onClick={handleForward}
//               className="text-white hover:text-blue-500 transition-colors"
//               title="Forward 10 seconds"
//             >
//               <Forward size={24} />
//             </button>

//             <button
//               onClick={handleRestart}
//               className="text-white hover:text-blue-500 transition-colors"
//             >
//               <RotateCcw size={24} />
//             </button>

//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={handleToggleMute}
//                 className="text-white hover:text-blue-500 transition-colors"
//               >
//                 {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//               </button>
//               <input
//                 type="range"
//                 min={0}
//                 max={1}
//                 step="any"
//                 value={volume}
//                 onChange={handleVolumeChange}
//                 className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
//               />
//             </div>

//             <div className="text-white text-sm">
//               {formatTime(duration * played)} / {formatTime(duration)}
//             </div>

//             <form
//               onSubmit={handleTimeInput}
//               className="flex items-center space-x-2"
//             >
//               <input
//                 ref={timeInputRef}
//                 type="text"
//                 placeholder="MM:SS"
//                 className="w-20 px-2 py-1 text-sm bg-gray-700 text-white rounded"
//               />
//               <button
//                 type="submit"
//                 className="text-white hover:text-blue-500 px-2 py-1 text-sm"
//               >
//                 Jump
//               </button>
//             </form>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <button
//                 onClick={() => setShowSettings(!showSettings)}
//                 className="text-white hover:text-blue-500 transition-colors"
//               >
//                 <Settings size={24} />
//               </button>

//               {showSettings && (
//                 <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg shadow-lg p-2">
//                   <div className="text-white text-sm mb-2">Playback Speed</div>
//                   {playbackRates.map((rate) => (
//                     <button
//                       key={rate}
//                       onClick={() => handlePlaybackRateChange(rate)}
//                       className={`block w-full text-left px-3 py-1 text-sm ${
//                         playbackRate === rate ? "text-blue-500" : "text-white"
//                       } hover:bg-gray-700 rounded`}
//                     >
//                       {rate}x
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={() =>
//                 isClient && document.documentElement.requestFullscreen()
//               }
//               className="text-white hover:text-blue-500 transition-colors"
//             >
//               <Maximize2 size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

"use client";

// components/UniversalVideoPlayer.jsx
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

// Import all ReactPlayer supported players
import ReactPlayerYouTube from "react-player/youtube";
import ReactPlayerFile from "react-player/file";

const UniversalVideoPlayer = ({
  url,
  width = "100%",
  height = "100%",
  containerStyle = {},
  controls = true,
  light = false,
  playing = false,
  volume = 0.8,
  muted = false,
  playbackRate = 1.0,
  loop = false,
  pip = false,
  stopOnUnmount = true,
  showDownloadButton = true,
  onReady,
  onStart,
  onPlay,
  onPause,
  onEnded,
  onError,
}) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(playing);
  const [playerConfig, setPlayerConfig] = useState({});
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  // Helper functions to determine URL type and format
  const isYoutubeUrl = (url) => {
    return (
      url &&
      (url.includes("youtube.com") ||
        url.includes("youtu.be") ||
        url.includes("youtube-nocookie.com"))
    );
  };

  const isGoogleDriveUrl = (url) => {
    return url && url.includes("drive.google.com");
  };

  const isPikpakUrl = (url) => {
    return url && url.includes("pikpak.com");
  };

  const formatGoogleDriveUrl = (url) => {
    // Extract file ID from Google Drive URL
    const fileIdMatch = url.match(/[-\w]{25,}/);
    if (!fileIdMatch) return url;

    const fileId = fileIdMatch[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  const getFileType = (url) => {
    const extension = url.split(".").pop().toLowerCase();
    if (["mp4", "webm", "ogg", "mov"].includes(extension)) {
      return "video";
    } else if (["mp3", "wav", "ogg"].includes(extension)) {
      return "audio";
    }
    return "unknown";
  };

  useEffect(() => {
    if (!url) {
      setError("No video URL provided");
      setIsLoading(false);
      return;
    }

    try {
      let formattedUrl = url;
      let config = {};

      // Process YouTube URLs
      if (isYoutubeUrl(url)) {
        config = {
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              autoplay: playing ? 1 : 0,
            },
          },
        };
      }
      // Process Google Drive URLs
      else if (isGoogleDriveUrl(url)) {
        formattedUrl = formatGoogleDriveUrl(url);
      }
      // Process PikPak or other URLs
      else if (isPikpakUrl(url) || url.startsWith("http")) {
        // Most direct links should work with the file player
        config = {
          file: {
            forceVideo: getFileType(url) === "video",
            forceAudio: getFileType(url) === "audio",
            attributes: {
              crossOrigin: "anonymous",
            },
          },
        };
      }

      setVideoUrl(formattedUrl);
      setPlayerConfig(config);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error processing video URL:", err);
      setError("Failed to process video URL");
      setIsLoading(false);
    }
  }, [url, playing]);

  const handleToggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(containerRef.current);
    }
  };

  const handleDownload = () => {
    // Only attempt download for non-YouTube URLs
    if (!isYoutubeUrl(videoUrl)) {
      // Create a temporary anchor element
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = videoUrl.split("/").pop() || "video";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("YouTube videos cannot be downloaded directly from the player.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        Loading video player...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 py-4">{error}</div>;
  }

  return (
    <div
      ref={containerRef}
      className="video-player-container relative overflow-hidden"
      style={{
        width: width,
        height: height,
        aspectRatio: "16 / 9",
        ...containerStyle,
        justifyContent: "center",
        display: "flex",
        marginTop: 20,
      }}
    >
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        width="100%"
        height="100%"
        playing={isPlaying}
        controls={controls}
        light={light}
        volume={volume}
        muted={muted}
        playbackRate={playbackRate}
        loop={loop}
        pip={pip}
        stopOnUnmount={stopOnUnmount}
        config={playerConfig}
        onReady={(player) => {
          if (onReady) onReady(player);
        }}
        onStart={() => {
          if (onStart) onStart();
        }}
        onPlay={() => {
          setIsPlaying(true);
          if (onPlay) onPlay();
        }}
        onPause={() => {
          setIsPlaying(false);
          if (onPause) onPause();
        }}
        onEnded={() => {
          setIsPlaying(false);
          if (onEnded) onEnded();
        }}
        onError={(e) => {
          console.error("Player error:", e);
          setError("Failed to play video");
          if (onError) onError(e);
        }}
      />

      {showDownloadButton && !isYoutubeUrl(videoUrl) && (
        <button
          onClick={handleDownload}
          className="download-button absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded z-10 text-sm"
          style={{ display: controls ? "none" : "block" }}
        >
          Download
        </button>
      )}

      {!controls && (
        <div className="custom-controls absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleToggleFullscreen}>Fullscreen</button>
        </div>
      )}
    </div>
  );
};

export default UniversalVideoPlayer;
