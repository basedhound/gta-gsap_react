
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const SecondVideo = () => {
  // We'll use this ref to control the video’s playback later
  const videoRef = useRef();

  useGSAP(() => {
  // Prepare Lucia Section for Entrance
  // We shift the whole section up and make it invisible initially
  // This gives us a smooth fade-in effect once the section scrolls into view
  gsap.set(".lucia", {
    marginTop: "-60vh",
    opacity: 0,
  });

  // Create a scroll-pinned video timeline
  const videoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".lucia", // Start animating when .lucia hits the top of viewport
      start: "top top",
      end: "bottom top", // End the animation when bottom of .lucia reaches top
      scrub: 2, // Smooth scroll-linked timing
      pin: true, // Keeps the video fixed during scroll
    },
  });

  // 1. Fade in the Lucia section
  videoTimeline.to(".lucia", {
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  });

  // 2. Animate the video’s playback using scroll (once it's fully loaded)
  videoRef.current.onloadedmetadata = () => {
    videoTimeline.to(
      videoRef.current,
      {
        currentTime: videoRef.current.duration, // Play the full video by scrubbing
        duration: 3,
        ease: "power1.inOut",
      },
      "<" // Start this at the same time as the fade-in
    );
  };
});

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{
            objectPosition: "30% 0%", 
            // We center the most important focal area of the video
          }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;