import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import  './styles'

export default function Test2() {

  return (
        <div >
          <div >
              <h2>Test2</h2>
            </div>
        </div>
  )
}
ReactDOM.render(
    <Test2/>,
  document.getElementById('root')
);


