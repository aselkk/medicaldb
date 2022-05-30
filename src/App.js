import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom'
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import ExaminationsPage from './pages/ExaminationsPage';
import OrganizationsPage from './pages/OrganizationsPage';
import PatientsPage from './pages/PatientsPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import PatientPage from './pages/PatientPage';

function App() {  

  const location = useLocation()
  const currlocation = location.pathname

  
  return (
    <div className="App">
      {currlocation === '/' ? null : <Header/>}
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path='/doctors' element={<DoctorsPage/>}/>
          <Route exact path='/examinations' element={<ExaminationsPage/>}/>
          <Route exact path='/organizations' element={<OrganizationsPage/>}/>
          <Route exact path='/patients' element={<PatientsPage/>}/>
          <Route exact path='/settings' element={<SettingsPage/>}/>
          <Route exact path='/patient/:id' element={<PatientPage/>}/>
        </Routes>
    </div>
  );
}

export default App;


