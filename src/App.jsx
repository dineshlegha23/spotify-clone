import MainSection from "./components/MainSection";
import MobileMenu from "./components/MobileMenu";
import MobileMiniPlayer from "./components/MobileMiniPlayer";
import PlayerBar from "./components/PlayerBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="text-white flex cursor-default">
        <Sidebar />
        <MainSection />
      </div>
      <PlayerBar />
      <MobileMiniPlayer />
      <MobileMenu />
    </>
  );
}

export default App;
