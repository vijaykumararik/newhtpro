import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Homeportal from './components/homeportal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
        <Routes>
         
          <Route path='/*' element={<Homeportal />} />
         
          
      
        </Routes>
     

      </BrowserRouter>
    </div>
  );
}

export default App;
