import Cuisine from "./Cuisine";
import Home from "./Home"
import { Route, Routes} from "react-router-dom"
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from "framer-motion"
function Pages() {
  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages