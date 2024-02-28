import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <>
      <header class="header-outer">
        <div class="header-inner responsive-wrapper">
          <div class="header-logo">
            <Link to={"/"}>
              <img src="https://res.cloudinary.com/dwjthfjls/image/upload/v1709079630/ranguni.png" />
            </Link>
          </div>

          <nav class="header-navigation">
            <Link to="/">Todas</Link>
            <Link to="/category/camionetas">Camionetas</Link>
            <Link to="/category/autos">Autos</Link>
            <Link to="/category/motos">Motos</Link>
            <CartWidget />
          </nav>
        </div>
      </header>
    </>
  );
};
