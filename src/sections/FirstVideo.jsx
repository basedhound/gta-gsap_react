import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FirstVideo = () => {
  // We use this ref to control video playback using GSAP’s .to() method
  const videoRef = useRef();

  useGSAP(() => {
    // Set initial state
    // The video section starts off-screen above the viewport with 0 opacity.
    gsap.set(".first-vd-wrapper", {
      marginTop: "-150vh",
      opacity: 0,
    });

    // Create a scroll-triggered timeline
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper", // When this section enters the viewport..., so this is our triggered target
        start: "top top", // from the top of the page
        end: "+=200% top", // over the course of 200% scroll
        scrub: true, // we sync animation with scroll position.
        pin: true, // Keep this section fixed while scrolling
      },
    });

    // Animate in sequence

    // 1. Fade out the hero section as this new section comes in
    videoTimeline.to(".hero-section", {
      delay: 0.5, // slight delay before fading
      opacity: 0,
      ease: "power1.inOut",
    });

    // 2. Fade in the video wrapper itself
    videoTimeline.to(".first-vd-wrapper", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    // Animate the video playback
    // Once the video is fully loaded and we know its duration
    videoRef.current.onloadedmetadata = () => {
      // we animate the video's currentTime from 0 to its end, over 3s
      videoTimeline.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<" // Start this animation at the same time as the last `.to()`
      );
    };
  }, []);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        />
      </div>
    </section>
  );
};

export default FirstVideo;