import HeroImage from "./assets/illustration-removebg-preview.png";
function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-details">
          <h1 className="hero-title">
            The private network for the world's top CMOs to learn from each
            other
          </h1>
          <p className="hero-subtitle">
            Application only. Limited to one CMOs / head of marketing per
            company.
          </p>
          <a href="sign-up.html" target="_blank" className="membership-btn">
            Apply for membership
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImage}
            alt="illustration"
            className="illustration-img"
          />
        </div>
      </div>
    </>
  );
}
export default HeroSection;
