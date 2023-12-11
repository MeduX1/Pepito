import LandingPage from "./pages/LandingPage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Order from "./pages/Order"
import Taco from "./pages/Tacos"
import Tagin from "./pages/Tagine"
import Pizza from "./pages/Pizza"
import Drinks from "./pages/Drinks"
import Login from "./pages/Login"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/meals">
            <Route index element={<Navigate to={"/meals/tacos"}/>}/>
            <Route path="tacos" element={<Taco/>}/>
            <Route path="tagine" element={<Tagin/>}/>
            <Route path="pizza" element={<Pizza/>}/>
            <Route path="drinks" element={<Drinks/>}/>
          </Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
