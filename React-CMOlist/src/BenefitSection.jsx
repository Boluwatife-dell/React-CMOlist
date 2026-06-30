import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png";
import Icon3 from "./assets/icon3.png";

function BenefitSection() {
  return (
    <>
      <div className="benefit-section">
        <p className="benefit-title">
          Learn what other leading companies are doing, share
          <br />
          some wisdom and innovate fellow CMOs
        </p>
        <div className="benefit-cards container">
          <div className="benefit-card">
            <img
              src={Icon1}
              alt="picture of icon"
              className="benefit-card-icon"
            />
            <h2 className="benefit-card-title">World-class network of CMOs</h2>
            <p className="benefit-card-subtitle">
              Join heads of marketing from hyper-growth companies. Every member
              is carefully vetted.
            </p>
          </div>
          <div className="benefit-card">
            <img
              src={Icon2}
              alt="picture of icon"
              className="benefit-card-icon"
            />
            <h2 className="benefit-card-title">
              Strategic guides and playbooks
            </h2>
            <p className="benefit-card-subtitle">
              Access best practices shared by your peers, ranging from strategic
              planning to creating your operating cadence and preparing for an
              IPO.
            </p>
          </div>
          <div className="benefit-card">
            <img
              src={Icon3}
              alt="picture of icon"
              className="benefit-card-icon"
            />
            <h2 className="benefit-card-title">
              Shared directory of trusted vendors
            </h2>
            <p className="benefit-card-subtitle">
              Browse & search 1000s of proven consultants, agencies, and
              technology vendors in 80 categories, recommended by other CMOs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BenefitSection;
