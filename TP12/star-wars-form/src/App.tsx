import { useState } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import SelectedPerson from "./components/selectedPerson";

function App() {
  const [selectedPerson, setSelectedPerson] = useState();

  return (
    <>
    {!selectedPerson ?(<PersonList onSelectPerson={setSelectedPerson}></PersonList>):
    (<SelectedPerson pers={selectedPerson}></SelectedPerson>)}
    </>
  );
}

export default App;
