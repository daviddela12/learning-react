import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Title} from "./Title.jsx";
import {UserName} from "./UserName.jsx";
import {UserNameWithChildren} from "./UserNameWithChildren.jsx";
import {TitleWithSpreadOperator} from "./TitleWithSpreadOperator.jsx";
import { ButtonWithState } from './ButtonWithState.jsx';

function App() {
  const [count, setCount] = useState(0)

  const formatUserName = (name) => `@${name}`
    const ops = {title:"hola mundo", enlace:"enlace"}

    const [isFollowing, setIsFollowing] = useState(false)
  
  return (
    <>
        <Title title="Hola mundo" enlace="ejemplo"/>
        <ButtonWithState initialValue={false}></ButtonWithState>
        <TitleWithSpreadOperator {...ops}></TitleWithSpreadOperator>
        <UserName formatUserName={formatUserName} name="david"/>
        <UserNameWithChildren>Hi, I am a children</UserNameWithChildren>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <h1>PARTE2: El initialState sólo se ejecuta una vez</h1>
        <ButtonWithState initialValue={isFollowing}/>
        <button onClick={() => setIsFollowing(!isFollowing)}>Cambia estado isFollowing del padre a: {String(isFollowing)}</button>
    </>
  )
}

export default App
