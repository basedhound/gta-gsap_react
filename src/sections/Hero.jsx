
const Hero = () => {

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

  {/* <ComingSoon /> */}
</section>
  )
}

export default Hero