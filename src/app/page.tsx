'use client';
import { useRef} from "react";
import Welcome from './components/Welcome/Welcome';
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
export default function Home() {
  const myRef = useRef<HTMLDivElement>(null);
  const scrollCallback = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <Welcome scrollCallback={scrollCallback} />
      <About refprops={myRef}/>
      <Menu/>
      <Contact/>
    </div>
  );
}
