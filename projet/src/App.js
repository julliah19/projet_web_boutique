import './App.scss';
import { SideNavigation } from './container/SideNavigation';
import { NewUser } from './container/NewUser';
import { Welcome } from './container/Welcome';
import { ConsultHousingContainer } from './container/ConsultHousingContainer';
import { ConsultVisitContainer } from './container/ConsultVisitContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <SideNavigation/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Welcome/>}/>
          <Route exact path="/signup" element={<NewUser/>}/>
          <Route exact path="/consulthousing" element={<ConsultHousingContainer/>}/>
          <Route exact path="/consultvisit" element={<ConsultVisitContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
