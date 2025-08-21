import Link from "next/link";
import { GoHome } from "react-icons/go";
import { MdMovie } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default function BottomNavbar() {
  return (
    <nav style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: "rgba(24, 24, 27, 0.95)",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px 0",
      zIndex: 100,
      boxShadow: "0 -2px 12px rgba(0,0,0,0.2)",
      borderTop: "2px solid #F5B727"
    }}>
      <Link href="/" style={{ color: "#F5B727", textAlign: "center", fontSize: 24 }} title="Home">
        <GoHome />
      </Link>
      <Link href="/movies" style={{ color: "#F5B727", textAlign: "center", fontSize: 24 }} title="Movies">
        <MdMovie />
      </Link>
      <Link href="/new_popular" style={{ color: "#F5B727", textAlign: "center", fontSize: 24 }} title="Trending">
        <BiTrendingUp />
      </Link>
      <Link href="/profile" style={{ color: "#F5B727", textAlign: "center", fontSize: 24 }} title="Profile">
        <FaUser />
      </Link>
    </nav>
  );
}
