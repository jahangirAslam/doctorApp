import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Patients from './pages/Patients'
import AddPatient from './pages/AddPatient'
import AddDoctor from './pages/AddDoctor'
import AddType from './pages/AddType'
import Doctors from './pages/Doctors'
import Report from './pages/report'

import '../src/MainStyling/style.css';
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import LoginScreen from './pages/LoginScreen'
import { useState } from 'react'
import PatientList from './pages/PatientList'
import DoctorProfile from './pages/DoctorProfile'
import DoctorProfileData from './pages/DoctorProfileData'
import AppoinmentTable from './pages/AppoinmentTable'
import PrescriptionTable from './pages/PrescriptionTable'
import Invoice from './pages/Invoice'
import PatientProfile from './pages/PatientProfile'
import PatientProfileData from './pages/PatientProfileData'
import PatientAppoinmentTable from './pages/PatientAppoinmentTable'
import PatientPrescriptionTable from './pages/PatientPrescriptionTable'
import PatientInvoice from './pages/PatientInvoice'
import PatientMedicalTable from './pages/patientMedicalTable'
import ListType from './pages/ListType'


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
                        <Route path="listType" element={<ListType />} />
                        <Route path="Doctors" element={<Doctors />} />
                        <Route path="patient-entry" element={<Patients />} />
                        <Route path="report" element={<Report />} />
                        <Route path="patientList" element={<PatientList />} />
                        <Route path='doctorProfile' element={< DoctorProfile/>}/>
                        <Route path='doctorProfileData' element={< DoctorProfileData/>}/>
                        <Route path='appoinmentTable' element={<AppoinmentTable/>}/>
                        <Route path='prescriptionTable' element={<PrescriptionTable/>}/>
                        <Route path='invoice' element={<Invoice/>}/>
                        <Route path='patientProfile' element={< PatientProfile/>}/>
                        <Route path='patientProfileData' element={< PatientProfileData/>}/>
                        <Route path='patientappoinmentTable' element={<PatientAppoinmentTable/>}/>
                        <Route path='patientPrescriptionTable' element={<PatientPrescriptionTable/>}/>
                        <Route path='patientInvoice' element={<PatientInvoice/>}/>
                        <Route path='patientMedicalTable' element={<PatientMedicalTable/>}/>












                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App
