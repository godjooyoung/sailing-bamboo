import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
// import Detail from "../pages/Detail";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Details from "../pages/Details";
import WrapContainer from "../components/common/WrapContainer";
import JoinUs from "../pages/JoinUs";

const Router = () => {
  return (
    <BrowserRouter>
    <WrapContainer>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/join" element={<JoinUs/>}/>
        <Route path="/main" element={<Main/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      <Footer/> 
      </WrapContainer>
    </BrowserRouter>
  );
};

export default Router;
