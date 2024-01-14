import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="Login/*" element={<Login />} />
      <Route exact path="ProFile*" element={<Profile />} />
      <Route exact path="register/*" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
}


export default App;
