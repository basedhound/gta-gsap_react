import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Outro = () => {
    useGSAP(() => {
    // Set initial state for the outro section
    // The final message starts off-screen above and fully transparent
    gsap.set(".final-message", {
      marginTop: "-100vh",
      opacity: 0,
    });

    // Create a scroll-tied timeline for the outro reveal
    const messageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-message", // Start the animation when this section enters view
        start: "top 30%", // Trigger point: 30% from the top
        end: "top 10%", // Ends slightly further down
        scrub: true, // Sync with scroll smoothly
      },
    });

    // 1. First, fade out the final video section
    messageTimeline.to(".final-content", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    // 2. Then, fade in the final message
    messageTimeline.to(".final-message", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        {/* Studio or game logo */}
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        {/* Release date with styled text */}
        <div>
          <h3 className="gradient-title">
            Coming <br /> May 26 <br /> 2026
          </h3>
        </div>

        {/* Platform logos */}
        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Outro;