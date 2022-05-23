import './App.css';
import Home from './Components/Contents/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './SharedComp/Header_Footer/Header';
import Orders from './Components/Contents/Orders';
import Login from './Components/Contents/Login';
import Footer from './SharedComp/Header_Footer/Footer';
import Register from './Components/Contents/Register';
import AuthProvider from './SharedComp/Hooks/AuthProvider';
import PrivateRoute from './SharedComp/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
