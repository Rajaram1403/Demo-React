import './App.css';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import BlogSettings from './Components/Blog-settings/BlogSettings';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/blog-settings"/>} />
        <Route path='/blog-settings' element={<BlogSettings/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
