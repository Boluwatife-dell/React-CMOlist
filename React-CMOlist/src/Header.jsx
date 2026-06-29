import Logo from "./assets/CMOList.webp";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="navigation">
          <li>
            <img src={Logo} alt="logo of CMOList" className="logo" />
          </li>
          <li>
            <a href="#" target="_blank" className="sign-in-btn">
              Sign in
            </a>
          </li>
        </nav>
      </header>
    </>
  );
}
export default Header;
