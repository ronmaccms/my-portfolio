"use client";

import { navItems } from "@/data";
import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from '../components/Hero';
import Grid from '@/components/Grid';
import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Game1 from "@/components/Game1";

const Home = () => {
  return (
    <main className="overflow-clip relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className={""} />
        {/* <Game1 />
        <Game1 /> */}
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;