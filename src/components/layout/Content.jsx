import React from "react";
import { Route, Routes } from 'react-router-dom';

import "./Content.css";

import Home from '../../views/tamplaites/Home'
import About from '../../views/tamplaites/About'
import Param from '../../views/tamplaites/Param'
import NotFound from '../../views/tamplaites/NotFound'

const Content = (props) => (
  <main className="Content">
      <Routes>        
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </main>
);

export default Content;
