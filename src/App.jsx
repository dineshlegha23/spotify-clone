import MainSection from "./components/MainSection";
import PlayerBar from "./components/PlayerBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="text-white flex">
        <Sidebar />
        <MainSection />
      </div>
      <PlayerBar />
    </>
  );
}

export default App;
