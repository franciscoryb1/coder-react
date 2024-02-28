import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";


const FacebookIcon = () => {
  return (
    <Link to="https://www.facebook.com/RangugniAuto">
      <FaFacebookF    size="30px" color="black" />
    </Link>
  );
};

export default FacebookIcon;