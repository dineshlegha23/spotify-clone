import MainSection from "./components/MainSection";
import MobileMenu from "./components/MobileMenu";
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
      <MobileMenu />
    </>
  );
}

export default App;
