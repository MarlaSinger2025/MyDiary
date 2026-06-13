import { useState } from "react";

import EntryOverview from "./components/EntryOverview";
import Header from "./components/Header";
import AddEntryModal from "./components/AddEntryModal";

const App = () => {

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header openModal={() => setModal(true)}  />
        {modal && (
            <AddEntryModal openModal={setModal} />
        )}

      <EntryOverview />
    </div>
  )
};

export default App;