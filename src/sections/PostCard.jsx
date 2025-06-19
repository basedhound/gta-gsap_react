import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const PostCard = () => {
  // We'll use this ref to control the video playback with GSAP later
  const videoRef = useRef();

    useGSAP(() => {
    // Create a scroll-synced timeline
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card", // This section acts as the trigger
        start: "top center", // When it reaches the middle of the viewport
        end: "bottom center", // Until the bottom hits the middle
        scrub: true, // Smooth scroll-to-animation sync
      },
    });

    // As usual, we will animate our video through scroll
    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration, // Scrub the entire video
        duration: 3, // Scroll duration
        ease: "power1.inOut",
      });
    };
  });

  return (
    <section className="post-card">
      {/* Background radial, gradient layer */}
      <div className="animated-gradient-bg" />

      {/* Main content card with hover effect */}
      <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700">
        {/* Overlay image that sits on top of video */}
        <img src="/images/overlay.webp" />

        {/* Scroll-scrubbed video */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        {/* Hover-animated CTA button */}
        <button className="group-hover:bg-yellow transition duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;