import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { Home } from './pages/index.js';
import ReactDOM from 'react-dom'
const ClintRoutes = () => {

  return (
    <>
      <Routes>

      </Routes>
    </>
  )
}
const Test = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw", background: "black", display: "flex", justifyContent: 'center', alignItems: 'center', }}>
        <div style={{ background: "#0e0e0e", padding: "20px", border: "2px solid #2d2d2d", width: "90%", maxWidth: "450px", borderRadius: "30px" }}>
          <h3 style={{ color: "#f53e3e", fontSize: "1.6rem", }}>This page is not accessible for you</h3>
          <p style={{ color: "white", textAlign: "center", fontSize: "1.1rem", marginTop: "20px" }}>If You Want to see this page please connect me</p>
          <div style={{ display: "flex", flex: "1", alignItems: "center", gap: "20px", marginTop: "30px" }}>
            <IoMdMail style={{ fontSize: "1.5rem", color: "white", }} />
            <p style={{ color: "white", textAlign: "center", fontSize: "1.1rem", }}>abhishekpundir077@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/*" element={<Test />} />
    </Routes>
  </BrowserRouter>
);