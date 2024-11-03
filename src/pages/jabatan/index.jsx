import React from "react";
import style from "./jabatan.module.css"

const Jabatan = ()=>{
    return (
        <>
            <div className={`${style.contJabatan} position-fixed shadow p-4`}>
                <ul className={`${style.slug} d-flex`}>
                    <li> Forms /</li>
                    <li> Home /</li>
                    <li> Karyawan /</li>
                    <li> Tambah Data Karyawan</li>
                </ul>
                <h2 className="fs-5 ms-3">Tambah Karyawan</h2>
                <hr />
                <div className={`${style.formWrapper} p-2`}>

                <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Nama Lengkap</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">Nama Asli Ya cuyyyyy</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Jenis Kelamin</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="emailHelp" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">Email Uhuyyyy</div>

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">No. Hp</label>
        <input type="number" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Alamat</label>
        <input type="text" className={`${style.areaInput} mx-2`} id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Jabatan</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Divisi</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className={`${style.button} btn mb-4 text-white me-2`}>Submit</button>
      <button type="submit" className={`${style.button} btn mb-4 text-white bg-danger`}>Batal</button>
    </form>
                </div>
            </div>        
        /</>
    )
}

export default Jabatan;