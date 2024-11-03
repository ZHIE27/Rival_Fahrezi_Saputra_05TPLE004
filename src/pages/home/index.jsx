import React from "react";
import style from "./home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Home =  () => {
    return (
        <div className={` ${style.containerHome} position-fixed `}>
            <div className={`${style.homeContent} position-absolute  `}>
            <div className={` ${style.dashboardBg}`}>
            </div>
                <div className={`${style.wrap} wrap p-4 text-white`}>
                <h1 className="fs-4 mt-4">Sistem Informasi Manajemen Karyawan</h1>
                <h2 className="fs-5">Admin Dashboard</h2>
                </div>
            
        </div>
                <ul className={`${style.cardsDashboardUl} d-flex justify-content-center`}>
                    <li className={`${style.cardsLi} pt-4 shadow d-flex justify-content-center rounded m-4 bg-white position-relative`}>
                                <span className={`${style.customSpan} text-center rounded mx-2`}>
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                                <div className={`${style.teksMenu} d-flex flex-column`}>
                                    <p className="text-secondary">Data Pegawai <br />13</p>
                                    
                                </div>
                    </li>
                    <li className={`${style.cardsLi} pt-4 shadow d-flex justify-content-center rounded m-4 bg-white position-relative`}>
                                <span className={`${style.customSpan} text-center rounded mx-2`}>
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                                <div className={`${style.teksMenu} d-flex flex-column`}>
                                    <p className="text-secondary">Absensi Hari ini <br /> 11 May 2023<br />0</p>
                                    
                                </div>
                    </li>
                    <li className={`${style.cardsLi} pt-4 shadow d-flex justify-content-center rounded m-4 bg-white position-relative`}>

                                <span className={`${style.customSpan} text-center rounded mx-2`}>
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                                <div className={`${style.teksMenu} d-flex`}>
                                    <p className="text-secondary">Izin Menunggu Konfirmasi <br />0</p>
                                    
                        </div>
                    </li>
                    <li className={`${style.cardsLi} pt-4 shadow d-flex justify-content-center rounded m-4 bg-white position-relative`}>
                                <span className={`${style.customSpan} text-center rounded mx-2`}>
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                                <div className={`${style.teksMenu} d-flex flex-column`}>
                                    <p className={`${style.font} text-secondary`}>Lembur Menunggu Konfirmasi <br />0</p>
                                    
                                </div>
                    </li>

                </ul>
        </div>
    )
}

export default Home;