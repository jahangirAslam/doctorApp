import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import AddPatient from './pages/AddPatient'
import AddDoctor from './pages/AddDoctor'
import AddType from './pages/AddType'

import '../src/MainStyling/style.css';
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="patient" element={<AddPatient />} />
                    <Route path="doctor" element={<AddDoctor />} />
                    <Route path="type" element={<AddType />} />
                    <Route path="patient-entry" element={<Blank />} />
                    <Route path="report" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
