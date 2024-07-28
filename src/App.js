import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Components/Events.js';
import Footer from './Components/Footer.js';
import EventNav from './Components/EventNav.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Pages/Home';
import Register from './Components/Register';
import AddEvent from './Components/AddEvent.js';
import AdminNav from './Components/AdminNav.js';
import EventDetails from './Components/EventDetails.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <Router>
      <>
        <ToastContainer />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path='/AdminEvent'
            element={
              <>
                <AdminNav />
                <div className='content'>
                  <Events />
                </div>
              </>
            }
          />

          <Route
            path='/Event'
            element={
              <>
                <EventNav />
                <div className='content'>
                  <Events />
                </div>
              </>
            }
          />



          <Route
            path='/AddEvent'
            element={
              <>
                <AdminNav />
                <div className='content'>
                  <AddEvent />
                </div>
              </>
            }
          />

          <Route
            path='/Events/:id'
            element={
              <>
                <EventNav />
                <div className='content'>
                  <EventDetails />
                </div>
              </>
            }
          />
          <Route
            path='/Login/Register/Login'
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path='/Login/Register'
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/Home/Register'
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/Home/Register/Login'
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
