import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import SingIn from './pages/SignIn'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/*' element={< Index />} />
          <Route exact path='/authentication/*' element={< SingIn />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
