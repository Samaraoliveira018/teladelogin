import { Login } from "./components/login/login";
import "./styles/home.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Login/>
    </div>
  );
}
