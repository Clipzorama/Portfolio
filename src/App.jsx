import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

function App() {

  /* 
  
  The index attribute is a shorthand way of saying: 
  
  <Route path="/" element={<Home />} />

  index is used for the default route

  */

  return (
    <>
      <BrowserRouter>
      {/* Wrapped in routes for all segues */}
        <Routes>
          <Route index element={<Home />} />
          {/* Reacts Version of a 404 Basically */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
