import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to="/">Top</Link> | <Link to="/home">Home</Link>
    </>
  );
};
