import MainSection from "./components/MainSection";
import PlayerBar from "./components/PlayerBar";
import Sidebar from "./components/Sidebar";
import { usePlyerContext } from "./context/playerContext";

function App() {
  return (
    <>
      <div className="text-white flex cursor-default">
        <Sidebar />
        <MainSection />
      </div>
      <PlayerBar />
    </>
  );
}

export default App;
