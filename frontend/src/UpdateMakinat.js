import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateMakinat() {

  const [marka, setMarka] = useState('');
  const [modeli, setModeli] = useState('');
  const [viti, setViti] = useState('');
  const [kubikazha, setKubikazha] = useState('');
  const {id} = useParams()

  const navigate = useNavigate()

  const handleSubmit = (event) => {
      event.preventDefault()

      axios.put(`http://localhost:5000/update/${id}`, {marka, modeli, viti, kubikazha})

          .then(res => {
              console.log(res)
              navigate('/')
          })
          .catch(err => {
              console.log(err)
          })

  }

  return (
    <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>

        <div className = 'w-50 bg-white rounded p-3'>
          
            <form onSubmit = {handleSubmit}>
                <h2>Update makinat</h2>

                <div className = 'mb-2'>
                    <label htmlFor=''>Marka</label>
                    <input
                        type = 'text'
                        placeholder = 'Enter Mark'
                        className = 'form-control'
                        onChange = {e => setMarka(e.target.value)}
                    />                   
                </div>

                <div className = 'mb-2'>
                    <label htmlFor=''>Modeli</label>
                    <input
                        type = 'text'
                        placeholder = 'Enter Model'
                        className = 'form-control'
                        onChange = {e => setModeli(e.target.value)}
                    />                   
                </div>

                <div className = 'mb-2'>
                    <label htmlFor=''>Viti</label>
                    <input
                        type = 'number'
                        placeholder = 'Enter Year'
                        className = 'form-control'
                        onChange = {e => setViti(e.target.value)}
                    />                   
                </div>

                <div className = 'mb-2'>
                    <label htmlFor=''>Kubikazha</label>
                    <input
                        type = 'number'
                        placeholder = 'Enter displacement'
                        className = 'form-control'
                        onChange = {e => setKubikazha(e.target.value)}
                    />                   
                </div>

                <button className = 'btn btn-success'>Update</button>
                
            </form>

        </div>
      
    </div>
  )
}

export default UpdateMakinat
