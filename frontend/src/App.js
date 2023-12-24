import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateMakinat from './CreateMakinat';
import Makinat from './Makinat';
import UpdateMakinat from './UpdateMakinat';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                  <Route path = '/' element = {<Makinat />} />
                  <Route path = '/create' element = {<CreateMakinat />} />
                  <Route path = '/update/:id' element = {<UpdateMakinat />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
