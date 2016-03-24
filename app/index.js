import React from 'react'
import { render } from 'react-dom'

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>React-Redux Data-Table</h1>
      </div>
    )
  }
})

render(<App />, document.getElementById('main-app'))
