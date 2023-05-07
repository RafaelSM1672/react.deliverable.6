import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import Product from "./pages/Product";
import Header from "./components/layout/Header";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <section>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      
    </section>
  )
}

export default App
