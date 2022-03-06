import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Transactions from "./pages/Transactions/Transactions";
import Navbar from "./components/Navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux'
import userActions from './redux/actions/userActions'

const Root = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/login')
    }else {
      dispatch(userActions.signInLS(localStorage.getItem("token"))).then(res => {
        if(res.status === 401){
          localStorage.removeItem("token")
          navigate('/login')
        }
      });
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

const App = () => {
  const token = useSelector(state => state.user.token)
  return (
    <BrowserRouter>
      {token && <Navbar />}
      <Root />
    </BrowserRouter>
  );
};

export default App;
