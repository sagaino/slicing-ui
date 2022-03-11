import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
