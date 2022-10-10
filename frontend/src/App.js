import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Hotel from './pages/Hotel/Hotel';
import Hotels from './pages/hotels/Hotels';
import Login from './pages/login/Login';
function App() {
  return (
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/hotels' element={<Hotels />} />
              <Route path='/hotels/:id' element={<Hotel />} />
              <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
