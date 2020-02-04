import Icon from "./lib/components/icon/icon"
//import Button from "./lib/components/button/button"
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route, NavLink} from 'react-router-dom'
import './example.scss'

import LayoutExample from './lib/components/layout/layout.example'
import IconExample from './lib/components/icon/icon.example'
import  { Layout,Sider,Header, Content, Footer } from "./lib/components/layout/layout"



ReactDOM.render((
    <Router>
        <Layout className='page'>
            <Header className='page-header'>
                <img src="./logo.png" style = {{height:60,width:120,margin:'2 8'}}/>
            </Header>
            <Layout>
                <Sider className='page-sider'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="./icon">icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="./layout">布局</NavLink>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Sider>
                <Content className="page-main">
                    <Route path='/layout' component= {LayoutExample} />
                    <Route path='/icon' component= {IconExample} />
                </Content>
            </Layout>
            
            <Footer className='page-footer'>
                footer
            </Footer>
        </Layout>
    </Router>
    
),document.querySelector('#root'))