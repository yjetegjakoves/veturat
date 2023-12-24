import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateMakinat() {

  const [marka, setMarka] = useState('');
  const [modeli, setModeli] = useState('');
  const [viti, setViti] = useState('');
  const [kubikazha, setKubikazha] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
      event.preventDefault()
      axios.post('http://localhost:5000/create', {marka, modeli, viti, kubikazha})
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
                <h2>Add makina</h2>

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
                        placeholder = 'Enter year'
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

                <button className = 'btn btn-success'>Submit</button>
                
            </form>

        </div>
      
    </div>
  )
}

export default CreateMakinat
