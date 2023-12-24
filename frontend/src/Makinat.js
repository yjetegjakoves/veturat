import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Makinat() {

    const [makinat, setMakinat] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => {
                setMakinat(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/makinat/${id}`)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }

  return (
    <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>

      <div className = 'w-50 bg-white rounded p-3'>
            <Link to = '/create' className = 'btn btn-success'>Add +</Link>

            <table className = 'table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marka</th>
                        <th>Modeli</th>
                        <th>Viti</th>
                        <th>Kubikazha</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        makinat.map((s,index) => (
                            <tr key = {index}>
                                
                                <td>{s.ID_makinat}</td>
                                <td>{s.Marka_e_makines}</td>
                                <td>{s.Modeli_i_makines}</td>
                                <td>{s.Viti_i_prodhimit}</td>
                                <td>{s.Kubikazha}</td>
                                <td>
                                    <Link to = {`update/${s.ID_makinat}`} className = 'btn btn-primary'>Update</Link>

                                    <button className = 'btn btn-danger ms-2' onClick = {e => handleDelete(s.ID_makinat)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

      </div>
      
    </div>
  )
}

export default Makinat
