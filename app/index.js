import React from 'react'
import { render } from 'react-dom'
import DataTable from './components/data-table'

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>React-Redux Data-Table</h1>
        <DataTable />
      </div>
    )
  }
})

render(<App />, document.getElementById('main-app'))
