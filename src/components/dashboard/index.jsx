import React from "react";
import style from "./dashboard.module.css"


const Dashboard = ()=>{
    return (<>
        <div className={`position-fixed ${style.containerHome}`}>
        <div className={`${style.homeContent} position-absolute  `}>
            <div className={` ${style.dashboardBg}`}>
            </div>
                <div className={`${style.wrap} wrap p-4 text-white`}>
                <h1 className="fs-4 mt-4">Sistem Informasi Manajemen Karyawan</h1>
                <h2 className="fs-5">Dashboard</h2>
                </div>
            
        </div>
        </div>
    
    </>)
}

export default Dashboard;