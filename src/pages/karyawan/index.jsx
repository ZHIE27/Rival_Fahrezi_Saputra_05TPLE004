import React from "react";
import Dashboard from "../../components/dashboard";
import style from  "./karyawan.module.css";

const Karyawan = ()=> {


    return (
        <>
        <Dashboard></Dashboard>
        <div className={`${style.container} position-fixed shadow bg-white rounded end-0`}>
            <div className={`container-head-list d-flex justify-content-between mx-4 my-3`}>
                <p className="fw-semibold fs-5">Data  Karyawan</p>
                <button className="btn btn-primary rounded-pill">+ Tambah Karyawan</button>
            </div>
            <div className={`d-flex p-2 d-flex justify-content-between mx-4 my-3`}>
                <div className="wrap">
                <p>Show <select>
                    <option value="1">1</option>
                    </select>entries</p>
                </div>
                <div className="input-form d-flex">
                    <p>Search : </p>
                    <input type="text" className={`ms-1 ${style.search} rounded`}/>
                </div>
            </div>
            <div className={`${style.containerForm} p-4`}>
              <div className={`${style.tableWrapper}`}>

            <table className="table table-striped">
  <thead>
    <tr>
      {['No', 'Kode', 'Nama', 'Email', 'Alamat', 'Jabatan', 'Aksi'].map((item,id) =>{
        return (<>
          <th key={id}>{item}</th>
        </>)
      })}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>rivalfahrezi27@gmail.com</td>
      <td>Kp. Bulak Saga, RT 03/06, Kecamatan Gunung Sindur, Kabupaten Bogor</td>
      <td>Otto</td>
      <td>rivalfahrezi27@gmail.com</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
              </div>
        </div>

        </>
    )
}

export default Karyawan;