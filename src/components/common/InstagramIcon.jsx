import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

const InstagramLogo = () => {
  return (
    <Link to="https://www.instagram.com/rangugniauto/">
      <RiInstagramFill  size="30px" color="black"/>
    </Link>
  );
};

export default InstagramLogo;