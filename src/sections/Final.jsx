import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Final = () => {
  // We'll control this video scrub with GSAP later
  const videoRef = useRef();

  useGSAP(() => {
    // initial state
    // The video container starts hidden and will fade in as we scroll
    gsap.set(".final-content", {
      opacity: 0,
    });

    // Pin the entire final section during scroll
    // This keeps the video fixed while we scroll through it
    gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top top",
        end: "90% top", // Ends before the user reaches the very bottom
        scrub: true,
        pin: true, // Locks the section in place
      },
    });

    // Fade and scale in the final content
    const fadeInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top 80%", // Start fade when the section is mostly visible
        end: "90% top", // End before the bottom scroll reaches
        scrub: true,
      },
    });

    // Animate both opacity and scale to reveal smoothly
    fadeInTimeline.to(".final-content", {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    // Scroll-play the video once loaded
    videoRef.current.onloadedmetadata = () => {
      fadeInTimeline.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<" // Starts at the same time as the fade-in
      );
    };
  });

  return (
    <section className="final">
      {/* Main content wrapper that fades in and scales */}
      <div className="final-content size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default Final;