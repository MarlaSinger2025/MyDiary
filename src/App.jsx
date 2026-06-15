import { useState } from "react";

import EntryOverview from "./components/EntryOverview";
import Header from "./components/Header";
import AddEntryModal from "./components/AddEntryModal";
import Footer from "./components/Footer";

const App = () => {

  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col"> 
      <Header openModal={() => setModal(true)}  />
        {modal && (
            <AddEntryModal openModal={setModal} />
        )}
        <main className="flex-1">
      <EntryOverview />
      </main>
      <Footer />
    </div>
  )
};

export default App;