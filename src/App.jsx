import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Patients from './pages/Patients'
import AddPatient from './pages/AddPatient'
import AddDoctor from './pages/AddDoctor'
import AddType from './pages/AddType'
import Doctors from './pages/Doctors'


import '../src/MainStyling/style.css';
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import LoginScreen from './pages/LoginScreen'
import { useState } from 'react'

function App() {

    const [isUserValid, setIsUserValid] = useState(false);

    const isUserFun = (check) => {
        setIsUserValid(true);
        if(check === "logout"){
            
            setIsUserValid(false);

        }
        
    }








    if (!isUserValid) {
        return (
            <div>
                <LoginScreen isUserFun={isUserFun} />
            </div>
        )
    } else {


        return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout isUserFun={isUserFun} />}>
                        <Route index element={<Dashboard />} />
                        <Route path="patient" element={<AddPatient />} />
                        <Route path="doctor" element={<AddDoctor />} />
                        <Route path="type" element={<AddType />} />
                        <Route path="Doctors" element={<Doctors />} />
                        <Route path="patient-entry" element={<Patients />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App
