import "./Footer.css";
import InstagramLogo from "../common/InstagramIcon";
import MapIcon from "../common/MapIcon";
import FacebookIcon from "../common/FacebookIcon";

export const Footer = () => {
  return (
    <footer>
      <div class="logo">
        <a href="/"><img
          src="https://res.cloudinary.com/dwjthfjls/image/upload/v1709079630/ranguni.png"
          alt=""
        /></a>
        
      </div>
      <div class="redes-sociales">
        <InstagramLogo />
        <MapIcon />
        <FacebookIcon />
      </div>
    </footer>
  );
};
