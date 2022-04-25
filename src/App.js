import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import ExaminationsPage from './pages/ExaminationsPage';
import OrganizationsPage from './pages/OrganizationsPage';
import PatientsPage from './pages/PatientsPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
      </Routes>
      <Header/>
        <Routes>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path='/doctors' element={<DoctorsPage/>}/>
          <Route exact path='/examinations' element={<ExaminationsPage/>}/>
          <Route exact path='/organizations' element={<OrganizationsPage/>}/>
          <Route exact path='/patients' element={<PatientsPage/>}/>
          <Route exact path='/settings' element={<SettingsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


