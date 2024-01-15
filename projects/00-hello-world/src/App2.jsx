import './App.css'
import {useState} from "react";

export function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <a href='/about'>About page</a>
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <a href='/'>home page</a>
    </>
  )
}

function App() {
  // const [pathname, setPathname] = useState(window.location.pathname);
  const pathname2 = window.location.pathname
  return (
    <>
      {pathname2 === '/' && <HomePage />}
      {pathname2 === '/about' && <AboutPage />}
    </>
  )
}

export default App
