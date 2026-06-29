import Logo from "./assets/CMOList.webp";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="navigation">
          <li className>
            <img src={Logo} alt="logo of CMOList" class="logo" />
          </li>
          <li>
            <a href="#" target="_blank" class="sign-in-btn">
              Sign in
            </a>
          </li>
        </nav>
      </header>
    </>
  );
}
export default Header;
