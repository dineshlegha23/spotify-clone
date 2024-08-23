import MainSection from "./components/MainSection";
import MobileFullPlayer from "./components/MobileFullPlayer";
import MobileMenu from "./components/MobileMenu";
import MobileMiniPlayer from "./components/MobileMiniPlayer";
import PlayerBar from "./components/PlayerBar";
import Sidebar from "./components/Sidebar";
import { usePlyerContext } from "./context/playerContext";

function App() {
  const { isMobilePlayerOpen } = usePlyerContext();
  return (
    <>
      <div className="text-white flex cursor-default">
        <Sidebar />
        <MainSection />
      </div>
      <PlayerBar />
      <MobileMiniPlayer />
      {isMobilePlayerOpen && <MobileFullPlayer />}
      <MobileMenu />
    </>
  );
}

export default App;
