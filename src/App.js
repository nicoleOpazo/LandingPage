import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { HomePage, ServicesPage, CataloguePage, ContactPage, ReadMorePage } from "./pages";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/servicios" element={<ServicesPage/>}/>
        <Route path = "/catalogo" element={<CataloguePage/>}/>
        <Route path = "/contacto" element={<ContactPage/>}/>
        <Route path = "/readmore" element={<ReadMorePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;