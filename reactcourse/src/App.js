import DynamicCss from "./DynamicCss/DynamicCss";
import Event from "./Topics/Event";
import SetState from "./Topics/SetState";
import Variables from "./Topics/Variables";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Customer from "./Customer/Customer";
import ParentComp from "./Reuseable Comp/ParentComp";
import NewHooks from "./newHooks/NewHooks";
import DashValue from "./context/DashValue";
import AcronymGenerator from "./ReactTask/AcronymGenerator";
import CountEventNumber from "./ReactTask/CountEventNumber";
import CountNegative from "./ReactTask/CountNegative";
import ReactTask from "./ReactTask/ReactTask";
import NavBar from "./NavBar/NavBar";
import CountVowel from "./ReactTask/CountVowel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        {/*  ROUTES */}
        <Routes>
          <Route path="/ReactTask" element={<ReactTask />}>
            <Route path="variable" element={<Variables />} />
            <Route path="Event" element={<Event />} />
            <Route path="SetState" element={<SetState />} />
            <Route path="DynamicCss" element={<DynamicCss />} />
            <Route path="cutomer" element={<Customer />} />
            <Route path="ParentComp" element={<ParentComp />} />
            <Route path="NewHooks" element={<NewHooks />}></Route>
            <Route path="DashValue" element={<DashValue />}></Route>
            <Route path="AcronoymStr" element={<AcronymGenerator />}></Route>
            <Route path="CountEvent" element={<CountEventNumber />}></Route>
            <Route path="CountNegative" element={<CountNegative />}></Route>
            <Route path="CountVowel" element={<CountVowel />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
