require('./styles.less')
import React from 'react'

const DataTable = React.createClass({
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
})

export default DataTable
