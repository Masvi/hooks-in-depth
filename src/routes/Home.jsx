import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-links">
      <Link className="home-link" to="/useRef">
        useRef
      </Link>
    </div>
  );
}
