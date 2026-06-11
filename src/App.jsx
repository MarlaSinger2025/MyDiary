import EntryOverview from "./components/EntryOverview";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-slate-600 text-white min-h-screen">
      <Header />
      <EntryOverview />
    </div>
  )
};

export default App;