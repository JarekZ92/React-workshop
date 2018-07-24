import React from 'react'

import SingingButtonWithBorder from './SingingButtonWithBorder'

const App = () => (
  <div>
    <SingingButtonWithBorder
      label={'Przycisk 1'}
      sound={'La la la'}
      makeSound={() => alert('Im from makeSound')}
    />
  </div>

)

export default App
