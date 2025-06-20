import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ComingSoon from "./ComingSoon";
import { useMaskSettings } from "../constants";

const Hero = () => {
  // We’re importing dynamic mask values depending on device size (mobile/tablet/desktop)
  // These values come from our custom hook: useMaskSettings()
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    // Set up initial states before any scroll happens

    // Start the mask-wrapper with its full size and starting position
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });
    // Hide the SVG mask logo off-screen and make it invisible
    gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });
    // Reset the entrance message for its later animation
    gsap.set(".entrance-message", { marginTop: "0vh" });

    // Create our scroll-triggered animation timeline
    // This timeline is pinned to the hero section and scrubs as we scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: 2.5,
        start: "top top",
        end: "+=200%",
        pin: true,
      },
    });

    // Define the animation flow

    // Fade out initial text and buttons (logo, trailer, play)
    // To select our targets, let's give .fade-out to the images that we want to animate
    tl.to(".fade-out", {
      opacity: 0,
      ease: "power1.inOut",
    })
      // Scale the background image smoothly
      .to(".scale-out", {
        scale: 1,
        ease: "power1.inOut",
      })
      // Animate mask size from huge to small (shrinking into place)
      .to(
        ".mask-wrapper",
        {
          maskSize: maskSize,
          ease: "power1.inOut",
        },
        "<" // a position parameter to overlap animations
      )
      // Reposition the mask to target the desired center point
      .to(
        ".mask-wrapper",
        {
          maskPosition: maskPos,
          ease: "power1.inOut",
        },
        "<"
      )
      // Once the transition is complete, we fade out the entire masked container
      .to(".mask-wrapper", {
        opacity: 0,
      })
      // Underneath that, we fade in the large overlay logo
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", {
              opacity: 0,
            });
          },
        },
        "<"
      )
      // And finally, we animate in our entrance message with a subtle radial mask reveal
      .to(
        ".entrance-message", // This is from the Comingsoon component
        {
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero-bg.webp" className="scale-out" />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>
      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
