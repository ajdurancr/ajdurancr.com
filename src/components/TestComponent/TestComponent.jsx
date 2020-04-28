import React from 'react'

const TestComponent = (props) => (
  <div>
    <h2>Props</h2>
    <ul>
      {Object.keys(props).map((propName) => (
        <li key={props[propName]}>{`${propName}: ${JSON.stringify(props[propName], null, 2)}`}</li>
      ))}
    </ul>
  </div>
)

export default TestComponent
