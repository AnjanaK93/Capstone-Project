import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/common/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginForm from './components/common/LoginForm';
import SignupFormDirector from './components/CastingDirector/SignupFormDirector';
import SignupFormArtist from './components/Artist/SignupFormArtist';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/CastingDirector/RegistrationForm';
import RegisterForm from './components/Artist/RegisterForm';
import ArtistPage from './components/Artist/ArtistPage';
import ArtistNavbar from './components/Artist/ArtistNavbar';
import DirectorPage from './components/CastingDirector/DirectorPage';
import DirectorNavbar from './components/CastingDirector/DirectorNavbar';
import ArtistProfileDashboard from './components/Artist/ArtistProfileDashboard';
import TalentPosts from './components/TalentPost/TalentPosts';
import AppliedPosts from './components/TalentPost/AppliedPosts';
import CastingForm from './components/CastingDirector/CastingForm';
import DirectorHome from './components/CastingDirector/DirectorHome';
import DirectorDashboard from './components/CastingDirector/DirectorDashboard';

function App() {
  

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup-artist" element={<SignupFormArtist/>}/>
          <Route path="/signup-director" element={<SignupFormDirector/>}/>
          <Route path="/artist-page" element={<ArtistPage/>}/>
          <Route path="/artist-navbar" element={<ArtistNavbar/>}/>
          <Route path="/director-page" element={<DirectorPage/>}/>
          <Route path="/director-navbar" element={<DirectorNavbar/>}/>
          <Route path="/register-artist" element={<RegisterForm/>}/>
          <Route path="/register-director" element={<RegistrationForm/>}/>
        </Routes>
        <Footer></Footer>
    </BrowserRouter> */}
    {/* <ArtistProfileDashboard></ArtistProfileDashboard> */}
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<TalentPosts />} />
        <Route path="/dashboard" element={<ArtistProfileDashboard />} />
        <Route path="/applied-posts" element={<AppliedPosts />} />
      </Routes>
    </BrowserRouter> */}
     {/* <CastingForm></CastingForm> */}
    {/* <TalentPosts></TalentPosts> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DirectorHome />} />
        <Route path="/profile" element={<ArtistProfileDashboard />} />
        <Route path="/applied-posts" element={<AppliedPosts />} />
        <Route path="/director" element={<DirectorHome />} />
        <Route path="/director/dashboard" element={<DirectorDashboard />} />
        <Route path="/add-talent-post" element={<CastingForm/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
