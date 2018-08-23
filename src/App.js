import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { Link } from 'react-router-dom'
import Home from './Home'
import Countries from './Pages/Countries'
import logo from './react.svg'
import './App.css'
import './Home.css'

const App = () => (
  <main>
    <div className="Home-header">
      <h2>Welcome to Razzle</h2>
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/countries" component={Countries} />
    </Switch>
  </main>
)

export default App
