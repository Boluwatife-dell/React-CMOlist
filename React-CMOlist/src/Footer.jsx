function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <p>&copy; {currentYear} CMOList, inc</p>
          <div className="footer-socials">
            <a href="#">
              <ion-icon name="logo-x"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">User Agreement</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Copyright Policy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </div>
      </div>
    </>
  );
}
export default Footer;
