import { BrowserRouter } from "react-router-dom"
import Category from "./components/Category"
import Pages from "./pages/Pages"
import Search from "./components/Search"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { GiKnifeFork } from "react-icons/gi"

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"}>Hore Recipe</Logo>
    </Nav>
    <Search/>
      <Category />
      <Pages />
    </BrowserRouter>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`

export default App
