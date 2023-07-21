// import React from 'react'
import Navigation from './components/Navigation'
const App = () => {
  return (
    <div>
      <Navigation activeClass={location.pathname} />
    </div>
  )
}

export default App