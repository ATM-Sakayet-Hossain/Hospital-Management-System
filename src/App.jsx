import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./components/layout/Index";
import ForgotPassword from "./pages/ForgotPassword"
import Error from "./pages/Error";
import DiagnosisInvoice from "./pages/DiagnosisInvoice";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/" element={<Layout/>} >
            <Route index element={<Dashboard />} />
            <Route path="/DiagnosisInvoice" element={<DiagnosisInvoice />} />
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
