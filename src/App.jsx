import { useState } from 'react'
import instagramLogo from './assets/instagram.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="root">
      <div>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} className="logo" alt="Instagram logo" />
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
        Click on the Instagram logo to visit Instagram
      </p>
    </div>
  )
}

export default App
