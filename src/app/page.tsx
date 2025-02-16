import { Login } from "./components/login/login";
import "./styles/home.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Image
      className="image"
      src="/cakto.png"
      alt="My image"  
      width={500}
      height={500}
    />
      <Login/>
    </div>
  );
}
