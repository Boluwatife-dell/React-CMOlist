import DropBox from "./assets/Dropbox.png";
import GooglePic from "./assets/Google.png";
import IntuitPic from "./assets/intuit.png";
import MicrosoftPic from "./assets/microsoft.png";
import WalmartPic from "./assets/walmart.png";
import AmazonPic from "./assets/amazon.png";

function FeaturedSection() {
  return (
    <>
      <div className="featured-section">
        <h3 className="featured-title">
          Developed in collaboration with marketing excutives from <br />
          world-class companies including
        </h3>

        <div className="featured-images">
          <div>
            <img className="featured-img" src={DropBox} alt="Dropbox image" />
          </div>
          <div>
            <img className="featured-img" src={GooglePic} alt="Google image" />
          </div>
          <div>
            <img className="featured-img" src={IntuitPic} alt="intuit image" />
          </div>
          <div>
            <img
              className="featured-img"
              src={MicrosoftPic}
              alt="microsoft image"
            />
          </div>
          <div>
            <img
              className="featured-img"
              src={WalmartPic}
              alt=" Walmart image"
            />
          </div>
          <div>
            <img className="featured-img" src={AmazonPic} alt="amazon image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default FeaturedSection;
