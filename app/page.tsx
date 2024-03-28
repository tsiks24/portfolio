import Image from "next/image";
import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Encryption from "./components/main/Encryption";
import Contact from "./components/main/Contact";
import Project from "./components/main/Project";


export default function Home() {
  return (
        <main className = 'h-full w-full'>
          <div className='flex flex-col md:pt-0 pt-[100px] gap-20'>
                <Hero/>
                <Skills/>
                <Encryption/>
                <Project/>
          </div>
        </main>
  );
}
