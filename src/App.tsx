import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Agents from "./pages/Agents"
import Home from "./pages/Home"
import Investors from "./pages/Investors"
import NotFound from "./pages/NotFound"
import Programs from "./pages/Programs"
import Testimonials from "./pages/Testimonials"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="investors" element={<Investors />} />
          <Route path="agents" element={<Agents />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
