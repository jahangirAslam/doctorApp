import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'
import logod from '../../assets/images/logod.jpeg'
import { Grid } from '@mui/material'


const Sidebar = ({ isUserFun }) => {
    // isUserFun()

    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const [isLinkShow, setIsLinkShow] = useState(false);
    const [linkShow, setLinkShow] = useState(false);



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
        <div className='sidebar' style={{ background: "dodgerblue" }}>
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

<div className="sidebar__menu__item" onMouseEnter={() => setIsLinkShow(true)} onMouseLeave={() => setIsLinkShow(false)} >
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-receipt' ></i>
                    </div>
                    <Grid container direction="row" >

                        {isLinkShow ?
                            <div>
                                <Grid item xs={12} className="sidebar__menu__item__txt">
                                    <Link to='/patient' onClick={closeSidebar}  >
                                        <p>Add Patient</p>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} className="sidebar__menu__item__txt">
                                    <p>List Patient</p>
                                </Grid>
                            </div>
                            :
                            <Grid item xs={12} className="sidebar__menu__item__txt">
                                Patient
                            </Grid>}


                    </Grid>

                </div>


                <div className="sidebar__menu__item" onMouseEnter={() => setLinkShow(true)} onMouseLeave={() => setLinkShow(false)}>

                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-home-alt'></i>
                    </div>

                    <Grid
                        container direction="row" >
                        {linkShow ?
                            <div>

                                <Grid item xs={12} className="sidebar__menu__item__txt"  >
                                    <Link to='/doctor'  onClick={closeSidebar} >

                                        <p>  Add Doctors </p>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} className="sidebar__menu__item__txt">
                                    <Link to='/Doctors'  onClick={closeSidebar}  >
                                        <p> List Doctors </p>
                                    </Link>
                                </Grid>
                            </div>
                            :

                            <Grid item xs={12} className="sidebar__menu__item__txt">
                                <p> Doctors </p>
                            </Grid>
                        }
                    </Grid>




                </div>








                
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
