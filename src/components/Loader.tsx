import React, { useEffect } from "react";

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const video = document.getElementById('loader-video') as HTMLVideoElement;
    
    if (video) {
      video.addEventListener('ended', () => {
        // Add a small delay after the video ends before triggering the completion
        setTimeout(onLoadingComplete, 300);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', onLoadingComplete);
      }
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-screen h-screen">
        <video
          id="loader-video"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src="/Assets/loader - Copy.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Loader; 