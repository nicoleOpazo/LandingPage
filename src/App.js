import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { HomePage, CataloguePage, ContactPage } from "./pages";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/catalogo" element={<CataloguePage/>}/>
        <Route path = "/contacto" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;