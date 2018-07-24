import React from 'react'

import SingingButton from './SingingButton';
import Border from './Border'

const App = () => (
  <Border>
    <SingingButton
      label={'Przycisk 1'}
      sound={'La la la'}
      makeSound={() => alert('Im from makeSound')}
    />
    <SingingButton
      label={'Przycisk 2'}
      sound={'Kotki dwa!'}
    />
  </Border>

)

export default App
