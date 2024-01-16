import Navbar from "../src/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/navbar/Home";
import Benefits from "./scenes/navbar/Benefits";
import OurClasses from "./scenes/navbar/OurClasses"
function App() {

  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
   <div className='app bg-gray-20'>
    <Navbar 
    isTopOfPage = {isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}/>
    <Home setSelectedPage={setSelectedPage}/>
    <Benefits setSelectedPage={setSelectedPage}/>
    <OurClasses setSelectedPage={setSelectedPage}/>

   </div>
  )
}

export default App
