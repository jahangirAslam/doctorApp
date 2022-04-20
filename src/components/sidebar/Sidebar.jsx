import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'
import logod from '../../assets/images/logod.jpeg'
import { Grid } from '@mui/material'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



const Sidebar = ({ isUserFun }) => {
    // isUserFun()

    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const [isLinkShow, setIsLinkShow] = useState(false);
    const [linkShow, setLinkShow] = useState(false);
    const [show, setShow] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [patient, setPatient] = React.useState(false);
    const [doctor, setDoctor] = React.useState(false);
    const [report, setReport] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const addPatient=()=>{
        setPatient(!patient);

    }
    const addDoctor=()=>{
        setDoctor(!doctor);

    }
    const addReport=()=>{
        setReport(!report);

    }



    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])




    const logout = () => {
        isUserFun("logout")
    }


    const closeSidebar = () => {
        setIsLinkShow(false)
        setLinkShow(false);
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar' style={{ background: "dodgerblue", width: "333px" }}>
            <div className="sidebar__logo">
                <img src={logod} alt="img" width="200px" height="100px" />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }


                


               

                {/* Add Doctors */}
                
                    
                        <List
                            sx={{ width: '100%', maxWidth: 330, }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className='dropdownmenuText' onClick={handleClick}>
                                {/* <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> */}
                                <ListItemText className='dropdownmenuText' >
                                    <p> Doctors </p>
                                </ListItemText>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                            <Link to='/doctor' >

                                                <p>  Add Doctors </p>
                                            </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                            <Link to='/Doctors'  >
                                                <p> Doctor List </p>
                                            </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                            </Collapse>
                        </List>
                   


                {/* Add Patient  */}
                <Grid
                    container
                    direction='row'

                >
                    <Grid
                        item xs={12}
                    >

                        <List
                            sx={{ width: '100%', maxWidth: 333, }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className='dropdownmenuText' onClick={addPatient}>
                                {/* <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> */}
                                <ListItemText className='dropdownmenuText' >
                                    <p> Patient </p>
                                </ListItemText>
                                {patient ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={patient} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                            <Link to='/patient' >

                                                <p>  Add Patient </p>
                                            </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                            <Link to='/patientList'  >
                                                <p>  Patient List </p>
                                            </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                </Grid>


                {/* Add Type  */}

                <Grid
                    container
                    direction='row'

                >
                    <Grid
                        item xs={12}
                    >

                        <List
                            sx={{ width: '100%', maxWidth: 333, }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className='dropdownmenuText' onClick={addDoctor} >
                                {/* <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> */}
                                <ListItemText className='dropdownmenuText' >
                                    <p> Type </p>
                                </ListItemText>
                                {doctor ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={doctor} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                            <Link to='/type'  >

                                                <p>  Add Type </p>
                                            </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                        <Link to='/listType' >
                                        <p> List Type </p>
                                    </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                </Grid>

                {/* Reports */}



                  <Grid
                    container
                    direction='row'

                >
                    <Grid
                        item xs={12}
                    >

                        <List
                            sx={{ width: '100%', maxWidth: 333, }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className='dropdownmenuText' onClick={addReport}>
                                {/* <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> */}
                                <ListItemText className='dropdownmenuText' >
                                    <p> Reports </p>
                                </ListItemText>
                                {report ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={report} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                            <Link to='/patient-entry'  >

                                                <p> Create Invoice </p>
                                            </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                                        <ListItemText className='dropdownmenuText' >
                                        <Link to='/report'  >
                                        <p> Invoice List </p>
                                    </Link>

                                        </ListItemText>
                                    </ListItemButton>

                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                </Grid>











                <div onClick={logout} className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>

                    </div>
                    <div className="sidebar__menu__item__txt">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
