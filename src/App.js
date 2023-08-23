import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/*' element={< Index />} />
          <Route exact path='/authentication/*' element={< SignIn />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
