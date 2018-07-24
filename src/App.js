import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import BasicComponents from './BasicComponents/BasicComponents'
import Dashboard from './Dashboard'
import PassingParameters from './PassingParameters'

const App = () => (
  <div>
    <Router>
      <div>
        <Link to={'/dashboard'}>Dashboard</Link>
        <Link to={'/basic-componets'}> BasicComponents</Link>
        <Link to={'/passing-parameters/cos'}> Parameter - coś</Link>

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-componets'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
      </div>
    </Router>
  </div>
)

export default App
