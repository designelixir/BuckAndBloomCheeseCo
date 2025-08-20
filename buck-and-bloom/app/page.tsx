import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import VisitUs from "./components/VisitUs";
import Markets from "./components/Markets";
import Contact from "./components/Contact";

export default function Home() {
  return (
    
    <main className="flex-center-center flex-column">
     
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <VisitUs></VisitUs>
      <Markets></Markets>
      <Contact></Contact>
      
    </main>
  );
}
