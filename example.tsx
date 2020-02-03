import Icon from "./lib/components/icon/icon"
//import Button from "./lib/components/button/button"
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route, Link} from 'react-router-dom'


import LayoutExample from './lib/components/layout/layout.example'
import IconExample from './lib/components/icon/icon.example'


ReactDOM.render((
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="./icon">icon</Link>
                </li>
                <li>
                    <Link to="./layout">布局</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
             <div>
                <Route path='/layout' component= {LayoutExample} />
                <Route path='/icon' component= {IconExample} />
             </div>
        </div>
    </Router>
    
),document.querySelector('#root'))