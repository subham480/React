import logoImg from "url:../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logoImg} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
