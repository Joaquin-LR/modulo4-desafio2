import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';

function App() {
  const [currentView, setCurrentView] = useState('home'); // Estado para controlar la vista actual
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión

  return (
    <>
      <div className='container'>
        <div className='nav-container'>
          <Navbar 
            navtitle={'¡Pizzería Mamma Mia!'}
            home={'🍕 Home'}
            login={'🔐 Login'}
            register={'🔐 Register'}
            profile={'🔒 Profile'}
            logout={'🔒 Logout'}
            total={'🛒 Total: $'}
            setCurrentView={setCurrentView} // Pasar función para cambiar la vista
            isLoggedIn={isLoggedIn} // Pasar estado de login
          />
        </div>

        {currentView === 'home' && (
          <>
            <Header 
              headerTitle={'¡Pizzería Mamma Mia!'}
              headerSubtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
            />
            <Home />
          </>
        )}

        {currentView === 'register' && (
          <div className='register-container'>
            <RegisterPage setCurrentView={setCurrentView} />
          </div>
        )}

        {currentView === 'login' && (
          <div className='login-container'>
            <LoginPage setCurrentView={setCurrentView} setIsLoggedIn={setIsLoggedIn} /> {/* Pasar setIsLoggedIn a LoginPage */}
          </div>
        )}

        <Footer footerContent={'©2021 - Pizzería Mamma Mia! - Todos los derechos reservados'} />
      </div>
    </>
  );
}

export default App;