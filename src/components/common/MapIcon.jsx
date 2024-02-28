import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const MapIcon = () => {
  return (
    <Link to="https://www.google.com/maps/place/Rangugni+Auto+-+Pilar/@-34.4359003,-58.831415,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc9aefc3ae159:0xc6e078ef534e263a!8m2!3d-34.4359003!4d-58.8292263">
      <FaLocationArrow   size="30px" color="black" />
    </Link>
  );
};

export default MapIcon;