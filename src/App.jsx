import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import AddPatient from './pages/AddPatient'
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
                    <Route path="products" element={<Blank />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App