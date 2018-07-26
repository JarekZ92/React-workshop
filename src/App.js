import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'


import BasicComponents from './Views/BasicComponents/BasicComponents'
import Dashboard from './Views/Dashboard'
import PassingParameters from './Views/PassingParameters'
import Counter from './Views/Counter'
import ToDo from './Views/ToDo'
import Navigation from './Views/Navigation'
import FetchingRandomUsers from './Views/FetchingRandomUsers/FetchingRandomUsers'

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-componets'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
        <Route path={'/Counter'} component={() => <Counter number={5} />} />
        <Route path={'/toDo'} component={ToDo} />
        <Route path={'/fetching-random-users'} component={FetchingRandomUsers} />
      </div>
    </Router >
  </div >
)

export default App
