import React, { useState } from "react";
import style from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";




const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {

        if(isOpen == false){
            setIsOpen(true)
        } else{
            setIsOpen(false)
        }
    };

    return (
        <>
            <nav className={`navbar bg-primary shadow z-3 position-fixed ${style.navbarCustom}`}>
                        <button 
                            onClick={toggleMenu} 
                            className={`${style.customButton} z-3 btn btn-danger d-block`}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                <div className={` position-fixed flex-column top-0`}>
                    <div className={`${style.sideProfile} nav-brand d-flex shadow`}>
                        <img 
                            className={`p-2 ${style.customImageBrand}`} 
                            src="https://w7.pngwing.com/pngs/121/207/png-transparent-red-garena-logo-garena-rov-mobile-moba-league-of-legends-youtube-singapore-cd-game-electronics-text-thumbnail.png" 
                            alt="brand" 
                        />
                        <div className="wrap d-flex flex-column">
                            <h4 className="fs-6 mt-1 text-white">Universitas</h4>
                            <h3 className="fs-5 text-white">BUNG KARNO</h3>
                        </div>
                    </div>
                    <div className={`${style.sideBar}${isOpen ? style.open : ''}  bg-light position-fixed`}>

            <LeftProfile></LeftProfile>

                        <ul className={`${style.customUl} navbar-nav shadow text-center`}>
                            <li className={`${style.customList} m-2 ms-2 px-4 rounded nav-item my-4 d-flex p-1`}>
                                <span className={`${style.customSpan} mx-2`}>
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                                <a className={`${style.customA} nav-link rounded`} href="/">Dashboard</a>
                            </li>
                            <p className="fs-5 fw-bold">Menu Karyawan</p>
                                <li className={`${style.customList} m-2 px-4 ms-2 rounded nav-item my-2 d-flex p-1`}>
                                    <span className={`${style.customSpan} mx-2`}>
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <a className={`${style.customA} nav-link rounded`} href="/karyawan">Karyawan</a>
                                </li>
                                <li className={`${style.customList} m-2 px-4 ms-2 rounded nav-item my-2 d-flex p-1`}>
                                    <span className={`${style.customSpan} mx-2`}>
                                        <FontAwesomeIcon icon={faHouse} />
                                    </span>
                                    <a className={`${style.customA} nav-link rounded`} href="/jabatan">Jabatan</a>
                                </li>
                            
                        </ul>
                    </div>
                </div>
                <div className=" position-fixed end-0 me-4">
                    <img className={`rounded-circle ${style.customImageRightNav}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" alt="userImage" />
                </div>
            </nav>
        </>
    )
}

export default Navbar;


const LeftProfile = ()=>{
    return(
        <>
                                <div className="side-profile">
                            <div className="d-flex">
                                <img 
                                    className={`rounded-circle ms-4 m-2 ${style.customImageSideNav}`} 
                                    src="../../../public/img/pp.jpeg" 
                                    alt="User profile" 
                                />
                                <div className="wrap my-2">
                                    <h3 className="fs-6 fw-normal font-monospace">Rival Fahrezy</h3>
                                    <h4 className="fs-6">Administrator</h4>
                                </div>
                            </div>
                        </div>
        </>
    )
}