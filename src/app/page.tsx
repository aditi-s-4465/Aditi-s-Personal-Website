import Image from "next/image";
import Welcome from './components/Welcome/Welcome';
import About from "./components/About/About";
export default function Home() {
  return (
    <div className='app-container'>
      <Welcome/>
      <About/>
    </div>
  );
}
