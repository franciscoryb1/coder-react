import CartWidget from "../common/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Infinity Computacion</h1>
      <ul className="navbar-categories">
        <li>Televisores</li>
        <li>Celulares</li>
        <li>Notebooks</li>
      </ul>
      <div>
        <h4>Carrito</h4>
        <CartWidget />
      </div>
    </div>
  );
};
