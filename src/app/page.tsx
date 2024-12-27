import Image from "next/image";
import Welcome from './components/Welcome/Welcome';
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
export default function Home() {
  return (
    <div>
      <Welcome/>
      <About/>
      <Menu/>
    </div>
  );
}
