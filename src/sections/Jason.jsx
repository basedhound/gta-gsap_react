import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Jason = () => {
  useGSAP(() => {
    //  Set initial layout position
    // The Jason section starts higher up in the scroll space to create an overlap reveal
    gsap.set(".jason", {
      marginTop: "-80vh", // This brings the section into view earlier as we scroll
    });

    // Create a timeline to fade out the previous section (first video)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason", // Starts when Jason enters the viewport
          start: "top 90%", // The animation will happen when the top of the Jason hits the 90% from top of the viewport
          end: "10% center", // Ends near the middle
          scrub: 2, // Sync animation with scroll with custome value
        },
      })
      .to(".first-vd", {
        opacity: 0, // Fade out the pinned video
        duration: 1,
        ease: "power1.inOut", // Smooth easing
      });

    // Parallax animation on Jason’s stacked images
    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center", // Starts when Jason hits mid viewport
          end: "80% center", // Ends toward the bottom
          scrub: 2,
        },
        y: -300, // Move the entire image group up as we scroll to create a parallax effect
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    ); // This happens alongside the fade, not after
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>
          Jason grew up around grifters and crooks. After a stint in the Army
          trying to shake off his troubled teens, he found himself in the Keys
          doing what he knows best, working for local drug runners. It might be
          time to try something new.
        </p>
        <div className="jason-2">
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
